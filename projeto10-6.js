var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["2508b6a4-e6b9-4005-8862-90524f6b7322","8dadafd4-eeba-4929-91a8-bb615efa490f"],"propsByKey":{"2508b6a4-e6b9-4005-8862-90524f6b7322":{"name":"diamond_1","sourceUrl":"assets/api/v1/animation-library/gamelab/RIDiuf2PVUAzqFMR4oK5dkuIKcWIK8TS/category_icons/diamond.png","frameSize":{"x":391,"y":358},"frameCount":1,"looping":true,"frameDelay":2,"version":"RIDiuf2PVUAzqFMR4oK5dkuIKcWIK8TS","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":391,"y":358},"rootRelativePath":"assets/api/v1/animation-library/gamelab/RIDiuf2PVUAzqFMR4oK5dkuIKcWIK8TS/category_icons/diamond.png"},"8dadafd4-eeba-4929-91a8-bb615efa490f":{"name":"halloweenemoji_03_1","sourceUrl":null,"frameSize":{"x":314,"y":314},"frameCount":1,"looping":true,"frameDelay":12,"version":"R3phLe.wc21YUbvYa2cp2Xl1qYH7HTpm","categories":["emoji"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":314,"y":314},"rootRelativePath":"assets/8dadafd4-eeba-4929-91a8-bb615efa490f.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var ladrao 
var diamante
var laser1
var laser2
ladrao = createSprite(36,362,28,27)
diamante = createSprite(376,28,25,27)
diamante.setAnimation("diamond_1")
diamante.scale= 0.1
ladrao.setAnimation("halloweenemoji_03_1")
ladrao.scale= 0.2
shape(390,0,380,10,390,20,400,10);
laser1 = createSprite(100,0,200,5)
laser2= createSprite(300,400,200,5)
diamante.shapeColor= "cyan"
laser1.shapeColor= "red"
laser2.shapeColor= "red"
laser1.velocityY= -2
laser2.velocityY= 2
function draw() {
 background("silver")
 createEdgeSprites()
 ladrao.bounceOff(edges)
 laser1.bounceOff(edges)
 laser2.bounceOff(edges)
if (keyDown(RIGHT_ARROW)){
  ladrao.velocityX = 2;
  ladrao.velocityY= 0;
}
if (keyDown(LEFT_ARROW)){
  ladrao.velocityX = -2;
  ladrao.velocityY= 0;
}
if (keyDown(UP_ARROW)){
  ladrao.velocityX = 0;
  ladrao.velocityY= -2;
}
if (keyDown(DOWN_ARROW)){
  ladrao.velocityX = 0;
  ladrao.velocityY= 2;
}
//keyup
if (keyWentUp(RIGHT_ARROW)){
  ladrao.velocityX = 0;
  ladrao.velocityY= 0;
}
if (keyWentUp(LEFT_ARROW)){
  ladrao.velocityX = 0;
  ladrao.velocityY= 0;
}
if (keyWentUp(UP_ARROW)){
  ladrao.velocityX = 0;
  ladrao.velocityY= 0;
}
if (keyWentUp(DOWN_ARROW)){
  ladrao.velocityX = 0;
  ladrao.velocityY= 0;
}
//game over
if (laser1.isTouching(ladrao)||laser2.isTouching(ladrao)){
  stroke("red")
  fill("red")
  textSize(24);
  text("Ladrao capturado",120,200)
  laser1.setVelocity(0,0)
  laser2.setVelocity(0,0)
  ladrao.setVelocity(0,0)
}
if(ladrao.isTouching(diamante)){
  stroke("green")
  fill("green")
  textSize(24);
  text("Voce ganhou",120,200)
  laser1.setVelocity(0,0)
  laser2.setVelocity(0,0)
  ladrao.setVelocity(0,0)
}
 drawSprites()
}
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
