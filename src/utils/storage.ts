export function loadFromStorage<T>(key: string, fallback: T): T {
    try {
        const saved = localStorage.getItem(key);
        return saved ? JSON.parse(saved) : fallback;
    } catch(error) {
        console.error(`Failed to load '${key}' from localStorage`, error)
        return fallback;
    }
}

export function saveToStorage(key: string, value: unknown): void {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch(error) {
        console.error(`Failed to save '${key}' to localStorage`, error)
    }
}