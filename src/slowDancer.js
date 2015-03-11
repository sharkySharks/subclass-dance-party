var makeSlowDancer = function (top, left, timeBetweenSteps) {

  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass("bob");

};

makeSlowDancer.prototype = Object.create(makeDancer.prototype);

makeSlowDancer.prototype.constructor = makeSlowDancer;

makeSlowDancer.prototype.step = function(){
 
  makeDancer.prototype.step.call(this);
  var slowDown = function() { this.$node.animate({top: "-=290", left: "+=15"}, 1200 ); };
  this.$node.animate({top: "+=200", left: "+=15" }, 800, slowDown.call(this) );
  // this.$node.toggle();

  
};