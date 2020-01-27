export function getUrlParam(path, parameter, defaultvalue = null) {
    let parts = path.split("/" + parameter + "/")
    
    if (parts.length === 2) {
        parts = parts[1].split("/")
        return parts.length >= 1 ? parts[0] : defaultvalue
    }
    return defaultvalue
}