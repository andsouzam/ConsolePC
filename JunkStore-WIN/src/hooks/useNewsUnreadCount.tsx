import { useEffect, useState } from "react";
import { ServerAPI } from "decky-frontend-lib";
import { getUnreadCount, NewsItem } from "../Utils/newsTracking";
import Logger from "../Utils/logger";

export function useNewsUnreadCount(serverAPI: ServerAPI, pollInterval: number = 300000) {
    const [unreadCount, setUnreadCount] = useState<number>(0);
    const logger = new Logger("useNewsUnreadCount");

    const checkUnreadNews = async () => {
        try {
            const result = await serverAPI.callPluginMethod<
                { url: string; excluded_categories: string[] },
                { items: NewsItem[] }
            >("fetch_rss_feed", {
                url: "https://www.junkstore.xyz/feed.xml",
                excluded_categories: [],
            });

            if (result.success && result.result) {
                const count = getUnreadCount(result.result.items);
                setUnreadCount(count);
                logger.debug(`Unread news count: ${count}`);
            }
        } catch (err) {
            logger.error("Error checking unread news:", err);
        }
    };

    useEffect(() => {
        checkUnreadNews();
        const interval = setInterval(checkUnreadNews, pollInterval);
        return () => clearInterval(interval);
    }, []);

    const refresh = () => {
        checkUnreadNews();
    };

    return { unreadCount, refresh };
}
