var BackgroundLayer = cc.Layer.extend({
  ctor: function (_resBackground) {
    this._super();

    var _size = cc.winSize;
    var _bg = new BackgroundSprite(_size, _resBackground);

    this.addChild(_bg);
  },
});
