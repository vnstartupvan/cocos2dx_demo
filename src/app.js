/****************************************************************************
 Copyright (c) 2017-2018 Xiamen Yaji Software Co., Ltd.
 
 http://www.cocos2d-x.org
 
 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:
 
 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.
 
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/

var AppLayer = cc.Layer.extend({
  component: null,
  thanTai: null,
  fishGun: null,
  box1: null,
  box2: null,
  ctor: function () {
    this._super();

    var _size = cc.winSize;

    //title
    var _title = new cc.LabelTTF(
      "Cocos UI Components & Event & Animation",
      "Arial",
      38
    );
    _title.x = _size.width / 2;
    _title.y = _size.height - 40;

    //menu
    var _button = new MenuItemFont(
        "BUTTON",
        20,
        this.addComponent.bind(this, Components.button)
      ),
      _text = new MenuItemFont(
        "TEXT",
        20,
        this.addComponent.bind(this, Components.text)
      ),
      _imageView = new MenuItemFont(
        "IMAGE VIEW",
        20,
        this.addComponent.bind(this, Components.imageView)
      ),
      _checkBox = new MenuItemFont(
        "CHECKBOX",
        20,
        this.addComponent.bind(this, Components.checkBox)
      ),
      _layout = new MenuItemFont(
        "LAYOUT",
        20,
        this.addComponent.bind(this, Components.layout)
      ),
      _scrollView = new MenuItemFont(
        "SCROLL VIEW",
        20,
        this.addComponent.bind(this, Components.scrollView)
      ),
      _pageView = new MenuItemFont(
        "PAGE VIEW",
        20,
        this.addComponent.bind(this, Components.pageView)
      ),
      _animation = new MenuItemFont(
        "ANIMATION",
        20,

        this.addComponent.bind(this, Components.animation)
      );

    var _menu = new cc.Menu(
      _button,
      _text,
      _imageView,
      _checkBox,
      _layout,
      _scrollView,
      _pageView,
      _animation
    );

    var menuPostionY = _size.height - 100;
    _menu.setPositionY(menuPostionY);
    _menu.alignItemsHorizontallyWithPadding(20);

    //pageview ui
    var pageView = new ccui.PageView();
    pageView.setTouchEnabled(true);
    pageView.addPage(new ccui.Layout());

    //than thai animation
    this.thanTai = sp.SkeletonAnimation.createWithJsonFile(
      res.thantai_json,
      res.thantai_atlas
    );

    this.thanTai.attr({
      x: _size.width / 2,
      y: _size.height - 400,
    });

    this.thanTai.setAnchorPoint(cc.p(0.5, 0));
    this.thanTai.setAnimation(0, "animation", true);
    this.thanTai.setVisible(true);

    //test collision
    this.box1 = new cc.Sprite(res.animate1_png);
    this.box2 = new cc.Sprite(res.animate2_png);
    this.box1.attr({ x: 200, y: 100 });
    this.box2.attr({ x: 800, y: 100 });
    this.addChild(this.box1);
    this.addChild(this.box2);

    //fish gun
    this.fishGun = new FishGunSprite(_size);

    //scroll view
    var _scrollView = new ccui.ScrollView();

    _scrollView.setDirection(ccui.ScrollView.DIR_BOTH);
    _scrollView.setTouchEnabled(true);
    _scrollView.setBounceEnabled(true);
    _scrollView.setBackGroundImage(res.HelloWorld_png);
    _scrollView.setContentSize(cc.size(300, 200));
    _scrollView.setInnerContainerSize(cc.size(1280, 2500));
    _scrollView.setAnchorPoint(cc.p(0.5, 0));
    _scrollView.setPosition(cc.p(_size.width / 2, 10));

    for (var i = 0; i < 50; i++) {
      var button = new ccui.Button();
      button.setTouchEnabled(true);
      button.setPosition(cc.p(_scrollView.width / 2, i * 50 + 10));
      button.loadTextureNormal(res.playBtn_png);
      button.runAction(cc.scaleTo(0, 0.3));
      _scrollView.addChild(button);
    }

    //add child
    this.addChild(_title);
    this.addChild(_menu);
    this.addChild(pageView);
    this.addChild(this.thanTai, 4);
    this.addChild(this.fishGun);
    this.addChild(_scrollView);
  },
  onEnter: function () {
    this._super();
    globalFunc.playMusic(resAudio.AudioGame);

    cc.eventManager.addListener(
      {
        event: cc.EventListener.TOUCH_ONE_BY_ONE,
        swallowTouches: true, // true khong chuyen ra thang ngoai, false chuyen ra thang ngoai
        onTouchBegan: this.onTouchBegan,
        onTouchMoved: this.onTouchMoved,
        onTouchEnded: this.onTouchEnded,
      },
      this
    );
  },
  onTouchBegan: function (touch, event) {
    // return false -/> moved, true -> moved

    let _tp = touch.getLocation();
    let _target = event.getCurrentTarget();

    let collision = globalFunc.checkCollision(_tp, _target.box1);
    console.log(collision);
  },
  onTouchMoved: function (touch, event) {
    // return false -/> moved, true -> moved
    let _tp = touch.getLocation();
    let _target = event.getCurrentTarget();

    console.log(_target, _tp, "asdasdsa");
  },
  onTouchEnded: function () {},
  createButton: function () {
    var _button = new ccui.Button();
    _button.loadTextureNormal(res.oclock_png);
    _button.attr({
      x: cc.winSize.width / 2,
      y: 100,
    });

    return _button;
  },
  createText: function () {
    var _text = new ccui.Text("TEXTTTTTT");
    _text.attr({
      x: cc.winSize.width / 2,
      y: 100,
    });
    console.log(_text);
    return _text;
  },
  createImageView: function () {
    var _imageView = new ccui.ImageView();
    _imageView.loadTexture(res.animate3_png);
    _imageView.attr({
      x: cc.winSize.width / 2,
      y: 100,
    });

    return _imageView;
  },
  createCheckBox: function () {
    var _checkbox = new ccui.CheckBox();
    _checkbox.loadTextures(
      res.playBtn_png,
      res.pauseBtn_png,
      res.quitBtn_png,
      res.backBtn_png,
      ccui.Widget.PLIST_TEXTURE
    );
    _checkbox.setAnchorPoint(cc.p(0.5, 0.5));
    _checkbox.attr({
      x: cc.winSize.width / 2,
      y: 100,
    });

    return _checkbox;
  },
  createLayout: function () {
    var _layout = new ccui.Layout();
    _layout.setLayoutType(ccui.Layout.LINEAR_HORIZONTAL);
    _layout.sizeType = ccui.Widget.SIZE_PERCENT;
    _layout.setSizePercent(cc.p(0.25, 0.25));
    _layout.setPositionType(ccui.Widget.POSITION_PERCENT);
    _layout.setPositionPercent(cc.p(0.25, 0.25));
    _layout.setBackGroundColorType(ccui.Layout.BG_COLOR_SOLID);
    _layout.setBackGroundColor(cc.color.GRAY);

    return _layout;
  },
  createScrollView: function () {},
  createPageView: function () {
    //page
    var pageview = new ccui.PageView();
    pageview.setTouchEnabled(true);
    pageview.setContentSize(cc.size(240, 400));
    pageview.setAnchorPoint(cc.p(0.5, 0));
    pageview.attr({
      x: cc.winSize.width / 2,
      y: 0,
    });

    for (var i = 0; i < 10; i++) {
      //layout
      var layout = new ccui.Layout();

      //image
      var imageview = new ccui.ImageView();
      imageview.loadTexture(res.character3_jpg);
      imageview.setAnchorPoint(cc.p(0.5, 0));
      imageview.attr({
        x: pageview.width / 2,
        y: 0,
      });
      layout.addChild(imageview);

      //text
      var text = new ccui.Text();
      text.string = "Page" + i;
      text.font = "30px 'Marker Felt'";
      text.color = cc.color(192, 192, 192);
      text.x = pageview.width / 2;
      text.y = pageview.height - 40;
      layout.addChild(text);

      pageview.addPage(layout);
    }

    return pageview;
  },
  createAnimation: function (_imageURL, _plistURL) {
    var size = cc.winSize,
      _imageURL = res.flyCoint_png,
      _plistURL = res.flyCoint_plist,
      _spriteQty = 20,
      _frameInfo = {
        name: "thunder_img/fly_coin/sprite_",
        format: ".png",
      };

    var animSprite = new AnimateSprite(
      size,
      _imageURL,
      _plistURL,
      _spriteQty,
      _frameInfo
    );
    return animSprite;
  },
  addComponent: function (_component) {
    var component;
    switch (_component) {
      case Components.button:
        component = this.createButton();
        break;
      case Components.text:
        component = this.createText();
        break;
      case Components.imageView:
        component = this.createImageView();
        break;
      case Components.checkBox:
        component = this.createCheckBox();
        break;
      case Components.layout:
        component = this.createLayout();
        break;
      case Components.pageView:
        component = this.createPageView();
        break;
      case Components.animation:
        component = this.createAnimation();
        break;
      default:
        break;
    }

    // var removeSelfAction = new cc.RemoveSelf(false);
    //remove from parent
    // if (this.component) this.component.runAction(removeSelfAction);
    if (this.component) this.component.removeFromParent(true);

    this.component = component;
    this.addChild(this.component);

    //Init event
    this.eventHandler(this.box2);

    //run animate for animation component
    if (_component === Components.animation) this.component.runAnimation();
  },
  eventHandler: function (_target) {
    //create event
    var listener = cc.EventListener.create({
      event: cc.EventListener.TOUCH_ONE_BY_ONE,
      swallowTouches: true,
      onTouchBegan: function (touch, event) {
        // event.getCurrentTarget() returns the *listener's* sceneGraphPriority node.
        var target = event.getCurrentTarget();

        //Get the position of the current point relative to the button
        var locationInNode = target.convertToNodeSpace(touch.getLocation());
        var s = target.getContentSize();
        var rect = cc.rect(0, 0, s.width, s.height);

        //Check the click area
        if (cc.rectContainsPoint(rect, locationInNode)) {
          cc.log(
            "sprite began... x = " +
              locationInNode.x +
              ", y = " +
              locationInNode.y
          );
          target.opacity = 180;
          return true;
        }
        return false;
      },
      onTouchMoved: function (touch, event) {
        var target = event.getCurrentTarget();
        var delta = touch.getDelta();
        var collision = globalFunc.checkCollision(touch.getLocation(), _target);
        console.log(collision);

        target.x += delta.x;
        target.y += delta.y;
      },
      onTouchEnded: function (touch, event) {
        var target = event.getCurrentTarget();
        cc.log("sprite onTouchesEnded.. ");
        target.setOpacity(255);
      },
    });

    //listen event
    cc.eventManager.addListener(listener, this.component);
  },
});

var AppScene = cc.Scene.extend({
  onEnter: function () {
    this._super();

    var _layer = new AppLayer();
    this.addChild(_layer, zIndexLayer.Main);

    var _layerBackground = new BackgroundLayer(res.PikachuBG_png);
    this.addChild(_layerBackground, zIndexLayer.Saver);

    var _coinAnimateBg = new AnimateCoinLayer();
    this.addChild(_coinAnimateBg, 2);
  },
});
