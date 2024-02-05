# ![React State Management - Exercise](./assets/hero.png)

In this exercise, we give students an array of objects that are initialized in state. The user must select options from this array to assemble the best roster/combination of the items as possible.

The array of objects will have various properties, most notably a PRICE attribute. 

The goal is creating a roster management app that challenges the user to select from the list of characters to create their dream roster for a specific scenario, in the vein of "You have $100 to assemble a team to survive a zombie apocalypse. Who do you choose?" and the objects are something like:

{ name: "Roman Legionary", price: 10, strength: 5, agility: 1, img: 'url-link-toimage'}

The list you can select from remains static, and each item has a clickListener for the user selecting that character for their team.

Then, state also contains the list of characters they've selected. When the user clicks one of the characters images, it gets added to their list in state and displayed. The list you're assembling should also have DELETE/REMOVE button to allow them to change their mind about options.

Ultimately, the list they create gets data aggregated, in particular the cost (the goal is assembling the best team for under $100). You can display the total price in red if it's over $100 and green if they're still under budget. The display can also aggregate the average or total of various other statistics the characters have like "average strength" or "total agility" or what not.

The generic version of this app should provide an array of objects for students to pull from as their start. A level up challenge can have them either add new characters or generate their own differently flavored version of the app.
