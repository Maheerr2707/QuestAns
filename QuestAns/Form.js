class Form {

  constructor() {
    this.input = createInput("Name");
    this.question = createInput("Questions")
    this.answer1 = createInput("Answer1")
    this.answer2 = createInput("Answer2")
    this.answer3 = createInput("Answer3")
    this.answer4 = createInput("Answer4")
    this.correctAns = createInput("Correct Answer")
    this.button = createButton('Play');
    this.subQues = createButton("Submit")
    this.greeting = createElement('h2');
    this.title = createElement('h2');
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  show(){
    this.answer1.show();
    this.answer2.show();
    this.answer2.show();
    this.answer3.show();
    this.answer4.show();
    this.question.show();
    this.correctAns.show()
    this.subQues.show();
  }
  display(){
    this.title.html("Questions/Ans");
    this.title.position(displayWidth/2 - 50, 0);
    this.input.position(50,50);
    this.button.position(50,100)

 if(gameState === 0 || gameState ===2){
   this.answer1.hide();
   this.answer2.hide();
   this.answer2.hide();
   this.answer3.hide();
   this.answer4.hide();
   this.question.hide();
   this.correctAns.hide();
   this.subQues.hide();
   this.greeting.hide();
 }

if(gameState === 1){
  this.show()
}
    this.button.mousePressed(()=>{ 
      this.button.hide();
      this.input.hide();
      player.name = this.input.value();
      this.greeting.html("Hello " + this.input.value())
      this.greeting.position(200,200);
      this.displayQuestion();
      gameState = 1;  
    }); 
  }

  displayQuestion(){
    this.subQues.position(300,300)
    this.question.position(20,80);
    this.answer1.position(180,80);
    this.answer2.position(180,110);
    this.answer3.position(180,140);
    this.answer4.position(180,180);
    this.correctAns.position(25,20);

    this.subQues.mousePressed(()=>{ 
    console.log("subQues")

//if(this.validation()){
 //}

  gameState = 2;
  console.log("gameState"+ gameState);

  game.updateQuestion(this.question.value())
  game.updateAnswer1(this.answer1.value())
  game.updateAnswer2(this.answer2.value())
  game.updateAnswer3(this.answer3.value())
  game.updateAnswer4(this.answer4.value())
  game.updatecorrectAns(this.correctAns.value())

  form2.displayQNA();
    }); 
  }
  


validation(){
  if(this.answer1.value()===""){
    return true;
  }
}

}
