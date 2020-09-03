# Hello world PureScript action

This action prints "Hello World" or "Hello" + the name of a person to greet to the log. This is a [PureScript](https://github.com/purescript/purescript) port of "[Creating a JavaScript action](https://help.github.com/en/articles/creating-a-javascript-action)" in the GitHub Help documentation.  This repository serves as a template for creating more advanced Actions in [PureScript](https://github.com/purescript/purescript).

## Inputs

### `who-to-greet`

**Required** The name of the person to greet. Default `"PureScript User"`.

## Outputs

### `what-is-purescript`

A description of the PureScript language.

## Example usage

```yaml
uses: hello-world-purescript-action@main
with:
  who-to-greet: 'PureScript User'
```
