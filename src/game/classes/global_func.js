var GlobalFunc = cc.Class.extend({
  ctor: function () {},
  runScene: function (_duration, _scene) {
    cc.director.runScene(new cc.TransitionFade(_duration, _scene));
  },
  pushScene: function (_duration, _scene) {
    cc.director.pushScene(new cc.TransitionFade(_duration, _scene));
  },
  playMusic: function (_res) {
    cc.audioEngine.playMusic(_res, true);
  },
  checkCollision: function (_touch, _obj) {
    var _boundingbox = _obj.getBoundingBox();
    var _checkCollision;

    if (cc.rectContainsPoint(_boundingbox, _touch)) {
      // cc.rectIntersectsRect(_rect, _boundingbox) rect with rect
      _checkCollision = true;
    } else _checkCollision = false;

    return _checkCollision;
  },
});

var globalFunc = new GlobalFunc();
