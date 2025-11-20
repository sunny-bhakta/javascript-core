# DOM Manipulation in JavaScript

This directory contains examples and documentation for DOM manipulation.

## Files

- **dom-manipulation.js** - Selecting elements, modifying content, events, traversal

## Key Concepts

### Selecting Elements

- `getElementById()` - Select by ID
- `getElementsByClassName()` - Select by class
- `getElementsByTagName()` - Select by tag
- `querySelector()` - Select first matching
- `querySelectorAll()` - Select all matching

### Modifying Content

- `textContent` - Text content
- `innerHTML` - HTML content
- `innerText` - Visible text

### Attributes

- `getAttribute()` / `setAttribute()` - Get/set attributes
- `classList` - Class manipulation (add, remove, toggle, contains)
- Direct properties (href, id, className, etc.)

### Creating Elements

- `createElement()` - Create new element
- `createTextNode()` - Create text node
- `cloneNode()` - Clone element

### Adding/Removing

- `appendChild()` - Add to end
- `insertBefore()` - Insert before
- `prepend()` / `append()` - Modern methods
- `remove()` - Remove element

### Events

- `addEventListener()` - Add event listener
- `removeEventListener()` - Remove listener
- Event object: target, currentTarget, preventDefault(), stopPropagation()

### Common Events

- Mouse: click, dblclick, mousedown, mouseup, mouseenter, mouseleave
- Keyboard: keydown, keyup, keypress
- Form: submit, input, change, focus, blur
- Window: load, resize, scroll

### Event Delegation

Attach listener to parent, check target in handler:
```javascript
parent.addEventListener("click", (e) => {
    if (e.target.matches(".item")) {
        // Handle click
    }
});
```

### Event Bubbling and Capturing

- **Bubbling** (default): Event bubbles up from target
- **Capturing**: Event captured on way down
- Use `stopPropagation()` to stop bubbling

## Best Practices

1. Use `querySelector`/`querySelectorAll` for flexibility
2. Cache DOM queries - don't query repeatedly
3. Use `classList` instead of `className`
4. Use event delegation for dynamic content
5. Use `DocumentFragment` for batch operations
6. Remove event listeners when done
7. Use `textContent` instead of `innerHTML` for plain text
8. Be careful with `innerHTML` - XSS risk

## Performance Tips

1. **Cache selectors** - Store in variables
2. **Batch DOM updates** - Use DocumentFragment
3. **Use event delegation** - Fewer listeners
4. **Debounce/throttle** - For scroll/resize events
5. **Use requestAnimationFrame** - For animations

## Common Patterns

### Toggle Class
```javascript
element.classList.toggle("active");
```

### Check if Element Exists
```javascript
if (element) {
    // Element exists
}
```

### Event Delegation
```javascript
container.addEventListener("click", (e) => {
    if (e.target.matches(".button")) {
        handleClick(e.target);
    }
});
```

### Form Handling
```javascript
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
});
```

