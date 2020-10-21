function bounceoff(){
    if (packageBody.x -helicopterSprite .x < helicopterSprite.width/2 + packageBody.width/2
        && helicopterSprite.x - packageBody.x < helicopterSprite.width/2 + packageBody.width/2) {
      packageBody.velocityX = packageBody.velocityX * (-1);
      helicopterSprite.velocityX = helicopterSprite.velocityX * (-1);
    }
    if (packageBody.y - helicopterSprite.y < helicopterSprite.height/2 + packageBody.height/2
      && helicopterSprite.y - packageBody.y < helicopterSprite.height/2 + packageBody.height/2){
      packageBody.velocityY = packageBody.velocityY * (-1);
      helicopterSprite.velocityY = helicopterSprite.velocityY * (-1);
    }
    }