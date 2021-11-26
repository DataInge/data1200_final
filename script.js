/*----- JS VARIABLES -----*/
var getTopicalSection = document.getElementById("topical-section");
var getTopicalButton = document.getElementById("topical-button");
var getAboutSection = document.getElementById("about-section");
var getAboutButton = document.getElementById("about-button");
var getFunnySection = document.getElementById("funny-section");
var getFunnyButton = document.getElementById("funny-button");
var getButtonText = document.querySelectorAll(".button-text");
var getRestOfButtons = document.querySelectorAll(".nav-button");
var getMobileMenu = document.getElementById("navbar")
var getMobileHeader = document.querySelectorAll(".mobile-h1")
var getMobileMenuButton = document.querySelectorAll(".mobile-menu-button")


var activeBackgroundColor = "background-color: var(--active-background);"
var inactiveBackgroundColor = "background-color: var(--menu-color);"

var getColorPicker1 = document.getElementById("colorpicker1");
var getColorPicker2 = document.getElementById("colorpicker2");
var getColorPicker3 = document.getElementById("colorpicker3");
var getColorPicker4 = document.getElementById("colorpicker4");
var getColorPicker5 = document.getElementById("colorpicker5");


// Define our viewportWidth variable
var viewportWidth;
// Set/update the viewportWidth value
var setViewportWidth = function () {
	viewportWidth = window.innerWidth || document.documentElement.clientWidth;
}
// Log the viewport width into the console
var logWidth = function () {
	if (viewportWidth > 991) {
		console.log('Wide viewport');
	} else {
		console.log('Small viewport');
        inactiveBackgroundColor = "background-color: var(--active-background);"

	}
}

setViewportWidth();
logWidth();

window.addEventListener('resize', function () {
	viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    setViewportWidth();
    logWidth();
}, false);


/* 
Resource for EventListener 
https://gomakethings.com/breakpoint-conditional-javascript-in-vanilla-js/ 

*/  

// Change color of tiles
setInterval(() => {
    var color1 = getColorPicker1.value;
    var color2 = getColorPicker2.value;
    var color3 = getColorPicker3.value;
    var color4 = getColorPicker4.value;
    var color5 = getColorPicker5.value;
    getColorPicker1.parentElement.parentElement.style.backgroundColor = color1;
    getColorPicker2.parentElement.parentElement.style.backgroundColor = color2;
    getColorPicker3.parentElement.parentElement.style.backgroundColor = color3;
    getColorPicker4.parentElement.parentElement.style.backgroundColor = color4;
    getColorPicker5.parentElement.parentElement.style.backgroundColor = color5;
}, 200);


/*----- INLINE CSS VARIABLES -----*/
/*
Copy and paste when editing code:

Buttons:
var(--active-color)
var(--active-thickness)
var(--active-background)
var(--inactive-color)
var(--menu-color)           <--- When button is inactive

Menu:
var(--menu-thin)
*/


/*----- FUNCTION FOR RESIZING NAVBAR -----*/
function smallNavbar() {
    var getLogo = document.getElementById("logo");
    var getButtonIcon = document.querySelectorAll(".button-icon");
    var getNavBar = document.querySelector(".grid-item1");
    var getMainGrid = document.querySelector(".main-container");
    var getButtonArrow = document.getElementById("nav-arrow");
    for (var i = 0; i < getButtonText.length; i++){
        getButtonText[i].classList.toggle("display-none");
    }
    for (var i = 0; i < getButtonIcon.length; i++){
        getButtonIcon[i].classList.toggle("smaller-icon");
    }
    getLogo.classList.toggle("smaller-logo");
    getNavBar.classList.toggle("menu-thin");
    getMainGrid.classList.toggle("smaller-nav-grid");
    if (getButtonArrow.classList.contains("flip")){
        getButtonArrow.classList.remove("flip");
        getButtonArrow.classList.add("flip-back");
        getAboutSection.removeAttribute("style", "transform: translateX(var(--menu-thin));");
        getTopicalSection.removeAttribute("style", "transform: translateX(var(--menu-thin));");
        getFunnySection.removeAttribute("style", "transform: translateX(var(--menu-thin));");
    } else {
        getButtonArrow.classList.remove("flip-back");
        getButtonArrow.classList.add("flip");
        getAboutSection.setAttribute("style", "transform: translateX(var(--menu-thin));");
        getTopicalSection.setAttribute("style", "transform: translateX(var(--menu-thin));");
        getFunnySection.setAttribute("style", "transform: translateX(var(--menu-thin));");
    }
}


