var ThirdDancer = function (top, left, timeBetweenSteps){
	Dancer.call(this, top, left, timeBetweenSteps);
	this.$node.addClass("robinDancer");

};

ThirdDancer.prototype = Object.create(Dancer.prototype);

ThirdDancer.prototype.constructor = ThirdDancer;

ThirdDancer.prototype.step = function(){
	Dancer.prototype.step.call(this);

	//var shakeIt = function() 
	// this.$node.effect("shake", {times:4}, 1000);
	//this.$node.effect("shake", 3000, shakeIt.call(this) );
   var flatten = function() { this.$node.animate({ top: "+=" + tops, right: "-=100", width: "+=40%", height: "-=20%" }, 800 ); };
   var tops = (Math.random()*20);
   var lefts = (Math.random()*200);
  this.$node.animate({ right: "+=200" , width: "-=40%", height: "+=20%" }, 1000, flatten.call(this) );
	
};