import { Friend } from "../models/friend";

let alex: Friend = {
    id: 1,
    name: 'alex',
    age: 20,
    weight: 165,
    friends: [],
}

let bonnie: Friend = {
    id: 2,
    name: 'bonnie',
    age: 32,
    weight: 120,
    friends: [],
}

let cleo: Friend = {
    id: 3,
    name: 'cleo',
    age: 18,
    weight: 180,
    friends: [],
}

let darian: Friend = {
    id: 4,
    name: 'darian',
    age: 65,
    weight: 260,
    friends: [
        alex,
        bonnie,
        cleo
    ],
}

export let mockFriends: Friend[] = [
    alex,
    bonnie,
    cleo,
    darian
];
