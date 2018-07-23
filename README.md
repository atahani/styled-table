# Customizable / Responsive React Table with styled-components

## Introduction

This project was developed to demonstrate how you would be able to create a react table component with the styled-components library. The whole development process was recorded in a videocast; You could watch it on [YouTube](https://www.youtube.com/watch?v=kLpQyF6JOCE).

[![How to Develop Customizable/Responsive Table in Reactjs](https://img.youtube.com/vi/kLpQyF6JOCE/0.jpg)](https://www.youtube.com/watch?v=kLpQyF6JOCE)

> I should mention that my English level is not well enough, maybe I've made some mistake, but I'm sure you'll get what I said 😅

## Libraries That Have Been Used

1. [flow-bin](https://www.npmjs.com/package/flow-bin)
2. [styled-components](https://www.styled-components.com/)
3. [prettier](https://prettier.io/)
4. [react-router-dom](https://reacttraining.com/react-router/core)

## The Table Component

You can see how the table component works by looking at the Props type definition.

```
type Props = {
  columns: {
    [key: string]: {
      key: string,
      label?: string,
      align?: "center" | "left" | "right",
      width?: number,
      content?: Function,
      css?: string,
      cssHeader?: string,
      hideOnDesktop?: boolean,
      hideOnTablet?: boolean,
      hideOnPhone?: boolean
    }
  },
  data?: Array<Object>,
  rowConfig?: {
    uniqueKey?: string,
    css?: string,
    onClick?: Function
  },
  currentPage: number,
  totalPages: number,
  basePageLink: string
};
```

## How to Run It

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

### Run the Project
```
npm run start
```
### Flow Checking

```
npm run flow
```

### Update the Flow Types

```
npm run update-flowtyped
```