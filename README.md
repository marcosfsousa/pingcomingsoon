# Frontend Mentor - Ping coming soon page solution

This is a solution to the [Ping coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ping-single-column-coming-soon-page-5cadd051fec04111f7b848da). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Submit their email address using an `input` field
- Receive an error message when the `form` is submitted if:
	- The `input` field is empty. The message for this error should say *"Whoops! It looks like you forgot to add your email"*
	- The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Please provide a valid email address"*

### Screenshot

![Desktop Screenshot](.\images\screenshot1440.png)

### Links

- Solution URL: [https://www.frontendmentor.io/challenges/ping-single-column-coming-soon-page-5cadd051fec04111f7b848da/hub/ping-coming-soon-page-using-js-form-validation-H7KYs7RRW]
- Live Site URL: [https://marcosfsousa.github.io/pingcomingsoon/]

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow


### What I learned

Javascript client-side form validation, such as, testing for valid RegEx for input fields.

```js
if (window.innerWidth >= 768) // testing for viewport width and applying classes based on it
```
```js
function emailTest (email) {
    return /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(email);
} // testing regular expressions and how to implement it on JS
```

## Author

- GitHub - [Marcos Sousa](https://www.https://github.com/marcosfsousa)
- Frontend Mentor - [@marcosfsousa](https://www.frontendmentor.io/profile/marcosfsousa)

## Acknowledgments

To guide me through form validation in Javascript I found this video tutorial really helpful.

https://www.youtube.com/watch?v=rsd4FNGTRBw