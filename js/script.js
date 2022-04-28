// HELPER FUNCTION TO GET DOM ELEMENTS
const $ = (id) => document.getElementById(id)

function calculateDays() {
    // PRIVATE VARIABLES
    let event
    let dt
    let year
    let date
    let today
    let oneDay
    let days

    // SELECT VALUES FROM EVENT AND DATE TEXT BOXES
    event = $('event').value
    dt = $('date').value

    // MAKE SURE THAT TEXT BOXES ARE NOT EMPTY
    if (event.length === 0 || dt.length === 0) {
        $('message').innerHTML = 'Enter an event and a date.'
        return
    }

    // MAKE SURE THAT DATE CONTAINS "/"
    if (dt.indexOf('/') === -1) {
        $('message').innerHTML = 'SLASH: Please check the date format. (Ex: XX/XX/XXXX)'
        return
    }

    // GET YEAR FROM EVENT DATE STRING AND VERIFY THAT IT IS 4 DIGIT/NUMERIC
    year = dt.substring(dt.length - 4)
    if (isNaN(year)) {
        $('message').innerHTML = 'YEAR: Please check the date format. (Ex: XX/XX/XXXX)'
        return
    }

    // CONVERT THE EVENT DATE STRING TO DATE OBJECT AND MAKE SURE IT'S A VALID DATE
    date = new Date(dt)
    if (date.toString() === 'Invalid Date') {
        $('message').innerHTML = 'DATE: Please check the date format. (Ex: XX/XX/XXXX)'
        return
    }

    // CALCULATE DAYS
    today = new Date() // RIGHT NOW

    // HOURS * MINUTES * SECONDS * MILLISECONDS = ONE DAY
    oneDay = 24 * 60 * 60 * 1000

    // USER'S DATE - TODAY'S DATE / ONE DAY = NUMBER OF DAYS
    days = (date.getTime() - today.getTime()) / oneDay

    // ROUND NUMBER OF DAYS UP
    days = Math.ceil(days)

    // CREATE AND DISPLAY THE MESSAGE
    if (days === 0) {
        $('message').innerHTML = `Today is ${event.toUpperCase()}<br>${date.toDateString()}`
    } else if (days < 0) {
        $('message').innerHTML = `${event.toUpperCase()} happened ${Math.abs(days)} day(s) ago.<br>${date.toDateString()}`
    } else if (days > 0) {
        $('message').innerHTML = `${Math.abs(days)} day(s) until ${event.toUpperCase()}<br>${date.toDateString()}`
    }
}

$('countdown').addEventListener('click', calculateDays)
$('event').focus()