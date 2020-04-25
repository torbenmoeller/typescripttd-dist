var TypeScriptTD;
(function (TypeScriptTD) {
    class MainMenuScreen extends Phaser.State {
        preload() {
            this.game.load.spritesheet('button', 'assets/button.png', 193, 71);
            //this.game.load.spritesheet('resumebutton', 'assetsphaser/button_sprite_sheet.png', 193, 71);
            //this.game.load.spritesheet('playbutton', 'assetsphaser/playbutton.png', 193, 71);
            //this.game.load.spritesheet('highscoresbutton', 'assetsphaser/button_sprite_sheet.png', 193, 71);
            //this.game.load.spritesheet('helpbutton', 'assetsphaser/button_sprite_sheet.png', 193, 71);
            //this.game.load.spritesheet('quitbutton', 'assetsphaser/button_sprite_sheet.png', 193, 71);
            this.game.load.image('background', 'assets/Textures/Backgrounds/1-main.jpg');
        }
        create() {
            this.game.add.sprite(0, 0, 'background');
            var style = { font: "25px Impact", fill: "#ffffff", align: "center" };
            this.playbutton = this.game.add.button(540, 144, 'button', this.playClick, this);
            this.playbutton.anchor.set(0.5, 0.5);
            this.helpbutton = this.game.add.button(540, 288, 'button', this.helpClick, this);
            this.helpbutton.anchor.set(0.5, 0.5);
            this.txtPlay = this.game.add.text(this.playbutton.x, this.playbutton.y, "Play", style);
            this.txtPlay.anchor.set(0.5, 0.5);
            this.txtHelp = this.game.add.text(this.helpbutton.x, this.helpbutton.y, "Help", style);
            this.txtHelp.anchor.set(0.5, 0.5);
            //this.resumebutton = this.game.add.button(440, 72, 'resumebutton', this.resumeClick, this, 2, 1, 0);
            //this.highscoresbutton = this.game.add.button(440, 216, 'highscoresbutton', this.highscoreClick, this, 2, 1, 0);
            //this.quitbutton = this.game.add.button(440, 360, 'quitbutton', this.quitClick, this, 2, 1, 0);
        }
        resumeClick() {
        }
        playClick() {
            this.game.state.start('LevelSelectScreen');
        }
        highscoreClick() {
        }
        helpClick() {
            this.game.state.start('HelpScreen1');
            this.fx.play();
        }
        quitClick() {
        }
    }
    TypeScriptTD.MainMenuScreen = MainMenuScreen;
})(TypeScriptTD || (TypeScriptTD = {}));
//# sourceMappingURL=MainMenuScreen.js.map