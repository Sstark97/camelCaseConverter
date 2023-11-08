export function camelCaseConverter(aText: string) {
    const firstLetter = aText.charAt(0).toUpperCase();
    const textRemainder = aText.substring(1, aText.length);
    return `${firstLetter}${textRemainder}`;
}