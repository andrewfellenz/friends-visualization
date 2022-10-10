import { ListFriendsComponent } from './list-friends.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button'; 

@NgModule({
  declarations: [ ListFriendsComponent ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule
  ],
  exports: [
    ListFriendsComponent
  ]
})
export class ListFriendsModule { }
