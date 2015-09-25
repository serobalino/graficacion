//Our player will be a ninja!
var Player = cc.Sprite.extend({
    velocity: null,
    desiredPosition: null,
    onGround: null,
    forwardMarch: false,
    backwardMarch: false,
	mightAsWellJump: false,
	round: true,

    ctor: function(){
        this._super();
        this.initWithFile(res.mummy_png);
        this.setScale(0.07); //The File is too big, will be rescale in the future
        this.init();
		
    },

    init: function(){
        this.velocity = cc.p(0,0);
		this.round = true;
		
    },

    getPosition: function(){
        return cc.p(this.getPositionX(), this.getPositionY());
    },
	setRound: function(status){
        this.round = status;
		if(status == false)
		{
			this.mightAsWellJump = false;
			this.backwardMarch = false;
			this.forwardMarch = false;
		}
    },

    collisionBoundingBox: function(){
        var collisionBox = this.getBoundingBox();
        collisionBox = cc.rect(collisionBox.x, collisionBox.y, collisionBox.width, collisionBox.height);
        var diff = cc.pSub(this.desiredPosition, this.getPosition());
        var returnBoundingBox = cc.rect(collisionBox.x + diff.x, collisionBox.y + diff.y, collisionBox.width, collisionBox.height);
        return returnBoundingBox;
    },

    update: function(dt){
        //Set the gravity for player
        var gravity = cc.p(0.0,-1.5);
        var forwardMove = cc.p(2.0, 0.0);
		var backwardMove = cc.p(-2.0, 0.0);

        this.velocity = cc.pAdd(this.velocity, gravity);
        this.velocity = cc.p(this.velocity.x*0.5, this.velocity.y);

        var jumpForce = cc.p(0.0, 15.0)
        if(this.mightAsWellJump && this.onGround){
            this.velocity = cc.pAdd(this.velocity, jumpForce);
        }

        if(this.forwardMarch){
            this.velocity = cc.pAdd(this.velocity, forwardMove);
        }
		if(this.backwardMarch){
            this.velocity = cc.pAdd(this.velocity, backwardMove);
        }

        var minMovement = cc.p(-50.0, -50.0);
        var maxMovement = cc.p(50.0, 50.0);
        this.velocity = cc.pClamp(this.velocity, minMovement, maxMovement);

        this.desiredPosition = cc.pAdd(this.getPosition(), this.velocity);
    }
});