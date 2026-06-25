# 🟡 Intro to JavaScript (DOM Basics)


In this section we are NOT learning all JavaScript.

We are only learning how JavaScript interacts with HTML.

👉 This is called **DOM manipulation**

It means:
- selecting HTML elements
- reading values from inputs
- changing content on the page
- reacting to user actions (click, submit, reset)


## 🔗 Connecting JavaScript to HTML

To use JavaScript, you need to connect a .js file to your HTML file.

Add this line before closing `</body>` tag:

```html
<script src="./app.js"></script>
```


## 🧩 Selecting elements

To work with HTML in JavaScript, we first need to select elements.

```js
const element = document.querySelector('element-selector');
```

- **document** → the whole HTML page (as object)
- **querySelector()** → finds first matching element
    ```js
    document.querySelector('.class')   // class
    document.querySelector('#id')      // id
    document.querySelector('div')      // tag
    ```
- **querySelectorAll()** → finds all matching element on the page
    ```js
    document.querySelectorAll('.class')   // class
    document.querySelectorAll('#id')      // id
    document.querySelectorAll('div')      // tag
    ```



## 🎨  Changing classes

Each html element has a `classList` property.

`classList` returns a list of all classes attached to this element.

```html
<div id='block' class='class-1 class-2 class-3'><div>
```

```js
  const block = document.querySelector('#block')
  
  // block.classList = ['class-1', 'class-2', 'class-3']
```

`classList` has two methods:
- add() → adds new class to the element
- remove() → removes class from the element
```js
block.classList.add('class-4')
block.classList.remove('class-4')
```


## 🧾 Getting element value

We can read user input value using `elemenet`.`value`:

```html
 <input id="input-field" value="Input field value">
```

```js
const input = document.querySelector('#input-field')
// input.value = Input field value
```


## 🔁 Events (user actions)

An event is something that happens in the browser.

It can be:
- user clicking a button
- typing in an input
- submitting a form
- resetting a form
- moving the mouse

👉 JavaScript can listen these actions and react to them.

To listen an element event, we need to use `addEventListener` method.

### 📌 addEventListener

```js
element.addEventListener('event-type', (event) => {});
```

- **addEventListener** → tells JS: “listen for this event”
- **'event-type'** → type of event

    📦 Common event types:
    - click
    - submit
    - reset
- **(event) => {}** → a function that describes what should happen

    - **event** → event object
        #### ⬇️ Event object
        event is an object that contains information about what just happened.

        It can include:

        - type of event (click, submit, input)
        - which element triggered it
        - additional data about the action

        👉 But for now, we only need one important method:


        - 🚫 `event.preventDefault()` → removes the default element browser behavior.

        #### Example:
        ```html
        <form action="https://api.example.com/submit">
            <input name="username" />
            <button type="submit">Send</button>
        </form>
        ```

        #### 👉 What happens here:

        - user clicks "Send"
        - form is submitted to `https://api.example.com/submit` (backend URL)
        - page reloads
        - browser navigates to new response page

        In frontend only applications we:
        - don’t want page reload
        - want to control everything with JavaScript    
        - want to update UI dynamically


        ```js
        form.addEventListener('submit', (event) => {
        event.preventDefault(); // -> removes page reload
        });
        ```

## 🔄 Updating the UI

We can get and change HTML content using:
- `textContent`
- `innerHTML`

The difference between them is that `textContent` returns only the text content of the element.

```html
<div id="block">
  Content-1

  <div>
    Content-2
  </div>
</div>
```

```js
const block = document.querySelector('#block')
```
`block.textContent`
``` 
Content-1

          
     Content-2
```
And `innerHTML` returns the entire content of the element, including all nested elements.

`block.innerHTML`
```
Content-1

    <div>
      Content-2
    </div>
```


**You use these properties to update elements on the page:**

```js
block.textContent = 'New content'
block.innerHTML = '<strong>New content</strong>'
```