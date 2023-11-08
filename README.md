# Camel Case Converter Kata

## Rules
- An empty string should be returned as is. Example: "" ⇒ ""
- For a word with the first letter in uppercase, the result should be the same. Example: "Foo" ⇒ "Foo"
- For text containing words with the first letter in uppercase, separated by spaces, we return the words joined in camel case format. Example: "Foo Bar" ⇒ "FooBar"
- For text containing words with the first letter in uppercase, separated by hyphens, it should return the words joined. Example: "Foo_Bar-Foo" ⇒ "FooBarFoo"
- For a word with the first letter in lowercase, the result should return the same word with the first letter in uppercase. Example: "foo" ⇒ "Foo"
- For text containing words in lowercase, it should transform each word to uppercase and join them. "foo_bar foo-bar" ⇒ "FooBarFooBar"
