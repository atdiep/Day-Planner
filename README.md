# Day-Planner

User Flow
---------------------------------------
1. Open app in a browser (HTML, CSS, JS)
2. See the date at the top of the page --> function updating time
3. Schedule 1hr blocks (9 am - 5 pm) --> function (loop)
    a. Time
    b. Text area (type task) --> unique ID for each row
    c. Save button -- event handler
4. If task is in the past - color grey --> CSS styles --> function to change style based on past, present and future.
5. If task is present - color blue
6. If task is future - color white

****************************************

To Build:
---------
1. HTML Document:
    a. Title
    b. Table
        1. Rows (each hour)
            i. Time
            ii. Text area
            iii. Save button

2. JS
    a. Function to build scheduler Rows (buildRows) loops, moment.js
    b. Set date at the top of page (function showTodaysDate) momment.js
    c. Save button event handler (function saveRow) --> uses localstorage
    d. Change row styles (function updateRowStyle) -- moment.js
        i. On page load, check current time (hr) against rows in scheduler
        ii. update style for those that are past hrs, present hour, future hours.

3. CSS
    a. styles already exist