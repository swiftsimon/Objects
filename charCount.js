var letters = {};

function countLetters(string) {
  string =  string.replace(/\s/g,'').split('');
for (var i = 0; i < string.length; i++) {

  if (letters[string[i]]) {
    letters[string[i]] += 1;
  } else {
    letters[string[i]] = 1;
  }

}
  console.log(letters);
}

countLetters('lighthouse in the house');



// return to us all the unique characters that exist
// in a string that is passed into the function.
