class Game {
  constructor(){
  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  updateQuestion(question){
    database.ref('/').update({
   question : question
    });
  }

  updateAnswer1(answer1){
    database.ref('/').update({
      answer1:answer1
    }); 
  }
    updateAnswer2(answer2){
      database.ref('/').update({
        answer2:answer2
      });  
    }
      updateAnswer3(answer3){
        database.ref('/').update({
          answer3:answer3
        });         
      }
      updateAnswer4(answer4){
        database.ref('/').update({
          answer4:answer4
        });   
      }
    updatecorrectAns(correctAns){
      database.ref('/').update({
        correctAns : correctAns
      })  
    }     
}  