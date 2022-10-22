import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FavoritesComponent } from './favorites/favorites.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ProfileComponent } from './profile/profile.component';
import { UsersComponent } from './users/users.component';


const routes: Routes = [
  // { path: 'heroes', component: UsersComponent },
  { path: 'Profile', component: ProfileComponent },
  { path: 'Favorites', component: FavoritesComponent },
  { path: 'Feedback', component: FeedbackComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
