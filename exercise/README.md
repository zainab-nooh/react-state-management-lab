# ![React State Management - Exercise](./assets/hero.png)

Welcome to the React State Management Lab! We are going to be interacting with state to get a better understanding of how to manage it in a React application. For this app we are going to assemble a team of character to survie the zombie apocalypse. We are going to do the following:

- Add characters to the team from a given list
- Remove characters from the team
- Display the total cost of the team
- Display the total strength of the team
- Display the total agility of the team

Let's get into it!

## Exercise

Follow the steps below to complete the exercise. Keep all this code in a single file for now. You can refactor it into separate components later.

1. Create a new state variable named `team` and set the initial state to an empty arrary.
2. Create a new state variable named `money` and set the initial state to 100.
3. Create a new state variable named `zombieFighters` and set the initial state to the following array of objects:

```js
[
    { name: "Survivor", price: 12, strength: 6, agility: 4, img: 'https://via.placeholder.com/150/92c952' },
    { name: "Scavenger", price: 10, strength: 5, agility: 5, img: 'https://via.placeholder.com/150/771796' },
    { name: "Shadow", price: 18, strength: 7, agility: 8, img: 'https://via.placeholder.com/150/24f355' },
    { name: "Tracker", price: 14, strength: 7, agility: 6, img: 'https://via.placeholder.com/150/d32776' },
    { name: "Sharpshooter", price: 20, strength: 6, agility: 8, img: 'https://via.placeholder.com/150/1ee8a4' },
    { name: "Medic", price: 15, strength: 5, agility: 7, img: 'https://via.placeholder.com/150/66b7d2' },
    { name: "Engineer", price: 16, strength: 6, agility: 5, img: 'https://via.placeholder.com/150/56acb2' },
    { name: "Brawler", price: 11, strength: 8, agility: 3, img: 'https://via.placeholder.com/150/8985dc' },
    { name: "Infiltrator", price: 17, strength: 5, agility: 9, img: 'https://via.placeholder.com/150/392537' },
    { name: "Leader", price: 22, strength: 7, agility: 6, img: 'https://via.placeholder.com/150/602b9e' }
]
```

4. Display the `zombieFighters` array in the UI. Each character should have an image, name, price, strength, and agility. Each character should also have an "Add" button to add them to the team.
5. If the `team` array length is greater than 0, display the `team` array in the UI. Each character should have an image, name, price, strength, and agility. Each character should also have a "Remove" button to remove them from the team.
6. If the `team` array length is less than 0, display `Pick some team members!` in the UI.
7. Display the current `money` in the UI.
8. Display the total strength of the team in the UI. If there are no team members display `Total Strength: 0`.
9. Display the total agility of the team in the UI. If there are no team members display `Total Agility: 0`.
10. Create a function named `handleAddFighter`. This function should accomplish the following:
    1. On click of the "Add" button, add the character object to the `team` state array.
    2. Subtract the character's price from the `money` state variable.
    3. If you do not have enough `money` left to buy a character you should not be able to add the character. Log to the console ` Not enough money`.
11. Create a function named `handleRemoveFighter`. This function should accomplish the following:
    1. On click of the "Remove" button, remove the character object from the `team` state array.
    2. Add the character's price to the `money` state variable.

## Hints

- You should never change state directly. If you need to make a copy of an array you can use the syntax `const copyArray = [...sourceArray]`.
- You can use the `reduce` method to get the total strength and agility of the team.
- You can use `https://jsonplaceholder.typicode.com/photos` to get images for the characters. These are just random photos and don't have anything to do with the characters.
