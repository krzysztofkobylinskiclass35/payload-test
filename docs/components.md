# Components

## Summary block

- it will contain context about the Use Case + Conversion CTA, consisting of 2 blocks: an image and a text
- the image block will be a simple image
- the text block will be a simple text with a title and a description
- the text block will have a button with a link

##### Props

- `heading?: text`
- `image: upload`
- `imagePosition: radio` ("left" | "right")
- `title?: richText`
- `description: richText`
- `buttonText: text`
- `buttonLink: text`

## Stats block

- it will contain the blocks with numbers and descriptions

##### Props

- `heading: string`
- `stats: array ({ number: number, label: text, image: upload })`

## Media block

##### Props

- `image: upload`
- `position: select` ("default" | "fullscreen")

## Text block

##### Props

- `content: richText`

## Media Text block

- it will contain context, consisting of the title, description, button + link
- the image block will be a simple image shifted to the right

##### Props

- `title: richText`
- `description: richText`
- `image: upload`
- `buttonText: text`
- `buttonLink: text`

## Header

It will contain:
- the logo
- the navigation links
- the language switcher
- the button with the link to the API docs
- the login button

##### Props

- `logoImg: upload`
- `navLinks: array`
- `locales: array`
- `apiDocsButtonLabel: text`
- `apiDocsLink: link`
- `loginLink: link`
