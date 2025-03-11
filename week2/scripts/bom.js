/*
In your blank js file, declare three (3) 
variables that hold references to the input, 
button, and list elements.
*/
const textInput = document.querySelector("input");
const submitButton = document.querySelector("button");
const ul = document.querySelector("#list");

/*
Create a click event listener for the Add 
Chapter button using an addEventListener.
*/

submitButton.addEventListener("click", addChapter)

/*
Within the Add Chapter button click event function 
block, between the opening and closing of the 
callback function argument { ... }, do the following:

Check to make sure the input is not blank before 
completing the remaining tasks in this list by using 
an if block that provides a message or does nothing 
and returns the .focus() to the input field.
*/

function addChapter() {
    if (textInput.value.trim()  !== "")
    {
        /*
        Move the code that you wrote in the last activity 
        into this if block in order to support the correct 
        flow of the program.
        */

        // console.log("Text input is not empty and has a value");
        /*
        Create a li element that will hold each entry's 
        chapter title and (also hold) an associated 
        delete button.
        */
        let li = document.createElement("li");
        
        /*
        Create a delete button.
        */
        const delButton = document.createElement("button");
        delButton.setAttribute("class", "delete");
        
        /*
        Populate the li element variable's textContent 
        or innerHTML with the input value.
        */
        li.textContent = textInput.value;
        
        /*
        Populate the button textContent with a ❌
        */
        delButton.textContent = "❌";
        delButton.ariaLabel = `Delete ${textInput.value}`
        
        /*
        Append the li element variable with the delete 
        button.
        */
        li.append(delButton);
        
        /*
        Append the li element variable to the unordered 
        list in your HTML.
        */
        ul.appendChild(li);
        
        console.log(`${li} Added`)
        
        /*
        Add an event listener to the delete button that 
        removes the li element when clicked.
        */
        // let delButton = document.querySelector("button[type='submit'")
        delButton.addEventListener("click", removeChapter);
        
        function removeChapter(event) {
            const li = document.querySelector("li")
            const elementTrigered = event.target
            const closestToElementTrigered = elementTrigered.closest("li")
            
            ul.removeChild(li) // Removes only one li element
            console.log(elementTrigered)
            console.log("Item Removed")
            
            textInput.focus();
        }
        
        /*
        Change the input value to nothing or the empty 
        string to clean up the interface for the user.
        */
        textInput.value = ""; // Clear the input field after adding a task
        
        /*
        Whether or not a list item was created, the focus 
        (active cursor) should be sent to the input element.
        */
        textInput.focus();
    }
    else
    {
        textInput.focus();
    }
}






