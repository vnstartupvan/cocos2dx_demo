/**
 * @param {cc.winSize} _sizeScene
 * @param {string} _imageURL
 * @param {string} _plistURL
 * @param {string} _spriteQty
 * @param {object {name: "string", format: "string"}} _frameInfo
 */
var CoinAnimateSprite = cc.Sprite.extend({
  pngUrl: null,
  plistURl: null,
  spriteQty: null,
  frameInfo: null,
  ctor: function (_sizeScene, _pngURL, _plistURL, _spriteQty, _frameInfo) {
    this._super();

    //init
    this.pngUrl = _pngURL;
    this.plistURl = _plistURL;
    this.spriteQty = _spriteQty;
    this.frameInfo = _frameInfo;

    this.initWithFile(_pngURL);

    //add attr and position
    this.attr({
      x: _sizeScene.width / 3,
      y: _sizeScene.height / 3,
      scale: 0.5,
      rotation: 0,
    });
    //add child
  },
  createAnimFrames: function () {
    var size = cc.winSize;

    //load sprite frame cache & texture
    cc.spriteFrameCache.addSpriteFrames(this.plistURl);
    cc.textureCache.addImage(this.pngUrl);

    //create animation frames
    var animFrames = [];

    for (var i = 0; i < this.spriteQty; i++) {
      var path = this.frameInfo.name + i + this.frameInfo.format;
      var spriteFrame = cc.spriteFrameCache.getSpriteFrame(path);
      var animFrame = new cc.AnimationFrame();
      animFrame.initWithSpriteFrame(spriteFrame, 1, null);
      animFrames.push(animFrame);
    }
    return animFrames;
  },
  gunCoinFire: function (d, x, y) {
    var startPostion = cc.moveTo(
        d,
        cc.p(cc.winSize.width / 2, cc.winSize.height / 2)
      ),
      destination = cc.moveTo(d, cc.p(x, y));

    return cc.sequence([destination, startPostion]);
  },
  runAnimation: function (d, x, y) {
    //create animation frames
    var animFrames = this.createAnimFrames();
    //create animation
    var animation = cc.Animation.create(animFrames, 0.05, 100);
    var animate = cc.repeatForever(cc.Animate.create(animation));

    this.attr({
      x: cc.winSize.width / 2,
      y: cc.winSize.height / 2,
    });

    var direction = this.gunCoinFire(d, x, y);
    var moveAction = cc.repeatForever(direction);

    //run
    this.runAction(moveAction);
    this.runAction(animate);
  },
});
