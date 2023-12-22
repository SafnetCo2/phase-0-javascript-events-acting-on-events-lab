// Your code here
/*const dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#ff69b4"
//access the style property of dodger element allows things like background color ,height and width to change
//move the element up
dodger.style.bottom = "100px";
//move to bottom
dodger.style.bottom = "0px";
//So what do we mean when we say that an event provides a code?
/*Any time an event listener is in place and the event it's listening for is triggered, a JavaScript object containing a bunch of information about the event is automatically passed as an argument to the callback function. We can access that object and the information it contains by defining a parameter for the callback. It looks like this*/
/*dodger.addEventListener("keydown", function (event) {
    if (event === "ArowLeft") {
        const left = parseInt(leftNumbers, 10);
        dodger.style.left = `${left - 1}px`;
        console.log(dodger)


    }
});*/
//Now we'll build our moveDodgerLeft() function, adding a check on the current position of the dodger:

const dodger = document.getElementById('dodger');
dodger.style.backgroundColor = "#ff69b4";

function moveDodgerLeft() {
    const leftNumber = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumber, 10);

    if (left > 0) {
        dodger.style.left = `${left - 1}px`;
    }
}
//Now let's wire this up to our event listener:
document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft();

    }
});

function moveDodgerRight() {
    const leftNumber = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumber, 10);

    if (left < 200) {
        dodger.style.left = `${left + 1}px`;
    }
    document.addEventListener("keydown", function (e) {
        if (e.key === "ArrowRight") {
            moveDodgerRight();
        }
    });
}