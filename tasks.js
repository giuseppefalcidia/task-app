document.addEventListener('DOMContentLoaded', function() {

    //* By default, submit button is disabled - disabled value equals to true
     // document.querySelector('#submit').disabled = true;

    // onkeyup is an event listener - when i lift my finger off of the key
    // disabled and enabled (whenever i type something) submit button
    document.querySelector('#task').onkeyup = () => {
     
        // if the length of what the user typed in is greater than 0(actually typed something in)
        // then give access to the submit button but otherwise don't give access to that button
        if (document.querySelector('#task').value.length > 0) {
            document.querySelector('#submit').disabled = false;
        } else {
            document.querySelector('#submit').disabled = true;
        }
       
    }

    document.querySelector('form').onsubmit = () => {
        const task = document.querySelector('#task').value;
        // console.log(task);
        // creating a list item - element
        const li = document.createElement('li');
        // html inside the list item
        li.innerHTML = task;   // whatever the user typed in (previous variable)
        
        // get me the element with the id '#tasks' and 'append' to the end the 'li' value
        document.querySelector('#tasks').append(li);
 
        // get me the input field and change its value to an empty string (clear out the value of input field)
        document.querySelector('#task').value = '';
        // now even after i submit the form - the submit button is still gonna be disabled - back to be inactive after i finished typing in 
        document.querySelector('#submit').disabled = true;

        // Stop form from submitting
        return false;
    }
});

// Styles of the page 

document.querySelector('body').style.background = "red";
document.querySelector('body').style.fontSize = "25px";
document.querySelector('form-div').style.width = "500px"
document.querySelector('form-div').style.display = "flex";
document.querySelector('form-div').style.position = "center";

