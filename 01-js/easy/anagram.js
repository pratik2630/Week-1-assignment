/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function sortWord(AnagramWord) {
   let anagramArray = AnagramWord.split("")
   anagramArray.sort()
   wordJoin = anagramArray.join("")
   //console.log(wordJoin)
   return(wordJoin)
}

function isAnagram(str1, str2) {
  if (str1==str2) {
    return("Its anagram")
  } else {

    if (sortWord(str1)==sortWord(str2)) {
      return("Its anagram!")
    } else {
      return("It's not anagramS")
    }
    
  }

}

str1 = "listen"
str2 = "Silent"
answer = isAnagram(str1.toLowerCase(),str2.toLowerCase())
console.log(answer)
sortWord("heloo")
module.exports = isAnagram;
