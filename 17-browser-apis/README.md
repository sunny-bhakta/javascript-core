# Browser APIs

This directory contains examples and documentation for browser APIs.

## Files

- **storage.js** - localStorage, sessionStorage, IndexedDB, Cookies

## Storage APIs

### localStorage

Persistent storage that survives browser restarts.

**Methods:**
- `setItem(key, value)` - Store value
- `getItem(key)` - Retrieve value
- `removeItem(key)` - Remove item
- `clear()` - Clear all
- `key(index)` - Get key by index
- `length` - Number of items

**Limitations:**
- ~5-10MB storage limit
- Synchronous API
- String values only (use JSON)

### sessionStorage

Same API as localStorage, but data cleared when tab closes.

**Use Cases:**
- Temporary data
- Session-specific data
- Data that shouldn't persist

### IndexedDB

Large-scale client-side storage.

**Features:**
- Asynchronous API
- Can store large amounts
- Structured data
- Indexes for queries

**Use Cases:**
- Large datasets
- Offline applications
- Complex queries

### Cookies

Small pieces of data sent with requests.

**Limitations:**
- ~4KB size limit
- Sent with every request
- Limited number per domain

**Use Cases:**
- Authentication tokens
- User preferences
- Tracking

## Best Practices

1. **Use localStorage** for persistent user preferences
2. **Use sessionStorage** for temporary data
3. **Use IndexedDB** for large/complex data
4. **Use cookies** sparingly (prefer localStorage)
5. **Handle errors** - Storage can fail
6. **Check availability** - Not available in all contexts
7. **Serialize objects** - Use JSON.stringify/parse
8. **Set expiration** - For cookies

## Storage Comparison

| Feature | localStorage | sessionStorage | IndexedDB | Cookies |
|---------|-------------|----------------|-----------|---------|
| Size | ~5-10MB | ~5-10MB | Large | ~4KB |
| Persistence | Yes | Tab close | Yes | Yes |
| API | Sync | Sync | Async | Sync |
| Structure | Key-value | Key-value | Database | Key-value |
| Sent to server | No | No | No | Yes |

## Common Patterns

### Storage Wrapper
```javascript
class Storage {
    set(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }
    get(key) {
        return JSON.parse(localStorage.getItem(key));
    }
}
```

### Check Availability
```javascript
function storageAvailable(type) {
    try {
        const storage = window[type];
        const x = "__storage_test__";
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    } catch (e) {
        return false;
    }
}
```

### Storage Event
```javascript
window.addEventListener("storage", (e) => {
    console.log("Storage changed:", e.key);
});
```

