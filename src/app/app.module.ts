import { ListFriendsModule } from './list-friends/list-friends.module';
import { AddFriendsModule } from './add-friends/add-friends.module';
// Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// NGRX
import { StoreModule } from '@ngrx/store';

// Friends Components
import { HeaderComponent } from './header/header.component';

// Angular Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [ 
    AppComponent,
    HeaderComponent,
    HomeComponent ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AddFriendsModule,
    ListFriendsModule,
    StoreModule.forRoot({}, {}),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
