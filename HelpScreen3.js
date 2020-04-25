var TypeScriptTD;
(function (TypeScriptTD) {
    class HelpScreen3 extends Phaser.State {
        preload() {
            this.game.load.image("Help3", "assets/Textures/HelpScreens/Help3.jpg");
        }
        create() {
            var image = this.game.add.image(0, 0, "Help3");
            image.width = this.game.width;
            image.height = this.game.height;
        }
        update() {
            this.game.input.onDown.add(this.onClick, this);
        }
        onClick() {
            this.game.state.start('HelpScreen4');
        }
    }
    TypeScriptTD.HelpScreen3 = HelpScreen3;
})(TypeScriptTD || (TypeScriptTD = {}));
//# sourceMappingURL=HelpScreen3.js.map