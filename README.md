<div align="center">

## Daisyui-React

**React based component library with Tailwind CSS Utility classes**

[See Storybook](https://daisyui-react.netlify.app/)

</div>

## 🌼 Features

<details>
<summary>
  show / hide
</summary>

- **Rectjs based**  
  daisyUI-react is a react based component library with Tailwind CSS Utility classes.
- **Tailwind CSS plugin**  
  daisyUI-react is a Tailwind CSS plugin. Install it and add it to your `tailwind.config.js` file.

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
import Button from "@itfiers/daisyui/Button";
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
