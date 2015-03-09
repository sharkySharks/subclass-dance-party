var makeSlowDancer = function (top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
};

makeSlowDancer.prototype = Object.create(makeDancer.prototype);

makeSlowDancer.prototype.constructor = makeSlowDancer;

makeBlinkyDancer.prototype.step = function(){
 
  makeDancer.prototype.step.call(this);

  this.$node.css.animate({top: "+=100", left: "+=75"}, 3000);
  // this.$node.toggle();
};
