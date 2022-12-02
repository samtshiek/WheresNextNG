import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UsersComponent } from './users/users.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfileComponent } from './profile/profile.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { QuizComponent } from './quiz/quiz.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {LoginComponent } from './login/login.component';
import {MatRadioModule} from '@angular/material/radio';
import { PlacesComponent } from './places/places.component';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatSliderModule} from '@angular/material/slider';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { SearchPlaceComponent } from './search-place/search-place.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTableModule,} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { PlaceDetailsComponent } from './place-details/place-details.component';
import {Router} from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsersComponent,
    ProfileComponent,
    FavoritesComponent,
    FeedbackComponent,
    QuizComponent,
    PlacesComponent,
    SearchPlaceComponent,
    PlaceDetailsComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatTabsModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatInputModule,
    MatCardModule,
    MatSliderModule,
    MatGridListModule,
    MatCarouselModule.forRoot()
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

