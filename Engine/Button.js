var TypeScriptTD;
(function (TypeScriptTD) {
    class Button {
        constructor(game, position, pic) {
            this.Position = position;
            var image = game.add.sprite(position.x, position.y, pic);
            this.Sprite = image;
            image.width = 35;
            image.height = 35;
            this.sizeX = image.width;
            this.sizeY = image.height;
            image.inputEnabled = true;
        }
        wasClicked(x, y) {
            var boolX = x > this.Position.x && x < this.Position.x + this.sizeX;
            var boolY = y > this.Position.y && y < this.Position.y + this.sizeY;
            return (boolX && boolY);
        }
    }
    TypeScriptTD.Button = Button;
})(TypeScriptTD || (TypeScriptTD = {}));
//# sourceMappingURL=Button.js.map