import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Haiku } from './haiku.js';


$(document).ready(function() {
  $("#form1").submit(function(event) {
    event.preventDefault();
    let first = $("#input1").val();
    let second = $("#input2").val();
    let third = $("#input3").val();
    let haiku = new Haiku(first, second, third);
    let line1 = haiku.countVowels(first);
    let line2 = haiku.countVowels(second);
    let line3 = haiku.countVowels(third);

    let result1 = haiku.syllableChecker1(first, second, third);
    let result2 = haiku.syllableChecker2(first, second, third);
    let result3 = haiku.syllableChecker3(first, second, third);

    $("#result1").text(line1);
    $("#result2").text(line2);
    $("#result3").text(line3);
    $("#result4").text(result1);
    $("#result5").text(result2);
    $("#result6").text(result3);

  });

});
