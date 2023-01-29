class Timer {
    constructor() {
        this.timer = undefined;
        this.hr = 0;
        this.min = 0;
        this.sec = 0;
    }

    updateTimer(timerValue) {
        this.sec++;
        if (this.sec === 60) {
            this.min++;
            this.sec = 0;
            if (this.min == 60) {
                this.hr++;
                this.min = 0;
            }
        }
        const formattedHr = this.hr < 10 ? `0${this.hr}` : `${this.hr}`;
        const formattedMin = this.min < 10 ? `0${this.min}` : `${this.min}`;
        const formattedSec = this.sec < 10 ? `0${this.sec}` : `${this.sec}`;
        console.log(`this is sec ${formattedSec}`);
        timerValue.innerText = `${formattedHr}:${formattedMin}:${formattedSec}`;
    }

    startTimer(startButton, timerValue) {
        if (startButton.innerText === "Pause") {
            startButton.innerText = "Start";
            clearInterval(this.timer);
        } else {
            startButton.innerText = "Pause";
            this.timer = setInterval(this.updateTimer.bind(this), 1000, timerValue);
        }
    }

    resetTimer(startButton, timerValue) {
        startButton.innerText = "Start";
        clearInterval(this.timer);
        this.hr = 0;
        this.min = 0;
        this.sec = 0;
        timerValue.innerText = `0${this.hr}:0${this.min}:0${this.sec}`;
    }

    render() {
        const timerContainer = document.createElement("div");
        const timerHeader = document.createElement("h1");
        const timerValue = document.createElement("p");
        const buttonContainer = document.createElement("div");
        const startButton = document.createElement("button");
        const resetButton = document.createElement("button");

        timerContainer.classList.add("timerContainer");
        timerHeader.classList.add("timerHeader");
        timerValue.classList.add("timerValue");
        buttonContainer.classList.add("timerButtons");
        startButton.classList.add("startButton");
        resetButton.classList.add("resetButton");

        timerHeader.innerText = "Timer";
        startButton.innerText = "Start";
        resetButton.innerText = "Reset";
        timerValue.innerText = `0${this.hr}:0${this.min}:0${this.sec}`;

        startButton.onclick = this.startTimer.bind(this, startButton, timerValue);
        resetButton.onclick = this.resetTimer.bind(this, startButton, timerValue);

        buttonContainer.appendChild(startButton);
        buttonContainer.appendChild(resetButton);

        timerContainer.appendChild(timerHeader);
        timerContainer.appendChild(timerValue);
        timerContainer.appendChild(buttonContainer);

        return timerContainer;
    }

    mount(el) {
        const renderedUI = this.render();
        if (el) {
            el.appendChild(renderedUI);
            return;
        }
        document.body.appendChild(renderedUI);
    }
}

export { Timer };
