# Frontend Mentor - Intro section with dropdown navigation solution

This is a solution to the [Intro section with dropdown navigation challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
- [The challenge](#the-challenge)
- [Links](#links)
- [Built with](#built-with)
- [What I learned](#what-i-learned)
- [Continued development](#continued-development)
- [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the relevant dropdown menus on desktop and mobile when interacting with the navigation links
- View the optimal layout for the content depending on their device's screen size
- See hover states for all interactive elements on the page

### Links

- Solution URL: [Add solution URL here](http://127.0.0.1:5501/index.html#)
- Live Site URL: [Add live site URL here](https://github.com/ini-s/Intro-section-with-dropdown-navigation.git)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- [Bootstrap 5](https://getbootstrap.com/) -  CSS Framework

### What I learned

I learnt how to size an image to fit it's container using the 'object-fit' property. I also learnt how to use  focus and active pseudo classes.

```css
.hero-desktop-img{
  width:100%;
  height:550px;
  object-fit:contain;
  margin-top:2rem;
}
.brand-img{
  margin-top:6px;
  width:100%;
  object-fit: contain;
}
.dropdown-item:focus, .dropdown-item:active, .dropdown-item:hover{
        background-color: black !important;
        color:white !important;
        text-decoration: none;
}
```
```js
 arrow = document.querySelectorAll(".arrow")
    console.log(arrow)
    for (var i=0; i<arrow.length; i++){
        arrow[i].addEventListener("click", (e)=> 
        {console.log(e);
        arrowParent = e.target.parentElement.parentElement.lastElementChild;
        console.log(arrowParent);
        arrowParent.classList.toggle("show");
        if (e.target.getAttribute("src") === "images/icon-arrow-down.png"){
            e.target.setAttribute("src", "images/icon-arrow-up.png")
        }
        else{
            e.target.setAttribute("src", "images/icon-arrow-down.png")
        }
        })
}
```

### Continued development

I plan on learning how to use media queries more effectively.

### Useful resources

- [Mozilla Developer Network](https://developer.mozilla.org/en-US/) - This helped me with documentation on how to use the object fit property, pseduo classes( active and focus) and !important keyword .

## Author

- Website - [Inioluwa Soetan]()
- Frontend Mentor - [@ini-s](https://www.frontendmentor.io/profile/ini-s)
- Twitter - [@kiinghazel](https://www.twitter.com/kiinghazel)

