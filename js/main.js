webpackJsonp([2,3],{

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var GameScreen = TypeScriptTD.GameScreen;
/** Imports */
// Import global dependencies. (I remind you, webpack create separate chunk file for them).
__webpack_require__(1); // Because Phaser use PIXI and p2 as global variables, they must be imported first.
__webpack_require__(3);
__webpack_require__(2); // So, in my case, TypeScript breaks if i import it as `import 'phaser';`. ¯\_(ツ)_/¯
__webpack_require__(4); // Registering styles for the page; They will automatically inject.
var DefeatScreen = TypeScriptTD.DefeatScreen;
var VictoryScreen = TypeScriptTD.VictoryScreen;
var LevelSelectScreen = TypeScriptTD.LevelSelectScreen;
var MainMenuScreen = TypeScriptTD.MainMenuScreen;
var HelpScreen2 = TypeScriptTD.HelpScreen2;
var HelpScreen1 = TypeScriptTD.HelpScreen1;
var HelpScreen4 = TypeScriptTD.HelpScreen4;
var HelpScreen3 = TypeScriptTD.HelpScreen3;
// The main class of our application
var App = (function (_super) {
    __extends(App, _super);
    function App(config) {
        var _this = _super.call(this, config) || this;
        _this.state.add('MainMenuScreen', MainMenuScreen, false);
        _this.state.add('LevelSelectScreen', LevelSelectScreen, false);
        _this.state.add('GameScreen', GameScreen, false);
        _this.state.add('HelpScreen1', HelpScreen1, false);
        _this.state.add('HelpScreen2', HelpScreen2, false);
        _this.state.add('HelpScreen3', HelpScreen3, false);
        _this.state.add('HelpScreen4', HelpScreen4, false);
        _this.state.add('DefeatScreen', DefeatScreen, false);
        _this.state.add('VictoryScreen', VictoryScreen, false);
        return _this;
        // this.state.start('MainMenuScreen');
        // this.state.add('boot', BootState);
        // this.state.add('preloader', PreloaderState);
        // this.state.add('main', MainState); // Add `main` state into game
        //
        // this.state.start('boot'); // Initialize and start `boot` state
    }
    return App;
}(Phaser.Game));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = App;
// Like python's `__name__ == "__main__"` checks whether the module is part
// of another program or it is executable.
if (!module.parent) {
    window.onload = function () {
        var config = {
            width: 800,
            height: 600,
            renderer: Phaser.AUTO,
            parent: '',
            resolution: 1,
            forceSetTimeOut: false // tell Phaser to use `setTimeOut` even if `requestAnimationFrame` is available.
        };
        new App(config); // Initialize the application. It will automatically inject <canvas /> into <body />
    };
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)(module)))

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[15]);
//# sourceMappingURL=main.js.map