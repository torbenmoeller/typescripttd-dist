var TypeScriptTD;
(function (TypeScriptTD) {
    class HelpScreen2 extends Phaser.State {
        preload() {
            this.game.load.image("Help2", "assets/Textures/HelpScreens/Help2.jpg");
        }
        create() {
            var image = this.game.add.image(0, 0, "Help2");
            image.width = this.game.width;
            image.height = this.game.height;
        }
        update() {
            this.game.input.onDown.add(this.onClick, this);
        }
        onClick() {
            this.game.state.start('HelpScreen3');
        }
    }
    TypeScriptTD.HelpScreen2 = HelpScreen2;
})(TypeScriptTD || (TypeScriptTD = {}));
//# sourceMappingURL=HelpScreen2.js.map