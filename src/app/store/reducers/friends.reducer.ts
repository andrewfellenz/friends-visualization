import { Action, createReducer, on } from '@ngrx/store';
import { Friend } from 'src/app/models/friend';
import * as FriendsActions from '../actions/friends.actions';

export interface State {
  friends: Friend[],
}

export const initialState: State = {
  friends: []
}

export const scoreboardReducer = createReducer(
  initialState,
  // on(FriendsActions.enterHomePage, state => ({ ...state, // do something })),
  // on(FriendsActions.addFriend, state => ({ ...state, friends: prop })),
  // on(FriendsActions.deleteFriend, state => ({ ...state, // DELETE HELPER FUNCTION GOES HERE})),

  // Do this later. May require adding an ID attribute
  // on(FriendsActions.addAssociatedFriends, (state, { game }) => ({ home: game.home, away: game.away }))
);