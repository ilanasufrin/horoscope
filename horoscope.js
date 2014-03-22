
 

$(function() {
$( "#datepicker" ).datepicker({
  showMonthAfterYear: true,
changeMonth: true,
changeYear: true,
yearRange: "1900:+0",
maxDate: "0",
});
});




function processBirthday() {

  //check to make sure that the user has entered something
  if(document.getElementById("datepicker").value == "click here") {
    alert("Please choose a date!");
    return;
  }

  //this gets the date from the datepicker and parses it into month, day, and year integers
  $(resultsDiv).addClass('transformedResults');
  console.log("Submit button pressed");
  var birthday = document.getElementById("datepicker").value;
  console.log("The date entered is " + birthday);
  console.log(typeof(birthday));
  var parsedDate = birthday.split("/");
  console.log(parsedDate[0]);
  console.log(parsedDate[1]);
  console.log(parsedDate[2]);
  var month = parsedDate[0],
      day = parsedDate[1],
      year = parsedDate[2];

  //this takes the parsed month and processes it
  var monthName ="";
  switch (month)
{
case "01":
  monthName = "January";
  break;
case "02":
  monthName = "February";
  break;
case "03":
   monthName = "March";
  break;
case "04":
  monthName = "April";
  break;
case "05":
   monthName = "May";
  break;
case "06":
  monthName = "June";
  break;
case "07":
   monthName = "July";
  break;
case "08":
  monthName = "August";
  break;
case "09":
   monthName = "September";
  break;
case "10":
   monthName = "October";
  break;
case "11":
   monthName = "November";
  break;
case "12":
   monthName = "December";
  break;
} 



//this calculates the sign based on the parsed month and day
var sign ="";
var pictureNumber = 0;
if ((monthName == "January") && (day <= 20)) {
 sign = "Capricorn";
 pictureNumber = 0;
}
else if ((monthName == "January") && (day > 20)) {
 sign = "Aquarius";
 pictureNumber = 1;
}
else if ((monthName == "February") && (day <= 19)) {
 sign = "Aquarius";
 pictureNumber = 1;
}
else if ((monthName == "February") && (day > 19)) {
 sign = "Pisces";
 pictureNumber = 2;
}
else if ((monthName == "March") && (day <= 20)) {
 sign = "Pisces";
 pictureNumber = 2;
}
else if ((monthName == "March") && (day > 20)) {
 sign = "Aries";
 pictureNumber = 3;
}
else if ((monthName == "April") && (day <= 20)) {
 sign = "Aries";
 pictureNumber = 3;
}
else if ((monthName == "April") && (day > 20)) {
 sign = "Taurus";
 pictureNumber = 4;
}
else if ((monthName == "May") && (day <= 21)) {
 sign = "Taurus";
 pictureNumber = 4;
}
else if ((monthName == "May") && (day > 21)) {
 sign = "Gemini";
 pictureNumber = 5;
}
else if ((monthName == "June") && (day <= 21)) {
 sign = "Gemini";
 pictureNumber = 5;
}
else if ((monthName == "June") && (day > 21)) {
 sign = "Cancer";
 pictureNumber = 6;
}
else if ((monthName == "July") && (day <= 22)) {
 sign = "Cancer";
 pictureNumber = 6;
}
else if ((monthName == "July") && (day > 22)) {
 sign = "Leo";
 pictureNumber = 7;
}
else if ((monthName == "August") && (day <= 22)) {
 sign = "Leo";
 pictureNumber = 7;
}
else if ((monthName == "August") && (day > 22)) {
 sign = "Virgo";
 pictureNumber = 8;
}
else if ((monthName == "September") && (day <= 21)) {
 sign = "Virgo";
 pictureNumber = 8;
}
else if ((monthName == "September") && (day > 21)) {
 sign = "Libra";
 pictureNumber = 9;
}
else if ((monthName == "October") && (day <= 22)) {
 sign = "Libra";
 pictureNumber = 9;
}
else if ((monthName == "October") && (day > 22)) {
 sign = "Scorpio";
 pictureNumber = 10;
}
else if ((monthName == "November") && (day <= 21)) {
 sign = "Scorpio";
 pictureNumber = 10;
}
else if ((monthName == "November") && (day > 21)) {
 sign = "Sagitarius";
 pictureNumber = 11;
}
else if ((monthName == "December") && (day <= 21)) {
 sign = "Sagitarius";
 pictureNumber = 11;
}
else if ((monthName == "December") && (day > 21)) {
 sign = "Capricorn";
 pictureNumber = 0;
}
console.log("sign: " + sign);



"image_"+sign+".jpg"
//this calculates the image based on the sign
var displayedImage= new Array("image_Capricorn.jpg", "image_Aquarius.jpg", "image_Pisces.jpg", "image_Aries.jpg", "image_Taurus.jpg", "image_Gemini.jpg", "image_Cancer.jpg", "image_Leo.jpg", "image_Virgo.jpg", "image_Libra.jpg", "image_Scorpio.jpg", "image_Sagitarius.jpg");



//this calculates the fortune based on the sign
  var fortune ="";
  switch (sign)
{
case "Capricorn":
  fortune = "Eat more cheese!";
  break;
case "Aquarius":
  fortune = "Take a nap. You'll need it!";
  break;
case "Pisces":
   fortune = "You will have a busy day.";
  break;
case "Aries":
  fortune = "You're not imagining the smell...";
  break;
case "Taurus":
   fortune = "Good things are coming to you!";
  break;
case "Gemini":
  fortune = "Buy that thing you've been wanting.";
  break;
case "Cancer":
   fortune = "Procrastination will pay off for you.";
  break;
case "Leo":
  fortune = "A journey is on the horizon.";
  break;
case "Virgo":
   fortune = "Try the veal.";
  break;
case "Libra":
   fortune = "All work and no play makes Johnny a dull boy.";
  break;
case "Scorpio":
  fortune = "If you're lonely, adopt a pet.";
  break;
case "Sagitarius":
   fortune = "Be extra careful today...";
  break;
} 





  //this displays output for the user. there are two different versions so it's gramatically correct
  if (sign == "Aquarius" || sign == "Aries") {
    document.getElementById("resultsDiv").innerHTML=("<h3><p>" + "Your birthday: " + monthName + " " + day + "</p>") +
                                                  ("<p>" + "You are an <b>" + sign + "</b>!" + "</p>") +
                                                  ("<p>" + "Your fortune is: <em>" + fortune + "</em>" + "</p>") +
                                                  ("<p>" + "<img src='" + displayedImage[pictureNumber] + "'" + "id='Image' alt='Tom Sawyer' />" + "</p></h3>");
  }
  else {
  document.getElementById("resultsDiv").innerHTML=("<h3><p>" + "Your birthday: " + monthName + " " + day + "</p>") +
                                                  ("<p>" + "You are a <b>" + sign + "</b>!" + "</p>") +
                                                  ("<p>" + "Your fortune is: <em>" + fortune + "</em>" + "</p>") +
                                                  ("<p>" + "<img src='" + displayedImage[pictureNumber] + "'" + "id='Image' alt='Tom Sawyer' />" + "</p></h3>");
    }                                              
};




