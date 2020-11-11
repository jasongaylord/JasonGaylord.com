---
title: Getting Started with React Components and JSX in Gatsby
author: Jason Gaylord
date: 2020-11-12
categories: [gatsby,javascript,react,web]
tags:  [gatsby,javascript,react,web]
post-number: 1101
image: https://cdn.jasongaylord.com/images/2020/11/12/gatsby-greeting-rendered-with-children.jpg
bitly: https://jasong.us/3pgDROL
---

I've started to play with React a bit as I'm dabbling in Gatsby. As I started to dabble with many of the starters, I noticed that React uses JSX as a template language. JSX is a JavaScript syntax Extension that allows developers to use UI markup within JavaScript. 

```js
const hello = <h1>Hello Friends!</h1>;
```

An example of using JSX is shown above. You'll notice that we're mixing JavaScript and HTML. You may be thinking "how can browsers interpret this?" Well, it's quite simple. They're not. React will read the JavaScript and transpile appropriately at build time. The compiled file will be dropped in the `public` folder.

For purposes of this post, we've created a brand new Gatsby application using `gatsby new helloworld https://github.com/gatsbyjs/gatsby-starter-hello-world`, a "Hello World" starter for Gatsby. Gatsby is a static site generator that uses React to generate HTML, CSS, and JavaScript. I'll cover more about Gatsby at a later date. 

In this post, I'll be covering:

* [Building a Basic Component](#building-a-basic-component)
* [Adding Props to our Component](#adding-props-to-our-component)
* [Accessing the Contents of a Component](#accessing-the-contents-of-a-component)

## Building a Basic Component
Now that we have a high level understanding of JSX, let's build our first component. Under the `src` folder, let's create a `components` folder and add a new JavaScript file called `hello.js`. Inside of our JavaScript file, let's paste the following:

```js
import React from "react"

export default function Hello() {
    return <h1>Hello World!</h1>
}
```

You'll notice that in this component, we are returning HTML from our function. Again, remember that this is only temporary as React will properly transpile this for the browser. Next, we'll use this new component inside of a new page we create. Under the same `src` folder, lets create a folder called `pages`, if it does not already exist. In the `pages` folder, we'll create a new file `index.js`. If the file already exists, we'll overwrite it. Let's paste the following into this file:

```js
import React from "react"
import Hello from "../components/hello.js"

export default function Home() {
  return <Hello />
}
```

In both cases, we're really using the Component model. As with the `Hello()` function from our component, our `Home()` function will return the HTML that will display our component. If we run our application using `gatsby develop`, we should see our heading:

{% include open-thumbnail.html path="2020/11/12/gatsby-hello-component.jpg" alt="Hello World component" %}

If we view the source, we'll find the following:

```html
<!DOCTYPE html>
<html>
<head>
    <meta charSet="utf-8"/>
    <meta http-equiv="x-ua-compatible" content="ie=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
    <meta name="note" content="environment=development"/>
    <script src="/socket.io/socket.io.js"></script>
</head>
<body>
    <div id="___gatsby"></div>
    <script src="/polyfill.js" nomodule="">
    </script><script src="/commons.js"></script>
</body>
</html>
```

React is a single page application framework, so we won't see the HTML markup directly in the source. What is sent to the browser after the page loads is:

{% include open-thumbnail.html path="2020/11/12/gatsby-hello-component-rendered.jpg" alt="Hello World component rendered" %}

The `common.js` file loads the content for the URL into the `#___gatsby` container.

## Adding Props to our Component
Let's add a new file to the pages folder called `greeting.js`. Paste in the following source:

```js
import React from "react"
import HelloName from "../components/helloname.js"

export default function Greeting() {
  return <HelloName name="Jason" />
}
```

Notice how we are passing an attribute and value into our `HelloName()` function. This is called a _prop_. Props are properties that you can pass into components. You may do this to change how a component renders or the content to be used for a component. Now, let's add our new component. 

```js
import React from "react"

export default function HelloName(props) {
    if (props.name) {
        return <h1>Hello, {props.name}!</h1>
    }

    return <h1 style={{color: `red`}}>Hello! Tell us who you are please!</h1>
}
```

Notice how we're grabbing the value from `props.name` and if its not null, we'll welcome the individual.

{% include open-thumbnail.html path="2020/11/12/gatsby-greeting-rendered-with-name.jpg" alt="Hello Greeting component rendered with a name" %}

However, if we go back to our `greeting.js` page and remove the `name="Jason"` prop, we should see our page refreshes with this:

{% include open-thumbnail.html path="2020/11/12/gatsby-greeting-rendered-with-noname.jpg" alt="Hello Greeting component rendered without a name" %}

## Accessing the Contents of a Component
There may be times you need to access the contents of a component. Let's assume we have something similar to this:

```html
<HelloName name="Jason">
  Lorem ipsum...
</HelloName>
```

In React, we can gain access to this by accessing the `props.children` property. So, I'll make a small update to my `HelloName()` function shown above. I'll replace the first return statement with this:

```js
return <article><h1>Hello, {props.name}!</h1><div>{props.children}</div></article>
```

I'm wrapping the HTML in a semantic `article` element. The reason for this is that JSX expressions can only have one parent element. So, if we removed this element, we'd have the `h1` and `div` tags at the same level. Now that we have this added, we can then update our `greeting.js` file as shown above and receive the following:

{% include open-thumbnail.html path="2020/11/12/gatsby-greeting-rendered-with-children.jpg" alt="Hello Greeting component rendered with child content" %}

## Summary
In this post we covered the very basics with JSX expressions and React components. We also discussed how to use and render values passed in the `props` collection as well as built in properties such as `children`. This post just touched the surface of what you can do with components and JSX. I'm interested in hearing what you have done with components and JSX. Please feel free to provide feedback in the comments section.