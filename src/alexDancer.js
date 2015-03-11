var makeAlexDancer = function (top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  // this.$node = $('<img src="alexhead.png" class="thirdDancer"></img>');
  this.$node.addClass("alexDancer");
};

makeAlexDancer.prototype = Object.create(makeDancer.prototype);

makeAlexDancer.prototype.constructor = makeAlexDancer;

makeAlexDancer.prototype.step = function(){
 
  makeDancer.prototype.step.call(this);
  var sideStep = function() { this.$node.animate({ left: "-=10"}, 500 ); };
// var tops = (Math.random()*20);
   var lefts = (Math.random()*500);
  var slowDown = function() { this.$node.animate({top: "-=200", left: "-=15"}, 1000, sideStep.call(this) ); };
  this.$node.animate({ top: "+=" + lefts, left: "+=15" }, 1200, slowDown.call(this) );
  // $('dancer').animate({ top: "+=45", left: "+=15" }, 1200
  // this.$node.toggle();
};