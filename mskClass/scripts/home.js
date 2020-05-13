// DOM = Document Object Model, the computational
// representation of our site
// event listener to only execute JS when document/site/content
// is available
document.addEventListener("DOMContentLoaded", function() {
    // variables store values
    // let element; or var element; to declare variables
    // "document" presents the HTML document in the browser
    var description = document.getElementById("description");
    // write into browser javascript console
    console.log(description);

    // var descriptionBgColor = description.style.backgroundColor;

    // addEventListener("event", whatToDo)
    description.addEventListener("click", clickHandler);
    description.addEventListener("mouseover", hoverHandler);
    description.addEventListener("mouseout", hoverHandler);

    function clickHandler() {
        description.textContent = "Updated Content!";
        console.log("clicked");
    }

    function hoverHandler() {
        if (description.style.color == "lightblue") {
            description.style.color = "unset";
        } else {
            description.style.color = "lightblue";
        }
    }

    var image = document.getElementById("photo");
    image.addEventListener("click", switchImage);

    function switchImage() {
        // console.log(image);
        if (image.getAttribute("name") == "dog-photo") {
            image.setAttribute("name", "seal-photo");
            image.setAttribute("alt", "seal picture");
            image.setAttribute("src", "../images/seal.jpg");
            // console.log(image);
        } else {
            image.setAttribute("name", "dog-photo");
            image.setAttribute("alt", "dog picture");
            image.setAttribute("src", "../images/dog.jpg");
        }
    }

    // for (initializer; exit-condition; final expression){}
    for (var i = 0; i < 10; i++) {
        // if (odd) {print}
        // else {print not}
        //  != => is not
        if (i % 2 != 0) {
            console.log(i);
        }
    }

    //  search description, print how many times
    // you found the letter e
    var descriptionLength = description.textContent.length;
    for (var i = 0; i < descriptionLength; i++) {
        // [i] indicate position
        if (description.textContent[i] == "e") {
            console.log("e found!");
        }
    }
});
