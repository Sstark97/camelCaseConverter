import {camelCaseConverter} from "../core/camelCaseConverter";

/**
 * "Foo" ⇒ "Foo"
 * "foo" -> "Foo"
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

    it("should transform to PascalCase a single word that not have this format", () => {
        expect(camelCaseConverter("foo")).toBe("Foo")
    })
})