/**
 * BROWSER STORAGE APIs
 * 
 * Browser provides several storage mechanisms:
 * - localStorage
 * - sessionStorage
 * - IndexedDB
 * - Cookies
 */

// ============================================
// LOCALSTORAGE
// ============================================

// Set item
localStorage.setItem("username", "John");
localStorage.setItem("theme", "dark");

// Get item
const username = localStorage.getItem("username");
console.log(username); // "John"

// Remove item
localStorage.removeItem("theme");

// Clear all
localStorage.clear();

// Get key by index
const key = localStorage.key(0);

// Get length
const length = localStorage.length;

// Store objects (must stringify)
const user = { name: "John", age: 30 };
localStorage.setItem("user", JSON.stringify(user));

// Retrieve objects (must parse)
const storedUser = JSON.parse(localStorage.getItem("user"));

// ============================================
// SESSIONSTORAGE
// ============================================

// Same API as localStorage, but data cleared on tab close
sessionStorage.setItem("sessionId", "abc123");
const sessionId = sessionStorage.getItem("sessionId");

// ============================================
// STORAGE EVENT
// ============================================

// Listen for storage changes (from other tabs/windows)
window.addEventListener("storage", (event) => {
    console.log("Key changed:", event.key);
    console.log("Old value:", event.oldValue);
    console.log("New value:", event.newValue);
    console.log("Storage area:", event.storageArea);
});

// ============================================
// STORAGE UTILITY CLASS
// ============================================

class Storage {
    constructor(storageType = localStorage) {
        this.storage = storageType;
    }
    
    set(key, value) {
        try {
            const serialized = JSON.stringify(value);
            this.storage.setItem(key, serialized);
            return true;
        } catch (error) {
            console.error("Storage error:", error);
            return false;
        }
    }
    
    get(key, defaultValue = null) {
        try {
            const item = this.storage.getItem(key);
            return item ? JSON.parse(item) : defaultValue;
        } catch (error) {
            console.error("Storage error:", error);
            return defaultValue;
        }
    }
    
    remove(key) {
        this.storage.removeItem(key);
    }
    
    clear() {
        this.storage.clear();
    }
    
    has(key) {
        return this.storage.getItem(key) !== null;
    }
    
    getAll() {
        const items = {};
        for (let i = 0; i < this.storage.length; i++) {
            const key = this.storage.key(i);
            items[key] = this.get(key);
        }
        return items;
    }
}

const storage = new Storage(localStorage);
storage.set("user", { name: "John" });
const user = storage.get("user");

// ============================================
// INDEXEDDB (Basic Example)
// ============================================

function openDatabase() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open("MyDatabase", 1);
        
        request.onerror = () => reject(request.error);
        request.onsuccess = () => resolve(request.result);
        
        request.onupgradeneeded = (event) => {
            const db = event.target.result;
            if (!db.objectStoreNames.contains("users")) {
                const objectStore = db.createObjectStore("users", { keyPath: "id" });
                objectStore.createIndex("name", "name", { unique: false });
            }
        };
    });
}

async function addUser(user) {
    const db = await openDatabase();
    const transaction = db.transaction(["users"], "readwrite");
    const store = transaction.objectStore("users");
    return store.add(user);
}

async function getUser(id) {
    const db = await openDatabase();
    const transaction = db.transaction(["users"], "readonly");
    const store = transaction.objectStore("users");
    return store.get(id);
}

// ============================================
// COOKIES
// ============================================

// Set cookie
function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}

// Get cookie
function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === " ") c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

// Delete cookie
function deleteCookie(name) {
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
}

