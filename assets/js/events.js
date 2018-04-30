document.addEventListener("DOMContentLoaded", initEvents);
let containerEvent;

function initEvents() {
    containerEvent = document.getElementsByClassName("container")[0];
    createCountdownElementsEvents();
    startCountdown();
    setInterval(startCountdown(1), 60000);
}

function createCountdownElementsEvents() {
    let countdowns = getCountdownsJson();

    for (let i = 0; i < countdowns.Countdowns.length; i++) {
        let countdown = countdowns.Countdowns[i];
        if (countdown.type === "event")
        {
            let background = (countdown.background !== null) ? countdown.background : randomBackground();

            containerEvent.innerHTML += `<li class="countdown" data-type="${countdown.type}" data-start="${countdown.start}" data-end="${countdown.end}" data-finished="${countdown.finished}">
                                         <div class="progression"><span class="progpercentage"></span></div>
                                         <h1 class="title">${countdown.name}</h1>
                                         <p class="timer"></p>
                                         <div class="background" style="background-image: url('${background}')"></div>
                                    </li>`;
        }
    }
}