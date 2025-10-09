/**
 * Converts a given string to camelCase format.
 *
 * The function handles strings with spaces, underscores, hyphens, and mixed casing.
 * - All word separators (spaces, underscores, hyphens) are normalized.
 * - The first word is lowercased, and subsequent words are capitalized.
 * - Throws an error if the input is not a string or is undefined/null.
 *
 * @param {string} input - The string to convert to camelCase.
 * @returns {string} The camelCase formatted string.
 * @throws {Error} If input is undefined, null, or not a string.
 *
 * @example
 * toCamelCase('first name'); // returns 'firstName'
 * toCamelCase('user_id'); // returns 'userId'
 * toCamelCase('SCREEN_NAME'); // returns 'screenName'
 * toCamelCase('mobile-number'); // returns 'mobileNumber'
 */

/**
 * Converts a given string to dot.case format.
 *
 * The function handles strings with spaces, underscores, hyphens, and camelCase/PascalCase.
 * - All word separators (spaces, underscores, hyphens) are normalized.
 * - Inserts dots between words, including camelCase and PascalCase boundaries.
 * - The result is fully lowercased.
 * - Throws an error if the input is not a string or is undefined/null.
 *
 * @param {string} input - The string to convert to dot.case.
 * @returns {string} The dot.case formatted string.
 * @throws {Error} If input is undefined, null, or not a string.
 *
 * @example
 * toDotCase('first name'); // returns 'first.name'
 * toDotCase('user_id'); // returns 'user.id'
 * toDotCase('SCREEN_NAME'); // returns 'screen.name'
 * toDotCase('mobile-number'); // returns 'mobile.number'
 * toDotCase('camelCaseString'); // returns 'camel.case.string'
 */
function toCamelCase(input) {
    if (input === undefined || input === null) {
        throw new Error('Input cannot be undefined or null.');
    }
    if (typeof input !== 'string') {
        throw new Error('Input must be a string.');
    }

    // Replace underscores, hyphens, and spaces with a single space
    let str = input.trim().replace(/[_\-\s]+/g, ' ');

    // Lowercase the string
    str = str.toLowerCase();

    // Split into words
    const words = str.split(' ');

    // Capitalize all words except the first
    for (let i = 1; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }

    // Join and return
    return words.join('');
}

// Example usage:
// console.log(toCamelCase('first name')); // firstName
// console.log(toCamelCase('user_id')); // userId
// console.log(toCamelCase('SCREEN_NAME')); // screenName
// console.log(toCamelCase('mobile-number')); // mobileNumber
function toDotCase(input) {
    if (input === undefined || input === null) {
        throw new Error('Input cannot be undefined or null.');
    }
    if (typeof input !== 'string') {
        throw new Error('Input must be a string.');
    }

    // Replace underscores, hyphens, and spaces with a single space
    let str = input.trim().replace(/[_\-\s]+/g, ' ');

    // Insert space before uppercase letters (for camelCase or PascalCase)
    str = str.replace(/([a-z0-9])([A-Z])/g, '$1 $2');

    // Lowercase the string
    str = str.toLowerCase();

    // Split into words and join with dots
    return str.split(' ').filter(Boolean).join('.');
}

// Example usage:
// console.log(toDotCase('first name')); // first.name
// console.log(toDotCase('user_id')); // user.id
// console.log(toDotCase('SCREEN_NAME')); // screen.name
// console.log(toDotCase('mobile-number')); // mobile.number
// console.log(toDotCase('camelCaseString')); // camel.case.string