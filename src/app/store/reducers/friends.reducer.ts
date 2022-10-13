import { addFriend, deleteFriend, receivedFriendsList } from './../actions/friends.actions';
import { createReducer, on } from '@ngrx/store';
import { createSelector, createFeatureSelector } from '@ngrx/store';
 
import { Friend } from 'src/app/models/friend';

export interface State {
  friends: Friend[];
}

export const initialState: ReadonlyArray<Friend> = [];

export const friendsReducer = createReducer(
  initialState,
  on(receivedFriendsList, (state, { friends }) => friends),
  on(addFriend, (state, { friend }) => [...state, friend]),
  on(deleteFriend, (state,  { friendId }) => state.filter(friend => friend.id !== friendId)),
  /* on(addAssociatedFriends, (state, { friend, newAssociatedFriends }) => ({ friend.friends = [...friend.friends, newAssociatedFriends] })) */
);

export const friendFeatureKey = "friends";

export const selectFriends = createFeatureSelector<Friend[]>(friendFeatureKey);