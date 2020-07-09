// Your code here
class Polygon {
    constructor(sides) {
        this.sides = sides;
    };

    get countSides () {
        return this.sides.length;
    };

    get perimeter () {
        return this.sides.reduce((memo, currentSideCount) => memo + currentSideCount, 0);
    };
};

class Triangle extends Polygon {
    get isValid () {
        if (!Array.isArray(this.sides)) return;
        if (this.countSides !== 3) return;
        let side1 = this.sides[0]
        let side2 = this.sides[1]
        let side3 = this.sides[2]
        return ((side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1))
      };
};

class Square extends Polygon {
    get isValid () {
        if (!Array.isArray(this.sides)) console.log("first triggered");
        if (this.countSides !== 4) console.log("second triggered");
        return this.sides.every(currentSide => currentSide === this.sides[0])
      };

    get area () {
        return this.isValid ? this.sides[0] ** 2 : false;
    };
};