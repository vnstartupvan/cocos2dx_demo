var BackgroundSprite = cc.Sprite.extend({
  ctor: function (_sizeScene, resBackGround) {
    this._super();
    this.initWithFile(resBackGround);

    this.setAnchorPoint(cc.p(0.5, 0.5));

    this.attr({
      x: _sizeScene.width / 2,
      y: _sizeScene.height / 2,
    });

    // const _sizeWidthScale =
    //   _sizeScene.width < designSize.Width
    //     ? 1
    //     : _sizeScene.width / designSize.Width;

    // this.setScale(_sizeWidthScale);
  },
});
