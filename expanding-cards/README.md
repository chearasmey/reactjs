# Expanding Cards React Project

This project demonstrates an interactive expanding cards UI built with **React** and **TypeScript**.

## Technologies Used

- **React**: For building the user interface using functional components and hooks.
- **TypeScript**: Adds static typing to JavaScript, improving code quality and maintainability.
- **CSS**: For styling the expanding cards and layout.
- **React.forwardRef**: Enables passing refs to child components, allowing direct DOM manipulation (e.g., adding the `active` class).
- **React Hooks**: 
  - `useRef` is used to reference the first card for initial activation.
  - `useEffect` is used to add the `active` class to the first card after the component mounts.
- **Props Spreading**: The `ImageCard` component uses the rest operator to accept and apply any additional HTML attributes, such as `className` and event handlers.

## Features

- Clickable cards that expand and collapse with smooth transitions.
- The first card is automatically activated on initial load.
- Clean, reusable component structure.

## How It Works

- The `App` component manages the list of images and handles which card is active.
- The `ImageCard` component receives props for the title, background image, and event handlers, and supports ref forwarding for direct DOM access.
- Clicking a card sets it as active, updating its appearance.

---