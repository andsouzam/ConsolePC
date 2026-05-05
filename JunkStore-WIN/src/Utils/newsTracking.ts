
const NEWS_READ_KEY = 'js_news_read_items';
const NEWS_LAST_CHECK_KEY = 'js_news_last_check';

export interface NewsItem {
    id: string;
    title: string;
    link: string;
    description: string;
    pubDate: string;
    categories: string[];
}

export function getReadNewsItems(): string[] {
    const stored = localStorage.getItem(NEWS_READ_KEY);
    return stored ? JSON.parse(stored) : [];
}

export function markNewsItemAsRead(itemId: string): void {
    const readItems = getReadNewsItems();
    if (!readItems.includes(itemId)) {
        readItems.push(itemId);
        localStorage.setItem(NEWS_READ_KEY, JSON.stringify(readItems));
    }
}

export function markNewsItemsAsRead(itemIds: string[]): void {
    const readItems = getReadNewsItems();
    const updated = [...new Set([...readItems, ...itemIds])];
    localStorage.setItem(NEWS_READ_KEY, JSON.stringify(updated));
}

export function markNewsItemAsUnread(itemId: string): void {
    const readItems = getReadNewsItems();
    const updated = readItems.filter(id => id !== itemId);
    localStorage.setItem(NEWS_READ_KEY, JSON.stringify(updated));
}

export function toggleNewsItemRead(itemId: string): void {
    if (isNewsItemRead(itemId)) {
        markNewsItemAsUnread(itemId);
    } else {
        markNewsItemAsRead(itemId);
    }
}

export function isNewsItemRead(itemId: string): boolean {
    return getReadNewsItems().includes(itemId);
}

export function getUnreadCount(items: NewsItem[]): number {
    const readItems = getReadNewsItems();
    return items.filter(item => !readItems.includes(item.id)).length;
}

export function getLastCheckTimestamp(): number {
    const stored = localStorage.getItem(NEWS_LAST_CHECK_KEY);
    return stored ? parseInt(stored, 10) : 0;
}

export function updateLastCheckTimestamp(): void {
    localStorage.setItem(NEWS_LAST_CHECK_KEY, Date.now().toString());
}

export function getNewItemsSinceLastCheck(items: NewsItem[]): NewsItem[] {
    const lastCheck = getLastCheckTimestamp();
    return items.filter(item => {
        const itemDate = new Date(item.pubDate).getTime();
        return itemDate > lastCheck;
    });
}

export function clearNewsTracking(): void {
    localStorage.removeItem(NEWS_READ_KEY);
    localStorage.removeItem(NEWS_LAST_CHECK_KEY);
}
