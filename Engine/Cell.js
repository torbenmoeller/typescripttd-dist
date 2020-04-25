var TypeScriptTD;
(function (TypeScriptTD) {
    class Cell {
        constructor(x, y) {
            this.X = x;
            this.Y = y;
            this.buildable = true;
        }
        setTower(towerInstance) {
            this.towerInstance = towerInstance;
            this.buildable = false;
        }
    }
    TypeScriptTD.Cell = Cell;
})(TypeScriptTD || (TypeScriptTD = {}));
//# sourceMappingURL=Cell.js.map