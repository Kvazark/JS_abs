function attachEventsListeners() {

    const buttons = document.querySelectorAll('input[type=button]');
    buttons[0].addEventListener('click', () => {
        let input = document.getElementById("days").value;
        document.getElementById("hours").value = input * 24;
        document.getElementById("minutes").value = input * 24*60;
        document.getElementById("seconds").value = input * 24*3600;

    })
    buttons[1].addEventListener('click',  () => {
        let input = document.getElementById("hours").value;
        document.getElementById("days").value = input / 24;
        document.getElementById("minutes").value = input * 60;
        document.getElementById("seconds").value = input * 3600;

    })
    buttons[2].addEventListener('click', () => {
        let input = document.getElementById("minutes").value;
        document.getElementById("days").value = input / (24 * 60);
        document.getElementById("hours").value = input / 60;
        document.getElementById("seconds").value = input * 60;

    })
    buttons[3].addEventListener('click', () => {
        let input = document.getElementById("seconds").value;
        document.getElementById("days").value = input / (24*3600);
        document.getElementById("hours").value = input / (3600);
        document.getElementById("minutes").value = input / 60;

    })

}