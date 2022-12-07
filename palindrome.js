function isPalindrome(base) {
    let str = base.toLowerCase();
    if(str.split('').reverse().join('') === str) {
        console.log(`${str} est un palindrome`);
    } else console.log(`${str} n'est pas un palindrome`);
}

isPalindrome("KayAk")