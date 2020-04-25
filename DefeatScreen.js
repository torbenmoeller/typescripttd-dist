var TypeScriptTD;
(function (TypeScriptTD) {
    class DefeatScreen extends Phaser.State {
        preload() {
            this.game.load.image("loading", "assets/Textures/Backgrounds/3-loading.jpg");
        }
        create() {
            this.game.add.image(0, 0, "loading");
            var style = { font: "25px Impact", fill: "#ffffff", align: "center" };
            var vic = this.game.add.text(this.game.width / 2, this.game.height / 4, "You Have Been Defeated", style);
            vic.anchor.set(0.5, 0.5);
        }
        update() {
            this.game.input.onDown.add(this.onClick, this);
        }
        onClick() {
            this.game.state.start('MainMenuScreen');
        }
    }
    TypeScriptTD.DefeatScreen = DefeatScreen;
})(TypeScriptTD || (TypeScriptTD = {}));
//# sourceMappingURL=DefeatScreen.js.map