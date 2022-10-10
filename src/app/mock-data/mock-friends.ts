import { Friend } from "../models/friend";

let alex: Friend = {
    name: 'alex',
    age: 20,
    weight: 165,
    friends: [],
}

let bonnie: Friend = {
    name: 'bonnie',
    age: 32,
    weight: 120,
    friends: [],
}

let cleo: Friend = {
    name: 'cleo',
    age: 18,
    weight: 180,
    friends: [],
}

let darian: Friend = {
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
