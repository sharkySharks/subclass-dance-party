var SlowDancer = function (top, left, timeBetweenSteps) {

  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass("bob");

};

SlowDancer.prototype = Object.create(Dancer.prototype);

SlowDancer.prototype.constructor = SlowDancer;

SlowDancer.prototype.step = function(){
 
  Dancer.prototype.step.call(this);
  var slowDown = function() { this.$node.animate({top: "-=290", left: "+=15"}, 1200 ); };
  this.$node.animate({top: "+=200", left: "+=15" }, 800, slowDown.call(this) );

};