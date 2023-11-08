export function camelCaseConverter(aText: string) {
    const aTextWithoutBlanks = aText.split(" ").join("")
    const firstLetter = aTextWithoutBlanks.charAt(0).toUpperCase()
    const textRemainder = aTextWithoutBlanks.substring(1, aText.length)
    return `${firstLetter}${textRemainder}`
}