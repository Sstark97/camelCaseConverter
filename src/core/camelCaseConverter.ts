export function camelCaseConverter(aText: string) {
    return aText.charAt(0).toUpperCase() + aText.substring(1, aText.length);
}