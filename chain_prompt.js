function toKebabCase(input) {
    if (typeof input !== 'string') {
        return '';
    }
    // Trim leading/trailing spaces
    let str = input.trim();
    // Replace spaces and underscores with hyphens
    str = str.replace(/[\s_]+/g, '-');
    // Convert to lowercase
    str = str.toLowerCase();
    return str;
}

module.exports = toKebabCase;