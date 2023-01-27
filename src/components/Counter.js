class Counter {
    constructor() {
        this.count = 0;
        // This the 1st solution that I've thought of using an instantiating factor of creating a paragraph element
        // this.counterValue = document.createElement("p");
    }

    // The second solution is using the counterValueRef passed on, but it has it drawbacks
    updateCounter(flag, counterValueRef) {
        if (flag) this.count++;
        else this.count--;
        counterValueRef.innerText = `Count is ${this.count}`;
    }

    render() {
        const container = document.createElement("div");
        const counterHeading = document.createElement("h1");
        const counterValue = document.createElement("p");
        const incrementButton = document.createElement("button");
        const decrementButton = document.createElement("button");

        container.classList.add("counterContainer");
        counterHeading.classList.add("counterHeading");
        incrementButton.id = "incrementButton";
        decrementButton.id = "decrementButton";
        counterValue.id = "counterValue";
        counterHeading.innerText = "Counter";

        counterValue.innerText = `Count is ${this.count}`;
        incrementButton.innerText = "+";
        decrementButton.innerText = "-";

        incrementButton.onclick = this.updateCounter.bind(this, true, counterValue);
        decrementButton.onclick = this.updateCounter.bind(this, false, counterValue);

        container.appendChild(counterHeading);
        container.appendChild(counterValue);
        container.appendChild(incrementButton);
        container.appendChild(decrementButton);

        return container;
    }

    mount(el) {
        if (el) {
            el.appendChild(this.render());
            return;
        }
        document.body.appendChild(this.render());
    }
}

export { Counter };
