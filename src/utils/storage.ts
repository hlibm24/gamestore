export function loadFromStorage<T>(key: string, fallback: T): T {
    try {
        const saved = localStorage.getItem(key);
        return saved ? JSON.parse(saved) : fallback;
    } catch (error) {
        console.error(`Failed to load '${key}' from localStorage`, error);
        return fallback;
    }
}

export function loadArrayFromStorage<T>(
    key: string,
    isItem: (value: unknown) => value is T,
): T[] {
    const saved = loadFromStorage<unknown>(key, []);

    if (!Array.isArray(saved)) {
        console.error(`Invalid array data in localStorage key '${key}'`);
        return [];
    }

    const validItems = saved.filter(isItem);
    if (validItems.length !== saved.length) {
        console.error(`Some invalid items in localStorage key '${key}' were ignored`);
    }

    return validItems;
}

export function saveToStorage(key: string, value: unknown): void {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.error(`Failed to save '${key}' to localStorage`, error);
    }
}