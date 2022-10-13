// Angular
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { NgModule } from '@angular/core';

// Angular Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// NGRX
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { friendsReducer } from './store/reducers/friends.reducer';

// Friends Customn Components and Modules
import { AddFriendsModule } from './add-friends/add-friends.module';
import { DataPanelModule } from './data-panel/data-panel.module';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ListFriendsModule } from './list-friends/list-friends.module';


@NgModule({
  declarations: [ 
    AppComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    // Angular
    AppRoutingModule,
    BrowserModule,
    
    // Angular Material
    BrowserAnimationsModule,

    // Friends Customn Components and Modules
    AddFriendsModule,
    DataPanelModule,
    ListFriendsModule,

    // NGRX
    StoreModule.forRoot({ friends: friendsReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
