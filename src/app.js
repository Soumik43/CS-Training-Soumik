import { Counter } from "./components/Counter.js";

const root = document.getElementById("root");

function createCounters(numberOfCounters) {
    for (let i = 0; i < numberOfCounters; i++) {
        const newCounter = new Counter();
        newCounter.mount(root);
    }
}

createCounters(3);
