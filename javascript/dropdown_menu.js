/*
Bryce Dixon (T00054766) Dec 2024
COMP 2681, Final Project

This is the javascript function used to create the dropdown menu for mobile devices. 
REFERENCES:
1. https://www.w3schools.com/howto/howto_js_dropdown.asp
-> Creating a drop down menu. This code was utilized to understand how to adapt this for
my existing nav bar.
*/

  function displayMenu() {
    /*Gets the "mydropdown" item (the UL element) and "shows it" by applying the show class*/
    /*If the menu is already show, this will also make the menu disappear when clicked*/
    document.getElementById("drop_down_menu").classList.toggle("show");
  }
  /*When the user clicks anywhere outside the menu button, this checks that this is true
  If it is, it will close the menu.*/
  window.onclick = function(event) {
    /*If it isn't the drop button*/
    if(!event.target.matches('.dropdown_button')){
      var dropdowns = document.getElementsByClassName("dropdown_content");
      var i;
      /*Iterate through the items int he dropdown menu, and hide them by removing the 
      "show" class*/
      for(i=0; i<dropdowns.length; i++){
        var openDropDown = dropdowns[i];
        if(openDropDown.classList.contains('show')) {
          openDropDown.classList.remove('show');
        }
      }
    }
  }
