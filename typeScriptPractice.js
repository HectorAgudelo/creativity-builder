function isPalindrome(str) {
    // 1. Normalize the string: lowercase and remove non-alphanumeric characters.
    var normalizedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    // 2. Compare the normalized string with its reversed version.
    var reversedStr = normalizedStr.split('').reverse().join('');
    return normalizedStr === reversedStr;
}
console.log("Is \"A man, a plan, a canal: Panama\" a palindrome?", isPalindrome("A man, a plan, a canal: Panama")); // Expected: true
console.log("Is \"race a car\" a palindrome?", isPalindrome("race a car")); // Expected: false
console.log("Is \"hello\" a palindrome?", isPalindrome("hello")); // Expected: false
function findMissingNumber(nums) {
    // Hint: The sum of numbers from 0 to n can be calculated with the formula n * (n + 1) / 2.
    var n = nums.length; // The length of the array gives us 'n'.
    console.log("Array length (n): ".concat(n));
    var expectedSum = (n * (n + 1)) / 2; // Calculate the expected sum of numbers from 0 to n.
    console.log("Expected sum of numbers from 0 to ".concat(n, ": ").concat(expectedSum));
    var actualSum = nums.reduce(function (acc, num) { return acc + num; }, 0); // Calculate the actual sum of the numbers in the array.
    console.log("Actual sum of the array: ".concat(actualSum));
    return expectedSum - actualSum; // The missing number is the difference between
    // You can find 'n' from the array's length.
    // Your code here!
}
console.log("Missing number in [3, 0, 1]:", findMissingNumber([3, 0, 1])); // Expected: 2
console.log("Missing number in [9, 6, 4, 2, 3, 5, 7, 0, 1]:", findMissingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])); // Expected: 8
