<div align="center">

## Daisyui-React

**React based component library with Tailwind CSS Utility classes**
 
 [See Demo on Storybook](https://daisyui-react.netlify.app/)
  
![Screenshot from 2021-10-14 12-06-29](https://user-images.githubusercontent.com/32792779/138229300-a07674ea-81ab-4b00-8fae-1886c9d86b48.png)

</div>

## 🌼 Features

<details>
<summary>
  show / hide
</summary>

- **Reactjs based**  
  daisyui-react is a ReactJs based component library with Tailwind CSS Utility classes.
- **Semantic color names**  
  Adds color names like `primary`, `secondary`, `accent`,….
- **Customizable**  
  You can customize the design of components with Tailwind utility classes and CSS variables.
- **Themeable**  
  Add multiple themes and customize colors. You can even set a theme for a specific section of your page.
- **RTL supported**  
  Enable `rtl` config for right to left layouts.
- **Pure CSS**  
  No script file, no dependencies. Works on all frameworks and environments!

</details>

## 📀 Install now!

## with npm

```bash
`npm i daisyui @itfiers/daisyui`
```

## with yarn

```bash
`yarn add daisyui @itfiers/daisyui`
```

## install Tailwind CSS

```bash
`npm i -D tailwindcss postcss autoprefixer`
```

Follow installation guide at [tailwind](https://tailwindcss.com/docs/installation) official website to configure tailwind for your project.

Add daisyui plugin in your `tailwind.config.js`.

```js
module.exports = {
  //...
  purge: ["./node_modules/\\@itfiers/daisyui/**/*.js"],
  plugins: [require("daisyui")], // add to plugin array
  // ...
};
```

---

## 🚀 Useage

Use Daisyui-React component to build your UI.

```jsx
import React from "react";
import ReactDOM from "react-dom";
import { Button } from "@itfiers/daisyui";
function App() {
  return (
    <Button size="small" buttonType="primary" className="p-1">
      Hello World
    </Button>
  );
}
ReactDOM.render(<App />, document.querySelector("#app"));
```

---

## List of Components

<details>
<summary>
  show / hide
</summary>

- Alert
- Avatar
- Badge
- Breadcrumb
- Button
- Card
- CheckBox
- Collapse
- Divider
- Drawer
- DropDown
- Img
- Indicator
- Input
- Link
- Mask
- Modal
- Pagination
- Progress
- Radio
- Select
- Steps
- TabList
- Textarea
- Toggle
- Tooltip
</details>

---
