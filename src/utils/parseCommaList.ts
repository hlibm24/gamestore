export const parseCommaList = (str: string): string[] => {
    if (!str) return [];
    return str.split(',').map((item)=> item.trim());
}