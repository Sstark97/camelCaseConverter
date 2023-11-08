import {camelCaseConverter} from "../core/camelCaseConverter";

describe("CamelCaseConverter", () => {
    it("should allow empty text", () => {
        expect(camelCaseConverter("")).toBe("")
    })
})