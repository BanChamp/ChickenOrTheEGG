// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    const egg = document.querySelector(".egg");

    // Add a click event listener to the egg to start the animation
    egg.addEventListener("click", function () {
        egg.classList.add("animate");
    });

    // Reset the animation on animation end
    egg.addEventListener("animationend", function () {
        egg.classList.remove("animate");
    });
});
