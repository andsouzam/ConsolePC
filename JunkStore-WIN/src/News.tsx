import { DialogBody, DialogControlsSection, ServerAPI, Focusable, Navigation } from "decky-frontend-lib";
import { VFC, useEffect, useState, useRef } from "react";
import Logger from "./Utils/logger";
import {
    NewsItem,
    markNewsItemAsRead,
    toggleNewsItemRead,
    isNewsItemRead,
    updateLastCheckTimestamp
} from "./Utils/newsTracking";

interface RSSFeed {
    items: NewsItem[];
}

export const News: VFC<{ serverAPI: ServerAPI; }> = ({ serverAPI }) => {
    const logger = new Logger("News");
    const [feedItems, setFeedItems] = useState<NewsItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [, forceUpdate] = useState({});
    const focusedIndexRef = useRef<number>(-1);

    const [excludedCategories] = useState<string[]>([
]);

    useEffect(() => {
        loadFeed();
    }, []);

    useEffect(() => {
        return () => {
            updateLastCheckTimestamp();
        };
    }, []);

    const loadFeed = async () => {
        try {
            setLoading(true);
            setError(null);

            const result = await serverAPI.callPluginMethod<{ url: string; excluded_categories: string[] }, RSSFeed>(
                "fetch_rss_feed",
                {
                    url: "https://www.junkstore.xyz/feed.xml",
                    excluded_categories: excludedCategories
                }
            );

            if (result.success && result.result) {
                logger.debug("RSS feed loaded:", result.result);
                setFeedItems(result.result.items || []);
            } else {
                setError("Failed to load RSS feed");
                logger.error("Failed to load RSS feed");
            }
        } catch (err) {
            logger.error("Error loading RSS feed:", err);
            setError("Error loading RSS feed: " + String(err));
        } finally {
            setLoading(false);
        }
    };

    const formatDate = (dateString: string) => {
        try {
            const date = new Date(dateString);
            return date.toLocaleDateString(undefined, {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
        } catch {
            return dateString;
        }
    };

    const stripHtml = (html: string) => {
        const tmp = document.createElement("DIV");
        tmp.innerHTML = html;
        return tmp.textContent || tmp.innerText || "";
    };

    return (
        <DialogBody>
            <Focusable
                onOptionsButton={() => {
                    logger.debug("Refetching RSS feed...");
                    loadFeed();
                }}
                onOptionsActionDescription="Refresh Feed"
            >
            <DialogControlsSection>

                {loading && (
                    <div style={{ textAlign: 'center', padding: '20px' }}>
                        Loading news...
                    </div>
                )}

                {error && (
                    <div style={{ color: '#d32f2f', padding: '20px', textAlign: 'center' }}>
                        {error}
                    </div>
                )}

                {!loading && !error && feedItems.length === 0 && (
                    <div style={{ textAlign: 'center', padding: '20px' }}>
                        No news items available
                    </div>
                )}

                {!loading && !error && feedItems.length > 0 && (

                    <div style={{ padding: '40px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        {feedItems.map((item, index) => {
                            const isRead = isNewsItemRead(item.id);
                            return (
                                <Focusable
                                    key={item.id}
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '8px',
                                        padding: '15px',
                                        backgroundColor: isRead ? 'rgba(0, 0, 0, 0.2)' : 'rgba(0, 0, 0, 0.3)',
                                        borderRadius: '8px',
                                        border: isRead ? '1px solid rgba(255, 255, 255, 0.05)' : '1px solid rgba(66, 135, 245, 0.5)',
                                        opacity: isRead ? 0.6 : 1
                                    }}
                                    onActivate={() => {
                                        if (item.link) {
                                            markNewsItemAsRead(item.id);
                                            Navigation.NavigateToExternalWeb(item.link);
                                            forceUpdate({});
                                        }
                                    }}
                                    onSecondaryActionDescription={isRead ? "Mark as Unread" : "Mark as Read"}
                                    onSecondaryButton={() => {
                                        focusedIndexRef.current = index;
                                        toggleNewsItemRead(item.id);
                                        forceUpdate({});
                                    }}
                                    onFocus={() => {
                                        focusedIndexRef.current = index;
                                    }}
                                >
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '8px',
                                        marginBottom: '4px'
                                    }}>
                                        {!isRead && (
                                            <div style={{
                                                width: '8px',
                                                height: '8px',
                                                borderRadius: '50%',
                                                backgroundColor: '#4287f5',
                                                flexShrink: 0
                                            }} />
                                        )}
                                        <div style={{
                                            fontSize: '16px',
                                            fontWeight: isRead ? 'normal' : 'bold'
                                        }}>
                                            {item.title}
                                        </div>
                                    </div>

                                    <div style={{
                                        fontSize: '12px',
                                        opacity: 0.7
                                    }}>
                                        {formatDate(item.pubDate)}
                                    </div>

                                    {item.categories && item.categories.length > 0 && (
                                        <div style={{
                                            display: 'flex',
                                            flexWrap: 'wrap',
                                            gap: '5px',
                                            marginTop: '4px'
                                        }}>
                                            {item.categories.map((category, catIndex) => (
                                                <span
                                                    key={catIndex}
                                                    style={{
                                                        fontSize: '11px',
                                                        padding: '2px 8px',
                                                        backgroundColor: 'rgba(255, 255, 255, 0.15)',
                                                        borderRadius: '10px'
                                                    }}
                                                >
                                                    {category}
                                                </span>
                                            ))}
                                        </div>
                                    )}

                                    <div style={{
                                        fontSize: '14px',
                                        lineHeight: '1.5',
                                        marginTop: '4px'
                                    }}>
                                        {stripHtml(item.description)}
                                    </div>


                                </Focusable>
                            );
                        })}
                    </div>

                )}
            </DialogControlsSection>
            </Focusable>
        </DialogBody>
    );
};
