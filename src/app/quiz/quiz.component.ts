import { Component, OnInit } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';
import { loginUser, User } from '../user';
import { NewUser } from '../user';
import { UserService } from '../user.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent { 
  existingUser: User;
  loggedIn: boolean = false;
  currentUser: string = 'Please Log In';
  navLinks: any[];
  activeLinkIndex = -1;
  i: number = 0;
  values = ['a', 'b', 'c', 'd'];
  answers = [["a. Action", "b. Drama", "c. Comedy", "d. I have way better things to do! "],
["a. I am a foodie. I love trying new restaurants", "b. I like it, it can be enjoyable", "c. I do it sometimes, but I prefer to cook at home", "d. I do not go to restaurants"],
["a. Yes, they are hilarious!", "b. A little bit", "c.  No, they are not funny", "d. No, I run away, clowns are terrifying!"],
["a. I feel deeply moved", "b. I enjoy the experience", "c. I am indifferent", "d. I don’t understand why anyone wants to look at art"],
["a. When? I have all my camping gear in the back of my truck!", "b. A hike sounds amazing", "c. I could be talked into it", "d. No way, I am much safer indoors"],
["a. I will be at the night club", "b. Still having dinner with my friends", "c. Tucked up in bed, I have work tomorrow", "d. None of your business!"],
["a. I’d be so down, I love sports", "b. I’d be interested", "c. I’d have to think about it", "d. I’d tell them hell would freeze over before I’m found participating or watching sports"],
["a. What is that?? ", "b. Ask for three", "c. Politely decline but have a beer", "d. Say no, I don’t like drinking"],
["a. It reminds me of the amazing cafes I visited in Italy. Love a great coffee.", "b. I feel happy, I need coffee to wake up in the morning.", "c. Coffee is ok, I guess.", "d. I am repulsed. I can’t stand coffee."],
["a. Yes, you will find me at the gym most days", "b. Yes, I love to get outdoors and hike or mountain bike.", "c.  I exercise sometimes if I make myself", "d. My version of active is using the remote while sitting on the couch."]];

questions = ["1. What do you like to watch on TV?",
"2. How do you feel about eating out?",
"3. Do you laugh when you see a clown? ",
"4. How do you feel when you view a beautiful sculpture?",
"5. If someone asked you to go out in nature, what would you respond?",
"6. Where will I find you after 9pm?",
"7. If a friend asks you to play/watch sports with them, how would you answer?",
"8. If you are offered a long island iced tea, what would you do?",
"9. What feelings does the smell of coffee invoke for you?",
"10. Do you live an active lifestyle?"];

  previousElement: HTMLInputElement = document.createElement("input");
  
  results = [];
  selectedAnswer: any;
  isAnySelected: boolean = true;

  ngOnInit(): void {
    //QUIZ
    this.serveQuestions();

  }
  constructor(private userService: UserService) { }
     
  serveQuestions() {
    this.previousElement.setAttribute("type", "radio");
    let classThis = this
  
    if(this.i < 10 && this.isAnySelected) {
  
      this.isAnySelected = false;
  
      let p = document.getElementById("p");
      p.innerHTML ='';
  
      console.log("Question:" + (this.i+1));
  
      //i represents the question number
      p.innerHTML = this.questions[this.i];
  
      //k represents the answer number from 'a' to 'd'. ('a' would be answer 1, 'd' would be answer 4)
      for (let k = 0; k < 4; k++) {
  
        let la = document.createElement("label");
        la.innerHTML = "<br>" + this.answers[this.i][k];
        let r1 = document.createElement("input");
        r1.setAttribute("type", "radio");
        r1.setAttribute("value", this.values[k]);
        r1.addEventListener("click", function() {
        console.log("Selected value: " + this.value);
        classThis.selectedAnswer = this.value + (classThis.i);
        classThis.isAnySelected = true;
  
        
      if (classThis.previousElement.checked) {
          classThis.previousElement.checked = false;
      }
  
      if (!this.checked) {
          this.checked = true;
          
      }
      classThis.previousElement = this;
    });
    p.appendChild(la);
    p.appendChild(r1);
  }
  this.i++; 
      if (this.selectedAnswer != undefined) {
        this.results.push(this.selectedAnswer); 
      }
  
      console.log("Results: ", this.results);
  
      }
  
      else {
          if (this.selectedAnswer != undefined && this.i <= 10) {
            this.results.push(this.selectedAnswer);
            this.i++; 
          }
          console.log("Results: ", this.results);
      }
  
      this.selectedAnswer = undefined;
  
  }
  // post results to node server on submit
  postResults() {
   
    
    let ID = sessionStorage.getItem('ID:');
    let ansObject = {
    id : ID, 
    results : this.results
    }

    this.userService.postResults(ansObject).subscribe((data) => {
      console.log(data);
      
      //window.location.href = "/Places";

    });
  }

  
}



