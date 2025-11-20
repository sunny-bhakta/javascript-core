/**
 * DOM MANIPULATION IN JAVASCRIPT
 * 
 * The Document Object Model (DOM) represents the structure of HTML documents.
 * JavaScript can manipulate the DOM to change content, structure, and styling.
 */

// ============================================
// SELECTING ELEMENTS
// ============================================

// getElementById - Select by ID
const elementById = document.getElementById("myId");

// getElementsByClassName - Select by class (returns HTMLCollection)
const elementsByClass = document.getElementsByClassName("myClass");

// getElementsByTagName - Select by tag (returns HTMLCollection)
const elementsByTag = document.getElementsByTagName("div");

// querySelector - Select first matching element
const firstElement = document.querySelector(".myClass");
const firstById = document.querySelector("#myId");

// querySelectorAll - Select all matching elements (returns NodeList)
const allElements = document.querySelectorAll(".myClass");
const allDivs = document.querySelectorAll("div");

// ============================================
// MODIFYING CONTENT
// ============================================

// textContent - Get/set text content
const element = document.querySelector("#myElement");
element.textContent = "New text content";

// innerHTML - Get/set HTML content
element.innerHTML = "<strong>Bold text</strong>";

// innerText - Get/set visible text (respects styling)
element.innerText = "Visible text";

// ============================================
// MODIFYING ATTRIBUTES
// ============================================

// getAttribute / setAttribute
const link = document.querySelector("a");
const href = link.getAttribute("href");
link.setAttribute("href", "https://example.com");
link.setAttribute("target", "_blank");

// Direct property access
link.href = "https://example.com";
link.className = "new-class";
link.id = "new-id";

// classList - Better class manipulation
element.classList.add("active");
element.classList.remove("inactive");
element.classList.toggle("highlight");
element.classList.contains("active"); // true/false

// ============================================
// MODIFYING STYLES
// ============================================

// style property
element.style.color = "red";
element.style.backgroundColor = "blue";
element.style.fontSize = "20px";

// Using CSS classes (preferred)
element.classList.add("highlight");

// ============================================
// CREATING ELEMENTS
// ============================================

// createElement
const newDiv = document.createElement("div");
newDiv.textContent = "New div element";
newDiv.className = "new-div";

// createTextNode
const textNode = document.createTextNode("Text node");

// ============================================
// ADDING ELEMENTS
// ============================================

// appendChild - Add to end
const parent = document.querySelector("#parent");
parent.appendChild(newDiv);

// insertBefore - Insert before reference
const reference = document.querySelector("#reference");
parent.insertBefore(newDiv, reference);

// insertAdjacentHTML - Insert HTML string
element.insertAdjacentHTML("beforebegin", "<p>Before</p>");
element.insertAdjacentHTML("afterbegin", "<p>After start</p>");
element.insertAdjacentHTML("beforeend", "<p>Before end</p>");
element.insertAdjacentHTML("afterend", "<p>After end</p>");

// prepend / append (modern)
parent.prepend(newDiv); // Add to beginning
parent.append(newDiv); // Add to end

// ============================================
// REMOVING ELEMENTS
// ============================================

// removeChild
parent.removeChild(newDiv);

// remove (modern)
newDiv.remove();

// ============================================
// CLONING ELEMENTS
// ============================================

// cloneNode
const cloned = element.cloneNode(true); // true = deep clone
parent.appendChild(cloned);

// ============================================
// TRAVERSING THE DOM
// ============================================

// Parent
const parentElement = element.parentElement;
const parentNode = element.parentNode;

// Children
const firstChild = element.firstElementChild;
const lastChild = element.lastElementChild;
const children = element.children; // HTMLCollection

// Siblings
const nextSibling = element.nextElementSibling;
const previousSibling = element.previousElementSibling;

// ============================================
// EVENT HANDLING
// ============================================

// addEventListener
element.addEventListener("click", function(event) {
    console.log("Clicked!", event);
});

// Event object properties
element.addEventListener("click", function(event) {
    console.log(event.target); // Element that triggered event
    console.log(event.currentTarget); // Element with listener
    console.log(event.type); // "click"
    event.preventDefault(); // Prevent default behavior
    event.stopPropagation(); // Stop event bubbling
});

// removeEventListener
function handleClick(event) {
    console.log("Clicked");
}
element.addEventListener("click", handleClick);
element.removeEventListener("click", handleClick);

// ============================================
// COMMON EVENTS
// ============================================

// Mouse events
element.addEventListener("click", handler);
element.addEventListener("dblclick", handler);
element.addEventListener("mousedown", handler);
element.addEventListener("mouseup", handler);
element.addEventListener("mouseenter", handler);
element.addEventListener("mouseleave", handler);
element.addEventListener("mousemove", handler);

// Keyboard events
document.addEventListener("keydown", function(event) {
    console.log(event.key); // Key pressed
    console.log(event.code); // Physical key code
});

// Form events
const form = document.querySelector("form");
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    // Handle form data
});

const input = document.querySelector("input");
input.addEventListener("input", handler); // On value change
input.addEventListener("change", handler); // On blur if changed
input.addEventListener("focus", handler);
input.addEventListener("blur", handler);

// ============================================
// EVENT DELEGATION
// ============================================

// Instead of adding listeners to each element
const list = document.querySelector("#list");
list.addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
        console.log("List item clicked:", event.target.textContent);
    }
});

// ============================================
// EVENT BUBBLING AND CAPTURING
// ============================================

// Bubbling (default) - Event bubbles up from target
// Capturing - Event captured on way down

element.addEventListener("click", handler, false); // Bubbling (default)
element.addEventListener("click", handler, true); // Capturing

// ============================================
// FORM MANIPULATION
// ============================================

const formElement = document.querySelector("form");

// Get form values
const formData = new FormData(formElement);
const email = formData.get("email");

// Access form elements
const emailInput = formElement.email; // By name
const emailInput2 = formElement.elements.email; // By name
const emailInput3 = formElement.querySelector('[name="email"]'); // Query selector

// ============================================
// DATA ATTRIBUTES
// ============================================

// Get/set data attributes
const dataElement = document.querySelector("[data-id]");
const id = dataElement.dataset.id; // Get data-id
dataElement.dataset.userId = "123"; // Set data-user-id

// ============================================
// PERFORMANCE OPTIMIZATION
// ============================================

// DocumentFragment - Batch DOM operations
const fragment = document.createDocumentFragment();
for (let i = 0; i < 100; i++) {
    const div = document.createElement("div");
    div.textContent = `Item ${i}`;
    fragment.appendChild(div);
}
parent.appendChild(fragment); // Single DOM update

// ============================================
// OBSERVER PATTERNS
// ============================================

// IntersectionObserver - Detect when element enters viewport
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
});

observer.observe(element);

// MutationObserver - Watch for DOM changes
const mutationObserver = new MutationObserver((mutations) => {
    mutations.forEach(mutation => {
        console.log("DOM changed:", mutation);
    });
});

mutationObserver.observe(element, {
    childList: true,
    attributes: true,
    subtree: true
});

