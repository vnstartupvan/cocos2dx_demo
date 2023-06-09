/**
 * @class
 * @extends cc.MenuItem
 * @param {String} _text
 * @param  {Number} _fontSize
 * @param  {Function} _cb
 */

var MenuItemFont = cc.MenuItemFont.extend({
  ctor: function (_text, _fontSize, _cb) {
    this._super();

    if (_cb) {
      this.initWithString(_text, _cb);
    } else {
      this.initWithString(_text);
    }

    this.setFontSize(_fontSize);
  },
});
