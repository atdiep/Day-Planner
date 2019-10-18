$(document).ready(function () {

    var now = moment();
    $('#currentDay').append(now);

        $(".saveBtn").on("click", function (event) {
            console.log(event.target.previousElementSibling.firstElementChild.value);
            var eventEl = event.target.previousElementSibling.firstElementChild.value;
            event.preventDefault();

            var key = event.target.previousElementSibling.firstElementChild.id
            console.log(event.target.previousElementSibling.firstElementChild.id);
            localStorage.setItem(key, eventEl);
        });


    function updateRowStyle() {
        var currHour = Hours();
        // Assign each row a time slot.
        if (currHour = currHour) {
            document.body.textarea.style.backgroundColor = "white";
        } else if (currHour ) {
            document.body.textarea.style.backgroundColor = "grey";
        } else if (currHour ) {
            document.body.textarea.style.backgroundColor = "green";
        }
    }
});