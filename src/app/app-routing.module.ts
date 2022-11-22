import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FavoritesComponent } from './favorites/favorites.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ProfileComponent } from './profile/profile.component';
import { UsersComponent } from './users/users.component';
import { QuizComponent } from './quiz/quiz.component';
import {PlacesComponent} from './places/places.component';
import {SearchPlaceComponent} from './search-place/search-place.component'
import { PlaceDetailsComponent } from './place-details/place-details.component';

const routes: Routes = [
  // { path: 'heroes', component: UsersComponent },
  { path: 'Profile', component: ProfileComponent },
  { path: 'Favorites', component: FavoritesComponent },
  { path: 'Feedback', component: FeedbackComponent },
  { path: 'Quiz', component: QuizComponent },
  { path: 'Places', component: PlacesComponent },
  {path: 'Search-Place', component: SearchPlaceComponent},
  {path: 'Place-Details/:id', component: PlaceDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }