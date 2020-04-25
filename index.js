var TypeScriptTD;
(function (TypeScriptTD) {
    var width = 800;
    var height = 480;
    class App extends Phaser.Game {
        constructor() {
            super(width, height, Phaser.AUTO, "TypeScript", null);
            this.state.add('MainMenuScreen', TypeScriptTD.MainMenuScreen, false);
            this.state.add('LevelSelectScreen', TypeScriptTD.LevelSelectScreen, false);
            this.state.add('GameScreen', TypeScriptTD.GameScreen, false);
            this.state.add('HelpScreen1', TypeScriptTD.HelpScreen1, false);
            this.state.add('HelpScreen2', TypeScriptTD.HelpScreen2, false);
            this.state.add('HelpScreen3', TypeScriptTD.HelpScreen3, false);
            this.state.add('HelpScreen4', TypeScriptTD.HelpScreen4, false);
            this.state.add('DefeatScreen', TypeScriptTD.DefeatScreen, false);
            this.state.add('VictoryScreen', TypeScriptTD.VictoryScreen, false);
            this.state.start('MainMenuScreen');
        }
    }
    TypeScriptTD.App = App;
})(TypeScriptTD || (TypeScriptTD = {}));
//# sourceMappingURL=index.js.map