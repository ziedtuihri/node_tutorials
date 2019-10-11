let Rectongle = class {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    area() {
        return this.height * this.width;
    }
}

console.log(new Rectongle(4,5).area());