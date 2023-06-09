var DemoScene = cc.Scene.extend({
    onEnter: function () {
      this._super();
  
      var _layer = new DemoLayer();
      this.addChild(_layer, zIndexLayer.Main);
    },
  });
  