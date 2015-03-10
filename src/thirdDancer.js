var makeThirdDancer = function (top, left, timeBetweenSteps){
	makeDancer.call(this, top, left, timeBetweenSteps);
	this.$node = $('<span class="thirdDancer dancer"></span>');
};

makeThirdDancer.prototype = Object.create(makeDancer.prototype);

makeThirdDancer.prototype.constructor = makeThirdDancer;

makeThirdDancer.prototype.step = function(){
	makeDancer.prototype.step.call(this);

	//var shakeIt = function() 
	// this.$node.effect("shake", {times:4}, 1000);
	//this.$node.effect("shake", 3000, shakeIt.call(this) );
	  var flatten = function() { this.$node.animate({ top: "+=" +  tops, left: "-="+ lefts - 200, width: "+=50px" }, 800 ); };
   var tops = (Math.random()*2000);
   var lefts = (Math.random()*1000);
  this.$node.animate({ top: "-=" + tops, left: "+=" + lefts, width: "-=50px" }, 1000, flatten.call(this) );
	
};