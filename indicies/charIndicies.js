function indicies(string) {
  var places = {};
  string =  string.split('');
    for (var i = 0; i < string.length; i++) {
      var char = string[i];
        if (places[char]) {
          places[char].push(i);
    } else {
    places[char] = [i];
    }
  }
  return(places);
}

console.log(indicies('lighthouse in the house'));
