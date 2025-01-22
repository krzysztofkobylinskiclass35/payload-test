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

## Info Cards block

It will contain a set of simple content cards with a title and description (the image is optional)

##### Props

- `heading: string`
- `items: array ({ title: text, description: text, image?: upload })`

## Media block

##### Props

- `image: upload`
- `position: select` ("default" | "fullscreen")

## Text block

##### Props

- `content: richText`

## Shifted Media Content block

- it will contain a layout with text on the left side and a shifted image on the right
- there will be a button with a link

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


## Content Grid block

It will contain a set of large image-based cards with titles and descriptions

##### Props

- `items: array` (`title: text`, `description: text`, `image: upload`)


## Tabs with Summary block

- it will contain a set of tabs with a Summary block inside each
- the Summary block will have a title, description, button with a link and an image

##### Props

- `heading: text`
- `tabs: array` (`title: text`, `summary: { title: richText, description: richText, buttonText: text, buttonLink: text, image: upload }`)


## Footer Call to Action block

It will contain a title and buttons with links

##### Props

- `title: richText`
- `buttons: array` (`text: text`, `link: link`, `buttonStyle: select ("primary" | "secondary")`)


## Footer Navigation block

It will contain a set of links to pages with some anchors and a language switcher

##### Props

- `links: array` (`title: text`, `link: link`)
- `locales: array`


## Footer Copyright block

It will contain a copyright text and links to social media

##### Props

- `copyrightText: text`
- `socialMediaLinks: array` (`icon: upload`, `link: link`)


## Footer Multi Section block

It will contain a Footer Call to Action, Footer Navigation and Footer Copyright blocks

##### Props

- `callToAction: { title: richText, buttons: array }`
- `navigation: { links: array, locales: array }`
- `copyright: { text: text, socialMediaLinks: array }`
