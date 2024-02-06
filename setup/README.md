# ![React State Management Lab - Setup](./assets/hero.png)

## Setup

```bash
npm create vite@latest
```

You'll be prompted to provide a project name. `vite-project` is the default but when you start typing that default will go away. Choose a name that makes sense for this project; in this case, we'll call the app `react-state-management-lab`.

Next, you'll select a framework. Use the arrow keys to choose the `React` option, and hit `Enter`.

Again, use the arrow keys to choose the `JavaScript` variant and hit `Enter`.

Move into the project you just created and run `npm i` to install the dependencies:

```bash
cd react-state-management-lab
npm i
```

Launch the app in VS Code:

```bash
code .
```

Open the `App.jsx` file in the `src` directory and replace the contents of it with the following:

```jsx
// src/App.jsx

const App = () => {

  return (
    <h1>Hello world!</h1>
  );
}

export default App
```

Clear out the contents of the `index.css` and `App.css` file in the `src` directory. Add the following CSS to the `App.css` file:

```css
ul {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

li {
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  margin: 10px;
}
```

To start the app, run:

```bash
npm run dev
```