/*----- FUNCTION FOR ACTIVATING BUTTON ABOUT -----*/
function showAbout() {
    if (getAboutSection.classList.contains("show")) {
        getAboutSection.classList.remove("show");
        getAboutSection.classList.add("hidden");
        getRestOfButtons[1].setAttribute("style", inactiveBackgroundColor);
        getAboutButton.removeAttribute("style", "background-color: var(--active-background); color: var(--active-color);");
        getButtonText[0].removeAttribute("style", "color: var(--active-color);");
    } else if (getAboutSection.classList.contains("hidden") && getTopicalSection.classList.contains("show")){
        showTopical();
        getTopicalButton.removeAttribute("style", "background-color: var(--active-background); color: var(--active-color);");
        for (var i = 0; i < getRestOfButtons.length; i++){
            getRestOfButtons[i].setAttribute("style", inactiveBackgroundColor, "color: var(--inactive-color);");
        }
        for (var i = 0; i < getButtonText.length; i++){
            getButtonText[i].removeAttribute("style", "color: var(--active-color); font-weight: var(--active-thickness);");
        }
        getRestOfButtons[1].setAttribute("style", " ");
        getButtonText[3].removeAttribute("style", "color: var(--active-color); font-weight: var(--active-thickness);")
        getButtonText[0].setAttribute("style", "color: var(--active-color); font-weight: var(--active-thickness);");
        getAboutSection.classList.add("show");
        getAboutSection.classList.remove("hidden");
        getAboutButton.setAttribute("style", "background-color: var(--active-background);");
    } else if (getAboutSection.classList.contains("hidden") && getFunnySection.classList.contains("show")){
        showFunny()
        getTopicalButton.removeAttribute("style", "background-color: var(--active-background); color: var(--active-color);");
        for (var i = 0; i < getRestOfButtons.length; i++){
            getRestOfButtons[i].setAttribute("style", inactiveBackgroundColor, "color: var(--inactive-color);");
        }
        for (var i = 0; i < getButtonText.length; i++){
            getButtonText[i].removeAttribute("style", "color: var(--active-color); font-weight: var(--active-thickness);");
        }
        getRestOfButtons[1].setAttribute("style", " ");
        getButtonText[3].removeAttribute("style", "color: var(--active-color); font-weight: var(--active-thickness);")
        getButtonText[0].setAttribute("style", "color: var(--active-color); font-weight: var(--active-thickness);");
        getAboutSection.classList.add("show");
        getAboutSection.classList.remove("hidden");
        getAboutButton.setAttribute("style", "background-color: var(--active-background);");
    } else if (getAboutSection.classList.contains("hidden") && getTopicalSection.classList.contains("hidden")){
        for (var i = 0; i < getRestOfButtons.length; i++){
            getRestOfButtons[i].setAttribute("style", inactiveBackgroundColor, "color: var(--inactive-color);");
        }
        for (var i = 0; i < getButtonText.length; i++){
            getButtonText[i].removeAttribute("style", "color: var(--active-color); font-weight: var(--active-thickness);");
        }
        getTopicalButton.removeAttribute("style", "background-color: white; color: var(--active-color);");
        getRestOfButtons[1].setAttribute("style", " ");
        getButtonText[3].removeAttribute("style", "color: var(--active-color); font-weight: var(--active-thickness);")
        getButtonText[0].setAttribute("style", "color: var(--active-color); font-weight: var(--active-thickness);");
        getAboutSection.classList.add("show");
        getAboutSection.classList.remove("hidden");
        getAboutButton.setAttribute("style", "background-color: var(--active-background);");
    }
}


