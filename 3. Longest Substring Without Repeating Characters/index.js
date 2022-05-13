/** See also, https://velog.io/@ansrjsdn/LeetCode-Medium-Longest-Substring-Without-Repeating-Characters-JavaScript */
const lengthOfLongestSubstring = (s) => {
  let longest = 0;
  let current = "";

  for (let i = 0; i < s.length; i++) {
    current = current.substring(current.indexOf(s[i]) + 1); // when, current.indexOf === -1, it will be not intended things, so + 1
    current += s[i]; // Added some character to current

    if (current.length > longest) {
      longest = current.length;
    }
  }

  return longest;
};

/** @Testing */
console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3
