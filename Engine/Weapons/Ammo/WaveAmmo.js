var TypeScriptTD;
(function (TypeScriptTD) {
    class WaveAmmo {
        constructor() {
            this.CurrentRadius = 0;
            this.sprite = null;
            this.IsAlive = true;
            this.originalWidth = 0;
        }
        Update(elapsedTime, data, session) {
            this.CurrentRadius += this.Speed * elapsedTime;
            if (this.CurrentRadius >= this.MaxRadius) {
                this.IsAlive = false;
                this.sprite.parent.removeChild(this.sprite);
            }
            var rsq = this.CurrentRadius * this.CurrentRadius;
            for (var enemyInstance in session.Enemies) {
                if ((session.Enemies[enemyInstance].Position.subtract(this.Epicenter)).getLengthSquared() <= rsq && ((session.Enemies[enemyInstance].Data.CanFly && data.CanShootFlying) || (!session.Enemies[enemyInstance].Data.CanFly && data.CanShootLand))) {
                    session.Enemies[enemyInstance].TakeDamage(data.Id, data.Damage * elapsedTime);
                }
            }
        }
        draw(session) {
            if (!this.sprite) {
                this.sprite = session.game.add.sprite(this.Epicenter.x + (session.Grid.cellSize / 2), this.Epicenter.y + (session.Grid.cellSize / 2), this.ShotTexture);
                this.originalWidth = this.sprite.width;
                this.sprite.anchor.set(0.5, 0.5);
            }
            var scale = this.CurrentRadius / this.originalWidth;
            this.sprite.scale.set(scale, scale);
        }
    }
    TypeScriptTD.WaveAmmo = WaveAmmo;
})(TypeScriptTD || (TypeScriptTD = {}));
//# sourceMappingURL=WaveAmmo.js.map