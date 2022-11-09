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
  loggedIn: boolean;
  newUser: NewUser;
  existingUser: User;
  user:loginUser;
  
  question1 = [
    {a1:7, name:'question1', value:'Action', label:'Action'},
    {id:2, name:'question1', value:'Drama', label:'Drama'},
    {id:3, name:'question1', value:'Comedy', label:'Comedy'},
    {id:4, name:'question1', value:'I have way better things to do', label:'I have way better things to do'}
  ]
  
  question2 = [
    {id:1, name:'question2', value:'I am a foodie. I love trying new restaurants', label:'I am a foodie. I love trying new restaurants'},
    {id:2, name:'question2', value:'I like it, it can be enjoyable', label:'I like it, it can be enjoyable'},
    {id:3, name:'question2', value:'I do it sometimes, but I prefer to cook at home', label:'I do it sometimes, but I prefer to cook at home'},
    {id:4, name:'question3', value:'I do not go to restaurants', label:'I do not go to restaurants'}
  ]
  question3 = [
    {id:1, name:'question3', value:'Yes, they are hilarious!', label:'Yes, they are hilarious!'},
    {id:2, name:'question3', value:'A little bit ', label:'A little bit'},
    {id:3, name:'question3', value:'No, they are not funny', label:'No, they are not funny'},
    {id:4, name:'question3', value:'No, I run away, clowns are terrifying! ', label:'No, I run away, clowns are terrifying! '}
  ]
  question4 = [
    {id:1, name:'question4', value:'I feel deeply moved', label:'I feel deeply moved'},
    {id:2, name:'question4', value:'I enjoy the experience', label:'I enjoy the experience'},
    {id:3, name:'question4', value:'I am indifferent', label:'I am indifferent'},
    {id:4, name:'question4', value:'I don’t understand why anyone wants to look at art', label:'I don’t understand why anyone wants to look at art'}
  ]
  question5 = [
    {id:1, name:'question5', value:'When? I have all my camping gear in the back of my truck! ', label:'When? I have all my camping gear in the back of my truck! '},
    {id:2, name:'question5', value:'A hike sounds amazing', label:'A hike sounds amazing'},
    {id:3, name:'question5', value:'I could be talked into it', label:'I could be talked into it'},
    {id:4, name:'question5', value:'No way, I am much safer indoors', label:'No way, I am much safer indoors'}
  ]
  question6 = [
    {id:1, name:'question6', value:'I will be at the night club', label:'I will be at the night club'},
    {id:2, name:'question6', value:'Still having dinner with my friends', label:'Still having dinner with my friends'},
    {id:3, name:'question6', value:'Tucked up in bed, I have work tomorrow', label:'Tucked up in bed, I have work tomorrow'},
    {id:4, name:'question6', value:'None of your business!', label:'None of your business!'}
  ]
  question7 = [
    {id:1, name:'question7', value:'I’d be so down, I love sports', label:'I’d be so down, I love sports'},
    {id:2, name:'question7', value:'I’d be interested', label:'I’d be interested'},
    {id:3, name:'question7', value:'I’d have to think about it', label:'I’d have to think about it'},
    {id:4, name:'question7', value:'I’d tell them hell would freeze over before I’m found participating or watching sports', label:'I’d tell them hell would freeze over before I’m found participating or watching sports'}
  ]
  question8 = [
    {id:1, name:'question8', value:'What is that??', label:'What is that??'},
    {id:2, name:'question8', value:'Ask for three', label:'Ask for three'},
    {id:3, name:'question8', value:'Politely decline but have a beer', label:'Politely decline but have a beer'},
    {id:4, name:'question8', value:'Say no, I don’t like drinking', label:'Say no, I don’t like drinking'}
  ]
  question9 = [
    {id:1, name:'question9', value:'It reminds me of the amazing cafes I visited in Italy. Love a great coffee. ', label:'It reminds me of the amazing cafes I visited in Italy. Love a great coffee. '},
    {id:2, name:'question9', value:'I feel happy, I need coffee to wake up in the morning', label:'I feel happy, I need coffee to wake up in the morning'},
    {id:3, name:'question9', value:'Coffee is ok, I guess', label:'Coffee is ok, I guess'},
    {id:4, name:'question9', value:'I am repulsed. I can’t stand coffee', label:'I am repulsed. I can’t stand coffee'}
  ]
  question10 = [
    {id:1, name:'question10', value:'Yes, you will find me at the gym most days', label:'Yes, you will find me at the gym most days'},
    {id:2, name:'question10', value:'Yes, I love to get outdoors and hike or mountain bike.', label:'Yes, I love to get outdoors and hike or mountain bike.'},
    {id:3, name:'question10', value:'I exercise sometimes if I make myself ', label:'I exercise sometimes if I make myself '},
    {id:4, name:'question10', value:'My version of active is using the remote while sitting on the couch', label:'My version of active is using the remote while sitting on the couch'}
  ]


  myform = new FormGroup({
    question1: new FormControl(''),
    question2: new FormControl(''),
    question3: new FormControl(''),
    question4: new FormControl(''),
    question5: new FormControl(''),
    question6: new FormControl(''),
    question7: new FormControl(''),
    question8: new FormControl(''),
    question9: new FormControl(''),
    question10: new FormControl(''),
  });

  constructor(){}
  
  
  
  submit(){
    console.log(this.myform.value);
  }
}



