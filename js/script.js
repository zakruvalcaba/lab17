const $ = (id) => {
    return document.getElementById(id);
};

function calculateDays() {
    let event;
    let dt;
    let year;
    let date;
    let today;
    let oneDay;
    let days;

    // SELECT VALUES FROM EVENT AND DATE TEXT BOXES
    event = $('event').value;
    dt = $('date').value;

    // MAKE SURE THAT EVENT AND DATE TEXT BOXES ARE NOT EMPTY
    if (event.length === 0 || dt.length === 0) {
        $('message').innerHTML = 'Please enter an event and a date.';
        return;
    }

    // MAKE SURE THE DATE STRING HAS SLASHES
    if (dt.indexOf('/') === -1) {
        $('message').innerHTML = 'SLASH: Please check the date format (Ex: XX/XX/XXXX).';
        return;
    }

    // GET YEAR FROM EVENT DATE STRING AND VERIFY THAY IT IS 4 DIGIT/NUMERIC
    year = dt.substring(dt.length - 4);
    if (isNaN(year)) {
        $('message').innerHTML = 'YEAR: Please check the date format (Ex: XX/XX/XXXX).';
        return;
    }

    // CONVERT THE EVENT DATE STRING TO DATE OBJECT AND MAKE SURE IT IS VALID
    date = new Date(dt);
    if (date === 'Invalid Date') {
        $('message').innerHTML = 'DATE FORMAT: Please check the date format (Ex: XX/XX/XXXX).';
        return;
    }

    // CALCULATE DAYS
    today = new Date();
    // HOURS * MINUTES * SECONDS * MILLISECONDS = ONE DAY
    oneDay = 24 * 60 * 60 * 1000 
    // USER'S DATE - TODAY'S DATE / ONE DAY = NUMBER OF DAYS
    days = (date.getTime() - today.getTime()) / oneDay;
    // ROUND NUMBER OF DAYS UP
    days = Math.ceil(days);

    // CREATE AND DISPLAY MESSAGE
    if (days === 0) {
        $('message').innerHTML = `Today is ${event.toUpperCase()}\n${date.toDateString()}`;
    } else if (days < 0) {
        $('message').innerHTML = `${event.toUpperCase()} happened ${Math.abs(days)} days ago.\n${date.toDateString()}`;
    } else if (days > 0) {
        $('message').innerHTML = `${Math.abs(days)} days until ${event.toUpperCase()}.\n${date.toDateString()}`;
    }
}

window.addEventListener('load', () => {
    $('countdown').addEventListener('click', calculateDays);
    $('event').focus();
});