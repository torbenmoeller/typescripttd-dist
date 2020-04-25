var TypeScriptTD;
(function (TypeScriptTD) {
    class VictoryScreen extends Phaser.State {
        preload() {
            this.game.load.image("highscore", "assets/Textures/Backgrounds/4-highscores.jpg");
        }
        create() {
            this.game.add.image(0, 0, "highscore");
            var style = { font: "25px Impact", fill: "#ffffff", align: "center" };
            var vic = this.game.add.text(this.game.width / 2, this.game.height / 4, "You Are Victorious", style);
            vic.anchor.set(0.5, 0.5);
        }
        update() {
            this.game.input.onDown.add(this.onClick, this);
        }
        onClick() {
            this.game.state.start('MainMenuScreen');
        }
    }
    TypeScriptTD.VictoryScreen = VictoryScreen;
})(TypeScriptTD || (TypeScriptTD = {}));
//# sourceMappingURL=VictoryScreen.js.map