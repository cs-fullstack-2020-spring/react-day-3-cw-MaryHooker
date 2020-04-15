### Overall Score : 4/5
#### Attempted Problems : 4
#### Pushing : Consistent
#### General Comments : You seem to have a strong grasp of the concepts. Try not to overwhelm yourself. As long as you walk out of class each day with an understanding of the concepts OR you know which concepts to reinforce that night then you're on track.

# React Day 3 CW
### Since we had an unexpected half day all students will receive a 4/5 if an assignment will all necessary components created as submitted on time. The final point will be added on if the app meets requirements. 
### Suer close - you should be mapping through the array passed as an attribute to the component which means its accessed by `this.props.attributeName` then referencing each element of the array by the arrow function param (no `this` necessary)
### Score : 4/5

#### Looks great!
Create a react app called `user-media-favorites-app`. Create a class based component called `Favorites`. In the `Favorites` component render `<h1> This is a list of your favorite movies and albums</h1>` and two child components `Movies` and `Albums`. In the `Favorites` component prompt the user to enter their favorite movie, then prompt the user to enter their second favorite movie. Store both movies in a movie array and pass this array to the child component  `Movies`. Also prompt the user for the favorite album and their second favorite album. Store both albums in an album array and pass this array the the child component `Album`. In each child component print the message `Child component mounted` using a lifecylce method. Also iterate through the passed arrays rendering each element as an h3 tag. Display the `Movies` component and `Albums` component side by side.