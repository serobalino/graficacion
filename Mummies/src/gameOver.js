var player1WinScene = cc.Scene.extend({
    onEnter: function(){
        this._super();
        var gameOverLayer = new player1();
        gameOverLayer.init();
        this.addChild(gameOverLayer);
    }
});

var player1 = cc.Layer.extend({
    init: function(message){
        this._super();
		
		var backgroundLayer = cc.LayerColor.create(new cc.Color(100, 100, 250, 255),480,320);
        this.addChild(backgroundLayer);
		
        var winsize = cc.director.getWinSize();
        var label = new cc.LabelTTF("Player 1 Wins!", "Lobster", 40);
        label.setColor(new cc.Color(46,242,16));
        label.setPosition(winsize.width/2, winsize.height/2 + 50);
	
        this.addChild(label);
        setTimeout(function(){
            cc.director.runScene(new menuScene());
        }, 4000);
		
		var winsize = cc.director.getWinSize();
        var centerpos = cc.p(winsize.width / 2, winsize.height / 2 - 50);

        //start button
        var startMenu= new cc.MenuItemSprite(
            new cc.Sprite(res.start_n_png), // normal state image
            new cc.Sprite(res.start_s_png), //select state image
        this.onPlay, this);
        var start = new cc.Menu(startMenu);
        this.addChild(start);

        start.setPosition(centerpos);
    },

    onPlay: function(){
        console.log("Start Clicked!");
		player1lives = 10;
		player2lives = 10;
        cc.director.runScene(new gameScene());
    }
});

var player2WinScene = cc.Scene.extend({
    onEnter: function(){
        this._super();
        var winLayer = new player2();
        winLayer.init();
        this.addChild(winLayer);
    }
});

var player2 = cc.Layer.extend({
    init: function(message){
        this._super();

        var winsize = cc.director.getWinSize();
        var label = new cc.LabelTTF("Player 2 Wins!", "Lobster", 40);
        label.setColor(new cc.Color(46,242,16));
        label.setPosition(winsize.width/2, winsize.height/2 + 50);

        this.addChild(label);
        setTimeout(function(){
            cc.director.runScene(new menuScene());
        }, 4000);
		
		var winsize = cc.director.getWinSize();
        var centerpos = cc.p(winsize.width / 2, winsize.height / 2 - 50);

        //start button
        var startMenu= new cc.MenuItemSprite(
            new cc.Sprite(res.start_n_png), // normal state image
            new cc.Sprite(res.start_s_png), //select state image
        this.onPlay, this);
        var start = new cc.Menu(startMenu);
        this.addChild(start);

        start.setPosition(centerpos);
    },

    onPlay: function(){
        console.log("Start Clicked!");
		player1lives = 10;
		player2lives = 10;
        cc.director.runScene(new gameScene());
    }
	
});