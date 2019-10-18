$(document).ready(function () {

    var now = moment().format("dddd, MMMM Do, YYYY, h:mm:ss A");
    $('#currentDay').append(now);

    function saveRow() {
        var eventInput = $("textarea");
        var eventEL = localStorage.getItem("textarea");
        $(".saveBtn").on("click", function (event) {
            event.preventDefault();

            var eventEL = $("textarea").val();
            localStorage.setItem("textarea", eventEL);
            return saveRow
        });
    };

    function updateRowStyle() {
        var currHour = now.getHours();
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