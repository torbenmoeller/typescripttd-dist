var TypeScriptTD;
(function (TypeScriptTD) {
    class SmartWeapon {
        constructor() {
            this._sinceLastShot = 0;
            this._projectiles = new Array();
        }
        CanFire() {
            return this._sinceLastShot >= this.TowerData.ReloadTimeMs;
        }
        TargetAndFire(enemies, towerPos, gridCellSize, session) {
            var closest = null;
            var distSq = 2147483647;
            var maxRange = gridCellSize * this.TowerData.MaxRange;
            var minRange = gridCellSize * this.TowerData.MinRange;
            maxRange *= maxRange;
            minRange *= minRange;
            for (var enemyInstance in enemies) {
                if ((this.TowerData.CanShootFlying && enemies[enemyInstance].Data.CanFly) || (this.TowerData.CanShootLand && !enemies[enemyInstance].Data.CanFly)) {
                    var d = (enemies[enemyInstance].Position.subtract(towerPos)).getLengthSquared();
                    if (d < distSq && d <= maxRange && d >= minRange) {
                        closest = enemies[enemyInstance];
                        distSq = d;
                    }
                }
            }
            if (closest != null) {
                var item = new TypeScriptTD.SmartAmmo();
                item.Position = towerPos;
                item.Speed = this.TowerData.ShotSpeed * gridCellSize;
                item.Target = closest;
                item.ShotTexture = this.ShotTexture;
                //if (this.TowerData.HitTexture != null && item.HitAnimation == null) {
                //	item.HitAnimation = new AnimatedSprite(new Point((int)(TowerData.HitTexture.Width / TowerData.AnimationFps), TowerData.HitTexture.Height), false);
                //	item.HitAnimation.SetTexture(TowerData.HitTexture);
                //}
                this._projectiles.push(item);
                this._sinceLastShot = 0;
                return true;
            }
            return false;
        }
        Update(elapsedTime, session) {
            this._sinceLastShot += elapsedTime * 1000;
            for (var i = this._projectiles.length - 1; i >= 0; i--) {
                this._projectiles[i].Update(elapsedTime, this.TowerData, session);
                //Draw
                this._projectiles[i].draw(session);
                if (!this._projectiles[i].IsAlive) {
                    this._projectiles[i].sprite.parent.removeChild(this._projectiles[i].sprite);
                    this._projectiles.splice(i, 1);
                }
            }
        }
    }
    TypeScriptTD.SmartWeapon = SmartWeapon;
})(TypeScriptTD || (TypeScriptTD = {}));
//# sourceMappingURL=SmartWeapon.js.map