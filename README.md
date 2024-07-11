# sample-react-frontend

When writing the code for the React frontend application, the goal was to create a user-friendly interface that displays document cards, allows for drag-and-drop reordering, and provides a seamless experience for viewing larger images.

The first step was to structure the application by creating a main App component and separate components for the card list (CardList), individual cards (Card), and the image overlay (Overlay). This modular approach helps keep the code organized and manageable.

For the card list, I used the fetch API to load a static JSON file containing the document details. Each card displays a thumbnail image and a title. To ensure a clean and responsive layout, I used CSS Flexbox to arrange the cards into rows, with media queries to handle different screen sizes.

To enable drag-and-drop functionality, I integrated the react-dnd library. This required adding useDrag and useDrop hooks in the Card component to handle the dragging and dropping logic. The moveCard function in the CardList component updates the card positions in the state, ensuring the UI reflects the new order after a card is dropped.

The overlay feature enhances the user experience by allowing users to click on a card to view a larger version of the image. The Overlay component listens for the ESC key press to close the overlay, providing an intuitive way for users to exit the fullscreen view.

Throughout the development process, I focused on creating a responsive and interactive interface that is easy to navigate and visually appealing. By breaking down the functionality into smaller, reusable components, I ensured the code remains organized and maintainable.

## How to Run

1. Build the Docker image:

```
docker build -t sample-react-frontend .
```

2. Run the Docker container:

```
docker run -p 3000:3000 sample-react-frontend
```

3. Open your browser and go to:

```
http://localhost:3000
```
