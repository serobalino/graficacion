var MenuLayer = cc.Layer.extend({
    init: function(){
        this._super();
		
		var backgroundLayer = cc.LayerColor.create(new cc.Color(100, 100, 250, 255),480,320);
        this.addChild(backgroundLayer);
		
        var winsize = cc.director.getWinSize();
        var centerpos = cc.p(winsize.width / 2, winsize.height / 2);
		
		var logo = new cc.Sprite(res.logo_png);
		logo.setScale(0.8);
		logo.setPosition(winsize.width / 2, winsize.height/2 + 35 );
		this.addChild(logo);
        //start button
        var startMenu= new cc.MenuItemSprite(
            new cc.Sprite(res.start_n_png), // normal state image
            new cc.Sprite(res.start_s_png), //select state image
        this.onPlay, this);
        var start = new cc.Menu(startMenu);
		start.setScale(0.5);
        this.addChild(start);

        start.setPosition(winsize.height/2 - 25,  -15);
    },

    onPlay: function(){
        console.log("Start Clicked!");
        cc.director.runScene(new gameScene());
    }
})
var MenuScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new MenuLayer();
        layer.init();
        this.addChild(layer);
    }
});
