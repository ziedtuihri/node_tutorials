let Rectongle = class {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    area() {
        return this.height * this.width;
    }
}
let obj = new Rectongle(6,6);
console.log(new Rectongle(4,5).area(), obj.area());