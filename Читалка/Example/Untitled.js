function paginateText() {
    var text = document.getElementById("originalText").innerHTML; // gets the text, which should be displayed later on
    var textArray = text.split(" "); // makes the text to an array of words
    createPage(); // creates the first page
    for (var i = 0; i < textArray.length; i++) { // loops through all the words
        var success = appendToLastPage(textArray[i]); // tries to fill the word in the last page
        if (!success) { // checks if word could not be filled in last page
            createPage(); // create new empty page
            appendToLastPage(textArray[i]); // fill the word in the new last element
        }
    }
}

function createPage() {
    var page = document.createElement("div"); // creates new html element
    page.setAttribute("class", "page"); // appends the class "page" to the element
    document.getElementById("paginatedText").appendChild(page); // appends the element to the container for all the pages
}

function appendToLastPage(word) {
    var page = document.getElementsByClassName("page")[document.getElementsByClassName("page").length - 1]; // gets the last page
    var pageText = page.innerHTML; // gets the text from the last page
    page.innerHTML += word + " "; // saves the text of the last page
    if (page.offsetHeight < page.scrollHeight) { // checks if the page overflows (more words than space)
        page.innerHTML = pageText; //resets the page-text
        return false; // returns false because page is full
    } else {
        return true; // returns true because word was successfully filled in the page
    }
}
paginateText();