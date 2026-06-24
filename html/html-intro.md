# 📘 Intro to HTML


## 🧠 What is Frontend?

Frontend is the part of web development that is responsible for what the user sees in the browser.

Every website is built using three main technologies:

* **HTML** — structure (what is on the page)
* **CSS** — styles (how it looks)
* **JavaScript** — logic (how it works)

**Example:**

* HTML → a button
* CSS → button color and size
* JavaScript → what happens when you click


## 🌐 What is HTML?

HTML (**HyperText Markup Language**) is a markup language used to describe the structure of a web page.

HTML is made of tags.


### 🧩 What is a tag?

A tag is a building block of HTML.  
It tells the browser what kind of content it is.

Most HTML elements have:

- an opening tag  
- a closing tag  
- and content between them  



#### 📌 Example:

```html
<h1>Hello World</h1>
<p>This is a paragraph</p>
```
---

## 🏗 Basic HTML Structure

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>

  <body>
    <header>
      <h1>Hello World</h1>
    </header>

    <main>
      <p>Main content goes here</p>
    </main>

    <footer>
      <p>Footer content</p>
    </footer>
  </body>
</html>
```

### 📌 Explanation:

- 📄 `<!DOCTYPE html>`

    This declaration tells the browser that this document is written in HTML5.

- 🌐 `<html lang="en">`

    This is the root element of the entire HTML document.

    👉 Why it is important:

    - wraps all HTML content
    - defines the language of the page
    - **lang="en"** attribute:
        - helps search engines (SEO)
        - improves accessibility (screen readers)
        - helps browsers with translation


- 🧠 `<head>`

    Contains meta information about the page which is NOT visible to the user.

    👉 Common things inside:

    - page title
    - character encoding
    - responsive settings
    - links to CSS/JS files


- 🔤 `<meta charset="UTF-8">`

    Defines the character encoding of the document.

    A computer stores text not as letters, but as numbers.
    An encoding is a rule that states - **which number corresponds to which character**

    `72 101 108 108 111 32 87 111 114 108 100` -> `Hello World`

    `UTF-8` - is a modern encoding capable of displaying:

    - English → Hello
    - Russian → Привет
    - German → Schön
    - Emoji → 🔥😊🚀
    - almost all languages ​​of the world

- 📱 `<meta name="viewport" content="width=device-width, initial-scale=1.0">`

    Makes the page responsive on mobile devices.

    - `width=device-width` → page width matches device screen
    - `initial-scale=1.0` → default zoom level

    Without it, websites may look zoomed out on phones.


- 🗂️ `<title>Document</title>`

    Sets the title of the page.

- 🧱 `<body>`

    Contains all visible content of the page.

    👉 Everything the user sees goes here:
    - text
    - images
    - buttons
    - forms
    - etc.


## ⚙️ Attributes

Attributes provide additional information for HTML elements.


### 🌍 Global attributes

These attributes can be used on almost any HTML element.

#### Example:

- `class` → used for CSS styling and JavaScript selection
- `id` → unique identifier of an element
- `style` → inline CSS styles
- `title` → tooltip text on hover

```html
<div class="card" id="main-card" title="Hello">
  Content
</div>
```

### 🎯 Element-specific attributes

These attributes only work with specific elements.

#### Examlpe:

```html
<a href="https://example.com" target="_blank">Open</a>
```

- href → URL of the link
- target → where to open the link

## 🧩 Most Important HTML Tags

### 🔹 Headings

Headings are used to define titles and subtitles on a page.

HTML has 6 levels of headings, from `<h1>` (most important) to `<h6>` (least important).

```html
<h1>Main title</h1>
<h2>Subtitle</h2>
<h3>Section</h3>
```

---

### 🔹 Paragraph

Paragraphs are used to define blocks of text on a page.

```html
<p>This is a paragraph</p>
```

---

### 🔹 Link

Links are used to navigate from one page to another or to external websites.

```html
<a href="https://example.com">Go to site</a>
```

#### ⚙️ 🎯 Element-specific attributes
- `href` → URL where the link goes
- `target` → how to open a resource

---

### 🔹 Image

Images are used to display pictures on a page.

```html
<img src="image.jpg" alt="Description" />
```

#### ⚙️ 🎯 Element-specific attributes
- `src` → image source
- `alt` → alternative text (text that will shown, if image was not loaded)
`width` → sets image width (in pixels)
`height` → sets image height (in pixels)

---

### 🔹 Lists

**Unordered list:**

```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
```

Will be displayed as:
  - Item 1
  - Item 2

**Ordered list:**

```html
<ol>
  <li>Item 1</li>
  <li>Item 2</li>
</ol>
```

Will be displayed as:
  1. Item 1
  2. Item 2

---

### 🔹 Containers

Containers are used to group and structure content on a page.

```html
<div>Block element</div>
<span>Inline element</span>
```

---

### 🔹 Button

Buttons are used to trigger actions when the user clicks on them.

```html
<button>Click me</button>
```

#### ⚙️ 🎯 Element-specific attributes
- `type` → defines button behavior
    - `button` → normal button (no form action)
    - `submit` → submits a form
    - `reset` → resets form fields
- `disabled` → prevents the user from interacting with the button(it cannot be pressed or focused)

---

### 🔹 Input

Inputs are used to collect or receive user data.

```html
<input
  type="text"
  id="name"
  name="name"
  placeholder="Enter your name"
  minlength="4"
  maxlength="8"
  size="10" />
```

#### ⚙️ 🎯 Element-specific attributes
- `type` → defines the type of input (text, password, email, date, file etc.)
- `placeholder` → hint text shown inside input when empty
- `required` → makes the field mandatory (form cannot be submitted if empty)
- `minlength` → minimum number of characters allowed
- `maxlength` → maximum number of characters allowed
- `value` → input field value
- `size` → width of the input field (number of characters)
- `name` → key used when sending form data

### 🔹 Label

Labels are used to describe an input field.

```html
<label for="email">Email</label>

<input
  id="email"
  type="email"
  name="email"
  placeholder="Enter your email"
/>
```

They are connected to inputs using:
- for (on label)
- id (on input)

🧠 Why it is important:
- improves user experience (UX)
- allows clicking on label to focus input
- makes forms more accessible

## ⚙️ Attributes

Attributes provide additional information for tags.

```html
<a href="https://example.com" target="_blank">Open</a>
```

### Common attributes:

* `href`
* `src`
* `alt`
* `class`
* `id`
* `style`
* `target="_blank"`


## 🧾 HTML Forms

A form is used to collect user input.

It is a container for input fields and buttons.

### ❓ What is the `<form>` tag for?:
- it groups inputs together
- it represents user data submission
- it is designed for input handling

### 🧩 Basic form structure

```html
<form>
  <input 
    type="text"
    name="username"
    placeholder="Enter your username"
  />

  <input
    type="password"
    name="password"
    placeholder="Enter your password"
  />

  <button type="submit">Send</button>
</form>
```


## 🧠 Semantic HTML

Semantic HTML means using HTML elements that clearly describe their meaning.

Instead of only using `<div>` for everything, we use elements that explain the structure of the page.

### 🧪 Simple example:

```html
<header>
  <h1>My Website</h1>
</header>

<main>
  <section>
    <p>Welcome to my site</p>
  </section>
</main>

<footer>
  <p>© 2026</p>
</footer>
```