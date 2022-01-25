# Messsage Generator

## Portfolio activity 1

### Project Goal

Project goal is to build a word generator in JavaScript. The word generator will provide either 12, 18 or 24 random words to the user from a pool of 255,312 words. The scripts are then importted into a HTML file which contains a basic website with three buttons. The buttons will either trigger a list of 12,18 or 24 words. The words list is refreshed with every click of the button.

The website uses media queries to make images and the list of words responsive to smaller screen viewports. As media queries were not initially part of the scope of this project, only basic implementation is used (one media querie).

**Issues with the Javascript file:**
During the project I ran into problems with the list. The JS file kept throwing errors when using DOM syntax (as it ended up being a node.js file). This caused issues using the file data on the client side. My initial plan was to have one JS file for the array of words and another JS file with the core functionality however I failed to use the export/import syntax effectively and ended up putting the array of words in the same file as the core code. This is unfortunate due to the size of the array of words (makes the file messy to read). **If you ready the JS file please scroll past the array of words as the main code is below it.**

This is my first project and I used a lot of features that I am not familiar with which made it a challenge to complete. I think my code could be much more efficent and I question how many functions I used to create it. But it works as intended.

#### Languages Used

JavaScript
HTML
CSS

Feedback and suggestions sought

Thank you.
