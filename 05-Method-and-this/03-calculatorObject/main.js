let calculator = {
    x: null,
    y: null,
    read() {
        this.x = +prompt('Number1');
        this.y = +prompt('Number2');
    },
    sum() { return this.x + this.y; },
    mul() { return this.x * this.y; },
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());