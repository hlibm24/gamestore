export interface CartItem {
    appID: number;
    slug: string;
    name: string;
    header_image: string;
    price: number;
}

export function isCartItem(value: unknown): value is CartItem {
    if (typeof value !== 'object' || value === null) return false;

    const item = value as Record<string, unknown>;
    return (
        typeof item.appID === 'number' &&
        Number.isFinite(item.appID) &&
        typeof item.slug === 'string' &&
        typeof item.name === 'string' &&
        typeof item.header_image === 'string' &&
        typeof item.price === 'number' &&
        Number.isFinite(item.price)
    );
}