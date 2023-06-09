var DemoLayer = cc.Layer.extend({
  ctor: function () {
    this._super();

    var size = cc.winSize;

    //ui button
    var _button = new ccui.Button();
    _button.loadTextures(res.playBtn_png);
    _button.attr({
      x: size.width / 2,
      y: 100,
    });

    //add child
    this.addChild(_button)
  },
});
