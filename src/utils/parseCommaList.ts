export const parseCommaList = (str: string): string[] => {
    return str.split(',').map((item)=> item.trim());
}