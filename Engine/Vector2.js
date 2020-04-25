var TypeScriptTD;
(function (TypeScriptTD) {
    class Vector2 {
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }
        add(vector) {
            var a = this.x + vector.x;
            var b = this.y + vector.y;
            return new Vector2(a, b);
        }
        subtract(vector) {
            var a = this.x - vector.x;
            var b = this.y - vector.y;
            return new Vector2(a, b);
        }
        multiply(value) {
            var a = this.x * value;
            var b = this.y * value;
            return new Vector2(a, b);
        }
        divide(value) {
            var a = this.x / value;
            var b = this.y / value;
            return new Vector2(a, b);
        }
        getLength() {
            var a = this.x * this.x;
            var b = this.y * this.y;
            return Math.sqrt(a + b);
        }
        normalize() {
            var a = this.x / (this.getLength() + 0.00000000001);
            var b = this.y / (this.getLength() + 0.00000000001);
            return new Vector2(a, b);
        }
        getLengthSquared() {
            return this.getLength() * this.getLength();
        }
    }
    TypeScriptTD.Vector2 = Vector2;
})(TypeScriptTD || (TypeScriptTD = {}));
//# sourceMappingURL=Vector2.js.map