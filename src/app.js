import { Counter } from "./components/Counter.js";
import { Timer } from "./components/Timer.js";

const root = document.getElementById("root");

function createCounters(numberOfCounters) {
    for (let i = 0; i < numberOfCounters; i++) {
        const newCounter = new Counter();
        newCounter.mount(root);
    }
}

createCounters(0);

function createTimers(numberOfTimers) {
    for (let i = 0; i < numberOfTimers; i++) {
        const newTimer = new Timer();
        newTimer.mount(root);
    }
}

createTimers(3);
