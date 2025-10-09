function toCamelCase(str) {
    return str
        .replace(/[_\-\s]+(.)?/g, (_, c) => c ? c.toUpperCase() : '')
        .replace(/^[A-Z]+$/, s => s.toLowerCase())
        .replace(/^[A-Z]/, s => s.toLowerCase());
}

// Examples:
// toCamelCase('first name')      // 'firstName'
// toCamelCase('user_id')         // 'userId'
// toCamelCase('SCREEN_NAME')     // 'screenName'
// toCamelCase('mobile-number')   // 'mobileNumber'