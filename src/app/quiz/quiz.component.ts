import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  

  constructor() { }

  ngOnInit(): void {
    
  }
  question1: string;
  tv: string[] = ['Action', 'Drama', 'Comedy', 'I have way better things to do'];
  
  question2: string;
  eating: string[] = ['I am a foodie. I love trying new restaurants.', 'I like it, it can be enjoyable.'
  , 'I do it sometime, but I prefer to cook at home.', 'I do not go to restaurants.'];
  
  question3: string;
  clown: string[] = ['Yes, they are hilarious!', 'A little bits'
  , 'No, they are not funny ', 'No, I run away, clowns are terrifying!'];

  question4: string;
  sculpture: string[] = ['I feel deeply moved', 'I enjoy the experience', 'I am indifferent' , 
  'I do not understand why anyone wants to look at art '];

  question5: string;
  nature: string[] = ['When? I have all my camping gear in the back of my truck! ', 'A hike sounds amazing'
  , 'I could be talked into it  ', 'No way, I am much safer indoors '];

  question6: string;
  find: string[] = ['I will be at the night club ', 'Still having dinner with my friends '
  , 'Tucked up in bed, I have work tomorrow ', 'None of your business!'];

  question7: string;
  sports: string[] = ['I’d be so down, I love sports', 'I’d be interested'
  , 'I’d have to think about it ', 'I’d tell them hell would freeze over before I’m found participating or watching sports'];

  question8: string;
  tea: string[] = ['What is that?? ', 'Ask for three'
  , 'Politely decline but have a beer  ', 'Say no, I am not interested '];

  question9: string;
  coffee: string[] = ['It reminds me of the amazing cafes I visited in Italy. Love a great coffee', 'I feel happy, I need coffee to wake up in the morning. '
  , 'Coffee is ok, I guess. ', 'I am repulsed. I can’t stand coffee. '];

  question10: string;
  lifestyle: string[] = ['Yes, you will find me at the gym most days', 'Yes, I love to get outdoors and hike or mountain bike.'
  , 'I exercise sometimes if I make myself  ', 'My version of active I using the remote while sitting on the couch.'];

}


