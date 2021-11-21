
//Assignment 2
//Write a JavaScript program to compute the sum and product of an array of integers//

var array = [1,2,3,4,5],
    sum = 0,
    product = 1,
    i;
for (i=0; i<array.length; i++)
    {
        sum += array[i];
        product *= array[i];
    }
    console.log("Sum: "+ sum + " & Product: "+ product);



//Assignment 3 
//Write a JavaScript function to merge two arrays and removes all duplicates elements

function merge_array(array1, array2) {
    var result_array = [];
    var arr = array1.concat(array2);
    var len = arr.length;
    var assoc = {};
    while(len--) {
        var item = arr[len];
        if(!assoc[item]) 
        { 
            result_array.unshift(item);
            assoc[item] = true;
        }
    }
    return result_array;
}
var array1 = [1, 2, 3];
var array2 = [2, 30, 1];
console.log(merge_array(array1, array2));


//Assignment 4
/* Write a pattern that matches e-mail addresses.
The personal information part contains the following ASCII characters.
Uppercase (A-Z) and lowercase (a-z) English letters.
Digits (0-9).
Characters ! # $ % & ' * + - / = ? ^ _ ` { | } ~
Character . ( period, dot or full stop) provided that it is not the first or last character and 
it will not come one after the other
 */

function valid_email(str)
{
var emailvalidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
if(emailvalidation.test(str))
{  
console.log("It is a Valid email Id.");  
}  
else  
{  
console.log("It is an Invalid Email Id.");  
}
}
valid_email('pooja.paradkar07@gmail.com');


//Assignment 5
//Write a JavaScript function to get the values of First and Last name of the following form:

function getFormvalue()
{
  var x=document.getElementById("form1");
  for (var i=0;i<x.length;i++)
  {
   if (x.elements[i].value!='Submit')
    {  
      console.log(x.elements[i].value);
     }  
   }
}


//Assignment 6
//Write a JavaScript program to remove items from a dropdown list.

function removeitem()
{
var x=document.getElementById("color");
x.remove(x.selectedIndex);
}


//Assignment 7
/* Write a JavaScript program to highlight the bold words of the paragraph, on mouse over a certain link. 
Test data:
Link text is – Click here to highlight bold words
 */
var bold_Items;
window.onload = getBold_items();
function getBold_items() 
{
  bold_Items = document.getElementsByTagName('strong'); 
}
function highlight() 
{
   for (var i=0; i<bold_Items.length; i++)
   {                                                    
    bold_Items[i].style.color = "red";
    }
}
function return_normal()
{
  for (var i=0; i<bold_Items.length; i++) 
  {
       bold_Items[i].style.color = "black";
  }
}


//Assignment 8
/* Write a JavaScript function to get the month name from a particular date. 
Test Data :
console.log(month_name(new Date("10/11/2009")));
console.log(month_name(new Date("11/13/2014")));
Output :
"October"
"November" */

var month_name = function(dt){
    month_list = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
      return month_list[dt.getMonth()];
    };
    console.log(month_name(new Date("10/11/2009")));
    console.log(month_name(new Date("11/13/2014")));


//Assignment 9
/* Write a JavaScript function to test whether a date is a weekend. Go to the editor
 Note : Use standard Saturday/Sunday definition of a weekend.
 Test Data :
console.log(is_weekend('Nov 15, 2014'));
console.log(is_weekend('Nov 16, 2014'));
console.log(is_weekend('Nov 17, 2014'));
Output :
"weekend"
"weekend"
Undefined */

var is_weekend =  function(date1){
    var dt = new Date(date1);
    if(dt.getDay() == 6 || dt.getDay() == 0)
    {
    return "weekend";
    }
}
console.log(is_weekend('Nov 15, 2014'));
console.log(is_weekend('Nov 16, 2014'));
console.log(is_weekend('Nov 17, 2014'));


//Assignment 10 
/*Write a JavaScript program to display the reading status (i.e. display book name, author name 
    and reading status) of the following books. */

var library = [ 
    {
        title: 'Bill Gates',
        author: 'The Road Ahead',
        readingStatus: true
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        readingStatus: true
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        readingStatus: false
    }];

for (var i = 0; i < library.length; i++) 
{
    var book = "'" + library[i].title + "'" + ' by ' + library[i].author + ".";
    if (library[i].readingStatus) {
    console.log("Already read " + book);
    } else
    {
    console.log("You still need to read " + book);
    }
}


//Assignment 11
/* Write a JavaScript program to create a Clock.
Note: The output will come every second.
Expected Console Output:
"14:37:42"
"14:37:43"
"14:37:44"
"14:37:45"
"14:37:46"
"14:37:47"
 */

function clock()
{
this.cur_date = new Date();
this.hours = this.cur_date.getHours();
this.minutes = this.cur_date.getMinutes();
this.seconds = this.cur_date.getSeconds();
}
clock.prototype.run = function ()
{
setInterval(this.update.bind(this), 1000);
};
clock.prototype.update = function () 
{
this.updateTime(1);
console.log(this.hours + ":" + this.minutes + ":" + this.seconds);
};
clock.prototype.updateTime = function (secs) 
{
this.seconds+= secs;
if (this.seconds >= 60)
{
this.minutes++;
this.seconds= 0;
}
if (this.minutes >= 60)
{
this.hours++;
this.minutes=0;
}
if (this.hours >= 24)
{
this.hours = 0;
}
};
var clock = new clock();
clock.run();


//Assignment 12
//Write a JavaScript program to sort an array of JavaScript objects.

var library = [ 
    {
    title: 'The Road Ahead',
    author: 'Bill Gates',
    libraryID: 1254
    },
    {
    title: 'Walter Isaacson',
    author: 'Steve Jobs',
    libraryID: 4264
    },
    {
    title: 'Mockingjay: The Final Book of The Hunger Games',
    author: 'Suzanne Collins',
    libraryID: 3245
    }];
    //Sort an array by string
    library.sort((a,b)=>{
        let aa = a.author.toLowerCase(),
            ab =b.author.toLowerCase();
        if (aa<ab){
            return -1;
        }
        if (aa>ab){
            return 1;
        }
        return 0;
    });

    library.forEach((e)=>{
        console.log(` ${e.author} - ${e.title}`);
    });



