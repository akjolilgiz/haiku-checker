export function Haiku(line1, line2, line3){
  this.line1 = line1;
  this.line2 = line2;
  this.line3 = line3;

}

Haiku.prototype.syllableChecker2 = function (letter1, letter2, letter3) {
  let newHaiku = new Haiku(letter1, letter2, letter3);
  let result = "";
  if (newHaiku.countVowels(letter2) === 7){
    result = "Ok"
  }
  else {
    result = "not 7 syllables"
  }
  return result;
}
Haiku.prototype.syllableChecker1 = function (letter1, letter2, letter3) {
  let newHaiku = new Haiku(letter1, letter2, letter3);
  let result = "";
  if (newHaiku.countVowels(letter1) === 5){
    result = "Ok"
  }
  else {
    result = "not 5 syllables"
  }
  return result;
}
Haiku.prototype.syllableChecker3 = function (letter1, letter2, letter3) {
  let newHaiku = new Haiku(letter1, letter2, letter3);
  let result = "";
  if (newHaiku.countVowels(letter3) === 5){
    result = "Ok"
  }
  else {
    result = "not 5 syllables"
  }
  return result;
}

Haiku.prototype.countVowels = function (letter) {
  let letters = letter.toLowerCase();
  let  letterChars = letters.split("");
  const vowels = ['a','e','i','o','u', 'y'];
  let charWords = letter.split(" ");
  let exception = [/eo/i,/ai/i,/ei/i,/ee/i,/ou/i,/ui/i,/ie/i,/io/i,/oo/i,/uo/i,/ine/i,/ate/i,/age/i,/eye/i,/ice/i,/ime/i,/ite/i,/yme/i,/oe/i];

  let count = 0;
  let counts = 0;

  for(let i=0; i< charWords.length; i++) {
    for(let j=0; j<exception.length; j++){
      if(exception[j].test(charWords[i])){

        counts ++;
      }
    }
  }
  for(let i =0; i<letterChars.length; i++){
    if(vowels.includes(letterChars[i])){
      count ++;
    }
  }
  return count - counts;

}
