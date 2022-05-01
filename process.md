# Process and Approach

## Plan of Action:
To start I will divide the project into 5 phases

1. Display general layout of the game
2. Implement drag and drop functionality
3. Add drag and drop constraints based on challenge specs
4. Implement auxiliary buttons (reset and help)
5. Check for win state

## First Approach
I initially started with a boilerplate react app due to habit. I generated a general structure for the game; however, once I began thinking about how all the game functions would interact with each other I scrapped the react app. I realized the challenge would actually be much simpler and smaller file-wise if done in vanilla JavaScript and HTML. 

## Second Approach
### Phase 1
I recreated the original game outline in a static HTML page and added some styling to no issue.

### Phase 2
Implementing the drag and drop functions was not an issue as I have used this in multiple projects before. The only minor hurdle here was making sure the correct data was passed in the drag function to allow a 1 to 1 drop.

### Phase 3
The original drop function is now expanded in order to only allow drop if the selected dot corresponds to its designated spot on the logo.

To take a break from the JS I added in animations from [Animate.css](https://animate.style/) for quality of life improvements. 

### Phase 4
Implementing the the reset button was straightforward. The html only needed to be saved once on load and then would replace the current html on click.

### Phase 5
The next hurdle was checking for the win state. I started by creating an empty list and once a dot was correctly placed, its unique data attribute would be added to the list. However, issues came up because at the dots could still be dragged even after they were placed. This was an issue for the black dots because they could be moved between either of their correct spaces and would continue to be pushed into the win list. This made it possible to move a single black dot 5 times between either correct space and the win state would be triggered. 

I first added if statements to check if the list already contained the dot being dragged to combat the bug with the black dots. This proved not to work and would still be added to the win list regardless. 

I then realized that if statements were not needed at all and instead I set the draggable attribute to false once a dot had been placed. Since a dot would not need to move after a correct placement this solution fixed all issues with the black dots with simpler code.

With all original specs met I then added in a lively congratulations message along with animations once the win state was met.

### Extra
I then added a help button and modal with basic instructions on how the game works. This was not a requirement, but I included it as it's a best practice for accessability for games similar to this.

Finally I audited the webpage with Lighthouse and achieved a perfect score in every category (except Best Practices but only due to the images used).

Throughout I also made sure to test the page on various screen sizes to account for a fully responsive design.