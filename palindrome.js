// as i promised i did not check any source :)
function palindrome(str) {
    let isPalindrome = true;
    for (let i = 0; i < str.length / 2; i++) { // loop untill half is enough
        if (str[i] !== str[str.length - 1 - i]) { //first false will break the loop
            isPalindrome = false;
            break;
        }

    }

    return isPalindrome;
}

console.log(palindrome('level'));//true;
console.log(palindrome('house'));//false;