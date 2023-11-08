import {camelCaseConverter} from "../core/camelCaseConverter";

/**
 * "Foo" ⇒ "Foo"
 * "Foo Bar" ⇒ "FooBar"
 * "Foo_Bar-Foo" ⇒ "FooBarFoo"
 */
describe("CamelCaseConverter", () => {
    it("should allow empty text", () => {
        expect(camelCaseConverter("")).toBe("")
    })

    it("should be the same when the text is already in PascalCase", () => {
        expect(camelCaseConverter("Foo")).toBe("Foo")
    });
})