var button = document.querySelector(".title-form-btn");
var form = document.querySelector(".hotel-search");
var opened = false;
button.addEventListener("click", function(event) {
    if (!opened) {
        event.preventDefault();
        console.log(event);
        form.classList.add("hotel-search-show");
        opened = true;
    } else if (opened) {
        event.preventDefault();
        form.classList.remove("hotel-search-show");
        opened = false;
    }
});
