export default class Point {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }

    // show = () => '${this.x} and ${htis.y}';
    
    static toString() {
      return '${this.x}, ${htis.y}',this.x;
    }

    static distance(a, b) {
      const dx = a.x - b.x;
      const dy = a.y - b.y;
      return Math.hypot(dx, dy);
    }
    
  }