var AnimateCoinLayer = cc.Layer.extend({
  coin1: null,
  coin2: null,
  coin3: null,
  coin4: null,
  ctor: function () {
    this._super();

    var size = cc.winSize;

    var _imageURL = res.flyCoint_png,
      _plistURL = res.flyCoint_plist,
      _spriteQty = 20,
      _frameInfo = {
        name: "thunder_img/fly_coin/sprite_",
        format: ".png",
      };

    //coin 1
    this.coin1 = new CoinAnimateSprite(
      size,
      _imageURL,
      _plistURL,
      _spriteQty,
      _frameInfo
    );

    //coin 2
    this.coin2 = new CoinAnimateSprite(
      size,
      _imageURL,
      _plistURL,
      _spriteQty,
      _frameInfo
    );

    //coin 3
    this.coin3 = new CoinAnimateSprite(
      size,
      _imageURL,
      _plistURL,
      _spriteQty,
      _frameInfo
    );

    //coin 4
    this.coin4 = new CoinAnimateSprite(
      size,
      _imageURL,
      _plistURL,
      _spriteQty,
      _frameInfo
    );

    //direction
    var topLeft = {
        d: 2,
        x: 50,
        y: size.height - 200,
      },
      topRight = {
        d: 2,
        x: size.width - 50,
        y: size.height - 200,
      },
      bottomRight = {
        d: 2,
        x: size.width - 50,
        y: 50,
      },
      bottomLeft = {
        d: 2,
        x: 50,
        y: 50,
      };

    //add child
    this.addChild(this.coin1);
    this.addChild(this.coin2);
    this.addChild(this.coin3);
    this.addChild(this.coin4);

    //run action
    this.coin1.runAnimation(topLeft.d, topLeft.x, topLeft.y);
    this.coin2.runAnimation(topRight.d, topRight.x, topRight.y);
    this.coin3.runAnimation(bottomRight.d, bottomRight.x, bottomRight.y);
    this.coin4.runAnimation(bottomLeft.d, bottomLeft.x, bottomLeft.y);
  },
});
