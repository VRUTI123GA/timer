let count = document.querySelectorAll(".counts")[0];
let center = document.querySelectorAll(".minute")[0];
let first = document.querySelectorAll(".hour")[0];
let audio = document.querySelector("#audio")
let hour = 1
let minute = 2
let timer = 59
let condition = false
count.innerText = timer
center.innerText = minute
first.innerText = hour
let bun;

function start_stop(button) {
    bun = button
    condition = !condition;
    button.innerText = condition ? "Stop" : "Start";
}

function reset() {
    timer = 60;
}
let counts = 1;


function audioPlayer() {
    const audioIn = setInterval(() => {
        audio.play();
        counts++;
        if (counts == 12) {
            clearInterval(audioIn);
            counts = 0;
        }
    }, 1000)
}


const id = setInterval(() => {
    if (condition) {
        timer--;
        count.innerText = timer < 10 ? `0${timer}` : timer;
        if (timer === 0) {
            // audioPlayer();


            if (minute != 0) {
                minute--
                center.innerText = minute< 10 ? `0${minute}` : minute;
                if (hour != 0 && minute == 0) {

                    hour--
                    minute = 2
                    center.innerText = minute< 10 ? `0${minute}` : minute;
                    first.innerText = hour< 10 ? `0${hour}` : hour;
                } else if (minute == 0 && hour == 0 && timer == 0) {

                    condition = false;
                    bun.innerText = "Start";
                }
            } else {
                if (hour != 0) {
                    hour--
                    minute = 2
                    center.innerText = minute
                    first.innerText = hour
                }
            }

            timer = 59;

        }
    }


}, 500)

