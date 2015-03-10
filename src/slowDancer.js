var makeSlowDancer = function (top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
};

makeSlowDancer.prototype = Object.create(makeDancer.prototype);

makeSlowDancer.prototype.constructor = makeSlowDancer;

makeSlowDancer.prototype.step = function(){
 
  makeDancer.prototype.step.call(this);
  var slowDown = function() { this.$node.animate({top: "-=290", left: "+=15"}, 2600 ); };
  this.$node.animate({ top: "+=300", left: "+=15" }, 3000, slowDown.call(this) );
  // this.$node.toggle();
};