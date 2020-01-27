// Return default value if object is null
export function defaultIfNull(object, defaultValue) {
    return object !== null ? object : defaultValue
}

// Return default value if object is undefined
export function defaultIfUndefined(object, defaultValue) {
    return object !== undefined ? object : defaultValue
}

// Check if object is empty
export function isEmpty(obj) {
    let name;
    for (name in obj) {
      if (obj.hasOwnProperty(name)) {
        return false;
      }
    }
    if (obj.constructor !== Object) {
      return false;
    }
    return true;
}

// Duplicate object
export function duplicate(object) {
    return Object.assign({}, object)
}