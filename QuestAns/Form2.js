class Form2 {
    constructor(){
        this.question = "Questions"
        this.answer1 = "Answer1"
        this.answer2 = "Answer2"
        this.answer3 = "Answer3"
        this.answer4 = "Answer4"
        this.subAns2 = "submit"
        this.oppAns = "Type The Correct Answer"
    }
   
displayQNA(){
    this.getquestions();
    this.getanswer1();
    this.getanswer2();
    this.getanswer3();
    this.getanswer4();
    this.subAns2();
}

   getquestions(){
    console.log("getquestion")  
    database.ref('question').on("value",(data)=>{
        this.question = data.val()
           text(this.question,200,100) 
    })
   }

   getanswer1(){
    database.ref('answer1').on("value",(data)=>{
        this.answer1 = data.val()
           text(this.answer1,100,140) 
    })
   }

   getanswer2(){
    database.ref('answer2').on("value",(data)=>{
        this.answer2 = data.val()
           text(this.answer2,100,190) 
    })
   }
   
   getanswer3(){
    database.ref('answer3').on("value",(data)=>{
        this.answer3 = data.val()
           text(this.answer3,100,240) 
    })
   }

   getanswer4(){
    database.ref('answer4').on("value",(data)=>{
        this.answer4 = data.val()
           text(this.answer4,100,290) 
    })
   }

   getcorrectAns(){
    database.ref('CorrectAnswer').on("value",(data)=>{
        this.CorrectAnswer = data.val()
           text(this.CorrectAnswer,200,350) 
    })
   }
}