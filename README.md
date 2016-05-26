# Gitbook plugin for bulk redirects

This plugin lets you create bulk redirects of URLs as part of Gitbook generation. This is useful if you need to add multiple redirects for articles without adding them to the `SUMMARY.md`.

If you need to redirect individual pages, use the [redirect plugin](https://github.com/ketan/gitbook-plugin-redirect).

## Installation

Add this to your `book.json` plugin list:

```json
{
    "plugins": [ "bulk-redirect" ]
}
```

## Usage

Create a `redirects` property in `book.json` that contains an array of objects. Each object has 2 important keys: `from` and `to`.

- **`from`**: This key should contain the URL of the old HTML, relative to the root of the book output.
- **`to`**: This key should contain the URL of the new HTML, relative to the `from` file.

**For example:**

```json
"redirects": [
    {
        "from": "oldpage.html",
        "to": "newpage.html"
    },
    {
        "from": "olddir/oldpage.html",
        "to": "../newdir/newpage.html"
    },
]
```

This will create the pages `oldpage.html` and `olddir/oldpage.html` in the output and they will redirect to `/newpage.html` and `/newdir/newpage.html` respectively.
