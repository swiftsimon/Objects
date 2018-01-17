

function countLetters(string) {
  var letters = {};
  string =  string.replace(/\s/g,'').split('');
  for (var i = 0; i < string.length; i++) {
    var char = string[i];
    if (letters[char]) {
      letters[char] += 1;
    } else {
    letters[char] = 1;
    }
  }
  return(letters);
}

console.log(countLetters('lighthouse in the house'));



// return to us all the unique characters that exist
// in a string that is passed into the function.
