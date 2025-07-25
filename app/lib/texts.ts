export function truncateText(text: string, length = 50): string {
    if (text.length > length) {
        return text.substring(0, length) + "...";
    }
    return text
}