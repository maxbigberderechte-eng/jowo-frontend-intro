# 🎨 Intro to CSS

### 🧠 What is CSS?

CSS (Cascading Style Sheets) is used to style HTML elements.

With CSS you can:

* change colors
* set sizes
* control layout
* position elements on the page

---


### 🔗 How to connect CSS to HTML

To use CSS, you need to connect a `.css` file to your HTML file.

Inside the `<head>` tag, add:

```html
<link rel="stylesheet" href="./app.css" />
```

### 🧩 How to target elements in CSS

Before styling anything, you need to tell CSS **which element to style**.

This is done using **selectors**.


### 🔹 Tag selector

You can style elements by their HTML tag:

```css
h1 {
  color: red;
}

p {
  font-size: 16px;
}
```

👉 Affects **all elements of this type**


### 🔹 Class selector (MOST IMPORTANT)

You can style elements using a class.

You need to assign the class name to the <tag> using the `class` attribute and style it in the CSS file.

```html

<div class="card-Create-profile"></div>
```

```css
.card-Create-profile {
  background-color: #fff;
}
```

👉 You will use this most of the time


### 🔹 ID selector

You can also use an id:

```html
<div id="main"></div>
```

```css
#main {
  padding: 20px;
}
```

👉 Should be unique on the page

👉 Used rarely for styling

---

### ⚠️ Important

* Prefer **classes** for styling
* Avoid styling everything using tags

---

### 🧠 How to name CSS classes

Good class names make your code readable and easy to maintain.

### Simple rule:

 🧩 component + element

```text
component-name + element-name
```

### 🔹 Example

```html
<div class="profile">
  <h2 class="profile-heading"></h2>
</div>
```


### 🎯 Benefits

* You always know what belongs to what
* Easy to read
* Easy to scale
* No confusion between components


### 🧱 Good naming rules

* Use component prefix first
* Be descriptive
* Avoid generic names like `box`, `item`, `text`

---


### 🔵 CSS Cheat Sheet

## 📦 1. Size & Spacing (layout basics)

Base building blocks of any layout:

* `width` — element width
* `height` — element height
* `max-width / min-width` — width limits
* `max-height / min-height` — height limits
* `margin` — outer spacing
* `padding` — inner spacing

![margins-paddings-illustration](../assets/illustrations/margins-paddings-illustration.png)

---

## 🧱 2. Display & Structure

Defines how elements behave on the page.

- `display`:

    - `block` — the element takes up the full width and starts on a new line (`div`, `h1`, `p`)
    - `inline` — the element stays within the line and takes up only the necessary space (`span`, `a`)
    - `flex` — turns the container into a flexible system for alignment and layout construction
    - `none` - removes the element from the page completely

    ![margins-paddings-illustration](../assets/illustrations/display-illustration.png)

---

### 🎯 3. Flexbox

Flexbox is a layout system used to arrange elements on a page.

It is used to:
- align elements horizontally and vertically
- control spacing between elements
- build layouts like forms, cards, and navigation bars easily

### Parent:

```css id="f9d2k1"
.container {
  display: flex;
  flex-direction: row; /* or column */
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}
```

* `flex-direction` → direction

![flex-direction-illustration](../assets/illustrations/flex-direction-illustration.png)

* `justify-content` → alignment horizontally (left ↔ right)

![justify-content-illustration](../assets/illustrations/justify-content-illustration.png)

* `align-items` → alignment vertically (top ↕ bottom)

![align-item-illustration](../assets/illustrations/align-item-illustration.png)
* `gap` → spacing between items


## 🎨 4. Visual styling

* `color` — text color
* `background` / `background-color` — background
* `border` — border
* `border-radius` — rounded corners
* `box-shadow` — shadow


## ✍️ 5. Typography

* `font-size` — text size
* `font-weight` — boldness
* `font-family` — font
* `text-align` — text alignment


## 🧭 7. Interaction
* `cursor: pointer` — clickable element