/*----- FUNCTION FOR ACTIVATING BUTTON TOPICAL -----*/
function showTopical() {
    if (getTopicalSection.classList.contains("show")) {
        getTopicalSection.classList.remove("show");
        getTopicalSection.classList.add("hidden");
    } else if (getTopicalSection.classList.contains("hidden") && getAboutSection.classList.contains("show")){
        showAbout();
        for (var i = 0; i < getRestOfButtons.length; i++){
            getRestOfButtons[i].setAttribute("style", inactiveBackgroundColor, "color: var(--inactive-color);");
        }
        for (var i = 0; i < getButtonText.length; i++){
            getButtonText[i].removeAttribute("style", "color: var(--active-color); font-weight: var(--active-thickness);");
        }
        getRestOfButtons[1].setAttribute("style", " ");
        getButtonText[0].removeAttribute("style", "color: var(--active-color); font-weight: var(--active-thickness);")
        getButtonText[3].setAttribute("style", "color: var(--active-color); font-weight: var(--active-thickness);");
        getTopicalSection.classList.add("show");
        getTopicalSection.classList.remove("hidden");
        getTopicalButton.setAttribute("style", "background-color: var(--active-background);");
    } else if (getTopicalSection.classList.contains("hidden") && getFunnySection.classList.contains("show")){
        showFunny();
        for (var i = 0; i < getRestOfButtons.length; i++){
            getRestOfButtons[i].setAttribute("style", inactiveBackgroundColor, "color: var(--inactive-color);");
        }
        for (var i = 0; i < getButtonText.length; i++){
            getButtonText[i].removeAttribute("style", "color: var(--active-color); font-weight: var(--active-thickness);");
        }
        getRestOfButtons[1].setAttribute("style", " ");
        getButtonText[0].removeAttribute("style", "color: var(--active-color); font-weight: var(--active-thickness);")
        getButtonText[3].setAttribute("style", "color: var(--active-color); font-weight: var(--active-thickness);");
        getTopicalSection.classList.add("show");
        getTopicalSection.classList.remove("hidden");
        getTopicalButton.setAttribute("style", "background-color: var(--active-background);");
    } else if (getTopicalSection.classList.contains("hidden")) {
        for (var i = 0; i < getRestOfButtons.length; i++){
            getRestOfButtons[i].setAttribute("style", inactiveBackgroundColor, "color: var(--inactive-color);");
        }
        for (var i = 0; i < getButtonText.length; i++){
            getButtonText[i].removeAttribute("style", "color: var(--active-color); font-weight: var(--active-thickness);");
        }
        getRestOfButtons[1].setAttribute("style", " ");
        getButtonText[0].removeAttribute("style", "color: var(--active-color); font-weight: var(--active-thickness);")
        getButtonText[3].setAttribute("style", "color: var(--active-color); font-weight: var(--active-thickness);");
        getTopicalSection.classList.add("show");
        getTopicalSection.classList.remove("hidden");
        getTopicalButton.setAttribute("style", "background-color: var(--active-background);");
    }
}


/*----- FUNCTION FOR ACTIVATING BUTTON FUNNY -----*/
function showFunny() {
    if (getFunnySection.classList.contains("show")) {
        getFunnySection.classList.remove("show");
        getFunnySection.classList.add("hidden");
    } else if (getFunnySection.classList.contains("hidden") && getAboutSection.classList.contains("show")){
        showAbout();
        for (var i = 0; i < getRestOfButtons.length; i++){
            getRestOfButtons[i].setAttribute("style", inactiveBackgroundColor, "color: var(--inactive-color);");
        }
        for (var i = 0; i < getButtonText.length; i++){
            getButtonText[i].removeAttribute("style", "color: var(--active-color); font-weight: var(--active-thickness);");
        }
        getButtonText[5].setAttribute("style", "color: var(--active-color); font-weight: var(--active-thickness);");
        getFunnySection.classList.add("show");
        getFunnySection.classList.remove("hidden");
        getFunnyButton.setAttribute("style", "background-color: var(--active-background);");
    } else if (getFunnySection.classList.contains("hidden") && getTopicalSection.classList.contains("show")){
        showTopical();
        for (var i = 0; i < getRestOfButtons.length; i++){
            getRestOfButtons[i].setAttribute("style", inactiveBackgroundColor, "color: var(--inactive-color);");
        }
        for (var i = 0; i < getButtonText.length; i++){
            getButtonText[i].removeAttribute("style", "color: var(--active-color); font-weight: var(--active-thickness);");
        }
        getButtonText[5].setAttribute("style", "color: var(--active-color); font-weight: var(--active-thickness);");
        getFunnySection.classList.add("show");
        getFunnySection.classList.remove("hidden");
        getFunnyButton.setAttribute("style", "background-color: var(--active-background);");
    } else if (getFunnySection.classList.contains("hidden") && getAboutSection.classList.contains("hidden")){
        for (var i = 0; i < getRestOfButtons.length; i++){
            getRestOfButtons[i].setAttribute("style", inactiveBackgroundColor, "color: var(--inactive-color);");
        }
        for (var i = 0; i < getButtonText.length; i++){
            getButtonText[i].removeAttribute("style", "color: var(--active-color); font-weight: var(--active-thickness);");
        }
        getRestOfButtons[1].setAttribute("style", " ");
        getButtonText[0].removeAttribute("style", "color: var(--active-color); font-weight: var(--active-thickness);")
        getButtonText[5].setAttribute("style", "color: var(--active-color); font-weight: var(--active-thickness);");
        getFunnySection.classList.add("show");
        getFunnySection.classList.remove("hidden");
        getFunnyButton.setAttribute("style", "background-color: var(--active-background);");
    }
}

function showMobileMenu() {
    if (getMobileMenu.classList.contains("mobile-nav-show")) {
        getMobileMenu.classList.remove("mobile-nav-show");
        getMobileMenu.classList.add("mobile-nav-hidden");
    } else if (getMobileMenu.classList.contains("mobile-nav-hidden")) {
        getMobileMenu.classList.remove("mobile-nav-hidden");
        getMobileMenu.classList.add("mobile-nav-show");
    }

}
