import { Haiku } from './../src/haiku.js';

describe("Haiku Test", function() {

  it('should count the correct syllable', function(){
    let first = "haiku";
    let second = "haiku haiku";
    let third = "haiku";
    let newHaiku = new Haiku(first, second, third);
     expect(newHaiku.countVowels(first)).toEqual(2);
  });

  it('should check if line has correct number of syllables in line 2', function(){
    let first = "haiku";
    let second = "haiku haiku";
    let third = "haiku";
    let newHaiku = new Haiku(first, second, third);
    expect(newHaiku.syllableChecker2(first, second, third)).toEqual("not 7 syllables");
  });

  it('should check if line has correct number of syllables in line 1', function(){
    let first = "haiku";
    let second = "haiku haiku";
    let third = "haiku";
    let newHaiku = new Haiku(first, second, third);
    expect(newHaiku.syllableChecker1(first, second, third)).toEqual("not 5 syllables");
  });
});
