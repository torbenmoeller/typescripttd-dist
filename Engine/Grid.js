var TypeScriptTD;
(function (TypeScriptTD) {
    class Grid {
        constructor(cellsX, cellsY) {
            this.CellsArray = [];
            this.cellSize = 35;
            this.Columns = cellsX;
            this.Rows = cellsY;
            this.Position = new TypeScriptTD.Vector2(67, 47);
            for (var i = 0; i < cellsX; i++) {
                for (var j = 0; j < cellsY; j++) {
                    this.CellsArray[cellsX * j + i] = new TypeScriptTD.Cell(i, j);
                }
            }
        }
        getCell(x, y) {
            return this.CellsArray[this.Columns * y + x];
        }
        draw(game) {
            for (var i = 0; i < this.Columns; i++) {
                for (var j = 0; j < this.Rows; j++) {
                    var g = game.add.graphics(0, 0);
                    g.lineStyle(2, 0x000000, 1);
                    g.drawRect(this.Position.x + i * this.cellSize, this.Position.y + j * this.cellSize, this.cellSize, this.cellSize);
                }
            }
        }
        getCellCoordinate(cellX, cellY) {
            var x = this.Position.x + cellX * this.cellSize;
            var y = this.Position.y + cellY * this.cellSize;
            var v = new TypeScriptTD.Vector2(x, y);
            return v;
        }
        getCellCenter(cellX, cellY) {
            var x = this.Position.x + cellX * this.cellSize + this.cellSize / 2;
            var y = this.Position.y + cellY * this.cellSize + this.cellSize / 2;
            var v = new TypeScriptTD.Vector2(x, y);
            return v;
        }
        getCellAtPixel(pixelPosition) {
            var pos = pixelPosition.subtract(this.Position);
            var x = Math.floor(pos.x / this.cellSize);
            var y = Math.floor(pos.y / this.cellSize);
            return this.getCell(x, y);
        }
        wasClicked(x, y) {
            var boolX = x > this.Position.x && x < this.Position.x + this.Columns * this.cellSize;
            var boolY = y > this.Position.y && y < this.Position.y + this.Rows * this.cellSize;
            return (boolX && boolY);
        }
    }
    TypeScriptTD.Grid = Grid;
})(TypeScriptTD || (TypeScriptTD = {}));
//# sourceMappingURL=Grid.js.map