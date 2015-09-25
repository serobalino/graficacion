//Our player weapon will be a shuriken,
//with gravity?

Shuriken = cc.Sprite.extend({
    velocity: null,
    timer: 0,
    maxSpeed: 10.0,
	spritePosition:null,
	touchPosition:null,

    ctor: function(position, location){
        this._super();
        Shuriken.active++;
		this.spritePosition = position;
		this.touchPosition = location;
        this.initWithFile(res.shuriken_png);
        this.setPosition(position.x, position.y);
        this.init(location);
		
		var spin = cc.Animation
    },

    init: function(location){
        var direction = cc.pSub(location, this.getPosition());
        var length = Math.sqrt(direction.x * direction.x + direction.y * direction.y);
        this.maxSpeed = Math.sqrt(((this.spritePosition.x - this.touchPosition.x)*(this.spritePosition.x - this.touchPosition.x))+((this.spritePosition.y - this.touchPosition.y)*(this.spritePosition.y - this.touchPosition.y)))/15;
		console.log(this.maxSpeed);
		
		this.velocity = cc.p(direction.x/length * this.maxSpeed, direction.y/length * this.maxSpeed);
		var rotate = cc.RepeatForever.create(cc.RotateBy.create(1, 360));
		this.runAction(rotate);
        this.scheduleUpdate();
    },

    checkForRemoval: function(){
        var remove = this.getPositionY() < 0;
        var player = this.getParent().getChildByTag(TagOfMap.player);
		var player2 = this.getParent().getChildByTag(TagOfMap.player2);

        //Hit by Shuriken after 1s, died
        if(cc.rectIntersectsRect(this.getBoundingBox(), player.collisionBoundingBox()) && this.timer>0.25)
            this.getParent().getParent().player1hitted();
		if(cc.rectIntersectsRect(this.getBoundingBox(), player2.collisionBoundingBox()) && this.timer>0.25)
            this.getParent().getParent().player2hitted();


        if(remove){
            this.getParent().removeChild(this);
            Shuriken.active--;
        }
    },

    getPosition: function(){
        return cc.p(this.getPositionX(), this.getPositionY());
    },

    update: function(dt){
        this.timer+=dt;
        var gravity = cc.p(0.0, -0.35);
        this.velocity = cc.pAdd(this.velocity, gravity);

        var minVelocity = cc.p(-10, -10);
        var maxVelocity = cc.p(25, 25);
        this.velocity = cc.pClamp(this.velocity, minVelocity, maxVelocity);

        this.setPosition(cc.pAdd(this.getPosition(), this.velocity));
        this.checkForRemoval();
    }
});

Shuriken.active = 0;