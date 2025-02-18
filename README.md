# Dropdown Menu Component

This project implements a custom dropdown menu component developed using Next.js, React, and TypeScript.

## Features
- Built with React and Next.js 14
- Allows selection from multiple categories with icons
- Custom styling using SCSS
- State management with `useState` and handling outside clicks with `useEffect`
- Fully responsive and customizable
- this is a reusable component

## Installation and Setup

### 1. Install Dependencies
First, install the project dependencies:
```bash
npm install
# or
yarn install
```

### 2. Run the Project
To run the project in development mode, use the following command:
```bash
npm run dev
# or
yarn dev
```
Then, you can view the application in your browser at `http://localhost:3000`.

## Project Structure
```
├── components
│   ├── DropDownMenu.tsx
│   ├── provider
│   │   ├── DropDownMenuWrapper.tsx
├── styles
│   ├── DropdownMenu.module.scss
│   ├── page.module.css
├── pages
│   ├── index.tsx
├── public
├── package.json
├── tsconfig.json
```

## How to Use the `DropdownMenu` Component

To use the `DropdownMenu` component on another page, you can do the following:

```tsx
import DropdownMenu from "@/components/DropDownMenu";

const options = [
  { id: "science", label: "Science" },
  { id: "education", label: "Education" }
];

export default function Example() {
  return <DropdownMenu options={options} placeholder="Select a category" />;
}
```

## Contribution
If you want to contribute to this project, please fork the repository and make changes in a new branch. Then submit a pull request.


