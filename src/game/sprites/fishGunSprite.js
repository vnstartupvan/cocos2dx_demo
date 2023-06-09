var FishGunSprite = cc.Sprite.extend({
  bullet: null,
  screenSize: null,
  count: 0,
  timerId: null,
  audio_engine: null,
  EFFECT_FILE: null,
  ctor: function (_screenSize) {
    this._super();

    //init sprite
    this.initWithFile(res.gunFish_jpg);
    this.screenSize = _screenSize;

    //set attr
    this.attr({
      x: 0,
      y: _screenSize.height / 2,
    });

    var scale = cc.scaleTo(0, 0.1);

    this.setAnchorPoint(0, 0.5);
    
    //run action
    this.runAction(scale);

    var fireTime = 1000;
    this.timerID = setInterval(this.fire.bind(this, fireTime), 1000);
    this.fire();
  },
  onEnter: function () {
    this._super();

    cc.eventManager.addListener(
      {
        event: cc.EventListener.TOUCH_ONE_BY_ONE,
        swallowTouches: true, // true khong chuyen ra thang ngoai, false chuyen ra thang ngoai
        onTouchBegan: this.onTouchBegan,
      },
      this
    );
  },
  onTouchBegan: function (touch, event) {
    // return false -/> moved, true -> moved
    let _tp = touch.getLocation();
    let _target = event.getCurrentTarget();

    _target.fire();
  },
  fire: function (fireTimes) {
    //watcher fire event
    this.count += 1;
    if (this.count >= fireTimes) clearInterval(this.timerID);

    //create bullet
    this.bullet = this.createBullet();
    this.addChild(this.bullet);
    var action = cc.scaleTo(0, 2);

    //fire
    this.bullet.runAction(action);
    this.bullet.runAnimation(2, 20000, cc.winSize.height / 2);

    //remove bullet after fired
    var delayTime = 2000;
    this.cleanUp(this.bullet, delayTime);
  },
  cleanUp: function (_sprite, _delayTime) {
    this.bullet = null;

    setTimeout(function () {
      _sprite.removeFromParent(true);
    }, _delayTime);
  },
  createBullet: function () {
    var _imageURL = res.flyCoint_png,
      _plistURL = res.flyCoint_plist,
      _spriteQty = 20,
      _frameInfo = {
        name: "thunder_img/fly_coin/sprite_",
        format: ".png",
      };

    var _bullet = new CoinAnimateSprite(
      this.screenSize,
      _imageURL,
      _plistURL,
      _spriteQty,
      _frameInfo
    );

    return _bullet;
  },
});
