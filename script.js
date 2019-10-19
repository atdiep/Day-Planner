$(document).ready(function () {

    var now = moment().format("dddd, MMMM Do, YYYY, h:mm:ss A");
    $('#currentDay').append(now);

    $(".saveBtn").on("click", function (event) {

        var eventEl = event.target.previousElementSibling.firstElementChild.value;
        event.preventDefault();

        var key = event.target.previousElementSibling.firstElementChild.id

        localStorage.setItem(key, eventEl);

    });


    function updateRowStyle() {
        var d = new Date();
        var hours = d.getHours();
        var index = Math.max(Math.min(hours - 9, 8), 0);

        for (var i = 0; i <= 8; i++) {
            var color;
            if (i < index) {
                color = "grey";
            } else if (i > index) {
                color = "green";
            } else if (i = index) {
                color = "white"
            }
            $("textarea")[i].style.backgroundColor = color;
        } if (hours > 17) {
            $("textarea")[index].style.backgroundColor = "grey"
        } else if (hours < 9) {
            $("textarea")[index].style.backgroundColor = "green"
        }
    }

    updateRowStyle();

    function loadStorage() {

        var keys = Object.keys(localStorage)
        for (var i = 0; i < keys.length; i++) {
            if (keys[i]) {
                var element = $("#" + keys[i])[0];
                if (element) {
                    element.value = localStorage.getItem(keys[i]);
                }
            }
        }
    }

    loadStorage();

});