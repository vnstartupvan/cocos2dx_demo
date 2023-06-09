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

var res = {
  HelloWorld_png: "res/HelloWorld.png",
  animate1_png: "res/animate/animate1.png",
  animate2_png: "res/animate/animate1.png",
  animate3_png: "res/animate/animate1.png",
  animate4_png: "res/animate/animate1.png",
  animate5_png: "res/animate/animate1.png",
  animate6_png: "res/animate/animate1.png",
  PikachuBG_png: "res/background/pikachu.png",
  character1_png: "res/characters/character1.png",
  character2_jpg: "res/characters/character2.jpg",
  character3_jpg: "res/characters/character3.jpg",
  Pfs_reward_plist: "res/pfs_reward/pfs_reward.plist",
  Pfs_reward_png: "res/pfs_reward/pfs_reward.png",
  playBtn_png: "res/images/playBut.png",
  pauseBtn_png: "res/images/pauseBut.png",
  backBtn_png: "res/images/backBut.png",
  quitBtn_png: "res/images/quitBut.png",
  oclock_png: "res/images/oclock.png",
  flyCoint_plist: "res/sheet_fbf_coin/fly_coin.plist",
  flyCoint_png: "res/sheet_fbf_coin/fly_coin.png",
  thantai_atlas: "res/thantai/thantai.atlas",
  thantai_json: "res/thantai/thantai.json",
  gunFish_jpg: "res/images/fishgun.jpg",
};

// var resBMFont = {};

var resAudio = {
  AudioGame: "res/audios/music.ogg",
  ButtonClick_ogg: "res/audios/button_click.ogg",
  ChooseSpriteDot_ogg: "res/audios/choose_sprite_dot.ogg",
  ExplosionWithOutBomb_ogg: "res/audios/explosion_without_bomb.ogg",
  ExplosionWithBomb_ogg: "res/audios/explosion_with_bomb.ogg",
  End_ogg: "res/audios/end.ogg",
};

var g_resources = [];

for (var i in res) {
  g_resources.push(res[i]);
}

// for (var i in resBMFont) {
//   g_resources.push(resBMFont[i]);
// }

for (var i in resAudio) {
  g_resources.push(resAudio[i]);
}
