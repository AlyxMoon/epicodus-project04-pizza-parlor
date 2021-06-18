# Epicodus | Independent Project 03 | Mr Roboger's Neighborhood

##### Table of Contents
1. [Description](#description)
2. [Setting Up The Project](#setting-up-the-project)
3. [Explanation of Code](#explanation-of-code)
4. [Objectives](#objectives)
   - [Further Exploration Objectives](#further-exploration-objectives)
5. [Tests](#tests)
6. [Sources and Libraries](#sources-and-libraries)
   - [External Libraries Used](#external-libraries-used)

## Description

This is my fourth independent project for the Epicodus bootcamp program. The goal is to create a website that allows users to order pizzas, making use of concepts learned this week (objects and constructors).

Tests will be utilized to check behavior.

- **Author**: Allister Moon Kays
- **Live Website Link**: [https://alyxmoon.github.io/epicodus-project04-pizza-parlor/](https://alyxmoon.github.io/epicodus-project04-pizza-parlor/)
- **Copyright**: MIT License

## Setting Up The Project
1. Download the files or clone the repository to your computer
2. Open the project folder in your code editor of choice
3. No special tooling is required to preview the site when developing. You can either open the index.html file directly, or use any tool to start a develop server which serves the index.html for
   - for example, in VScode, open the command palette and search for `live server: open with live server`

Optionally, you can set up your project to make use of `eslint`, which is a tool that parses your files to help find errors and enforce code style. You can configure VScode to read the eslint rules and present this information to you, and even fix mistakes when you save! However, since that set up may change on the user, I leave it up to you to figure out how to configure VScode (or whichever code editor you use) to use eslint.

To set up `eslint` though, you need the following:
1. Install `node.js` on your computer
2. Install `npm` or `yarn` on your computer. The following instructions will assume you use `yarn`, and you'll have to look up how to do the commands in `npm` if you choose to use it instead.
3. After you have this repository on your computer, open a command line in the root of this repository.
4. Run `yarn` to install the dependencies, these can be found in the `package.json` file under `devDependencies`
5. You can now run `yarn run lint` to manually lint your code and see any errors/warnings (this uses the script as defined in `package.json`)
6. Optionally, if you have configured VScode to use linting, it will show you the rules directly in the file without having to do anything!

## Explanation of Code

## Objectives
- Code meets standards from previous weeks.
- Constructors and prototypes are used successfully.
- Application works as expected.
- Plain English specs are included in your README.
- Required functionality is in place by the deadline.
- Project is in a polished, portfolio-quality state.
- Project demonstrates an understanding of this week's concepts. If prompted, you can discuss your code with an instructor using correct terminology.

### Further Exploration Objectives
- Style your site with CSS and images.
- Allow users to order more than one pizza with different toppings.
- Display the list of pizzas ordered as links that can be clicked for details.
- Offer a delivery option that then requires address information.

## Rough outline

- Create a list of ingredients with associated price
- Create a list of sizes with associated price

**Create a pizza class**
- contain record of what ingredients have been added
- method to add ingredient
  - check for duplicate ingredients
- method to remove ingredient
- method to set size
- method to calculate price based on ingredients and size

**Create an order class**
- contain list of pizzas
- method to calculate overall price of order based on individual pizzas
- method to add a new pizza
- method to remove pizza

**UI stuff**
- add main page, give some info on the pizza parlor and allow user to begin ordering
- ordering page, contains main section with current selection and a sidebar with overall order info
- When user is adding/editing pizza, show pizza with info in the main page
- when not adding/editing pizza, add prompts to add/edit another or finish order
- order confirmation page, show information on pizzas order, all the prices, and add checkout button

**Extras**

ability to add notes/request to a pizza and/or order
ability to add coupon code to reduce price
ability to add extras such as dipping sauce
ability add add user account (not actually, just save it to local storage or something)
check address/map with a pretend address
add contact page
after order is completed, add some kind of fake progress indicator

## Tests

### Describe Pizza()

```
Test: The pizza object should be created with default settings (medium size, tomato sauce, mozzarella cheese, no toppings)
Code: new Pizza()
Result: Pizza {size: "medium", sauce: "tomato", cheese: "mozzarella", toppings: []}
```

```
Test: The pizza object should be created with the default settings overriden by provided arguments
Code: new Pizza({ size: 'large', sauce: 'none', cheese: 'feta', toppings: ['pepperoni', 'mushrooms'] })
Result: Pizza {size: "large", sauce: "none", cheese: "feta", toppings: ['pepperoni', 'mushrooms']}
```

## Sources and Libraries

### External Libraries Used
- PureCSS v2.0.6