# Puppy Puzzle

<img src="readme-docs/responsive-screenshot.png" alt="image" width="50%" height="auto">

## Intro

- The purpose of this project is to create a fully functional front-end site that responds to users' interactions. In this case I have created a slide puzzle game. 
The object of the game is to rearrange the puzzle pieces to reveal the original image. The puzzle pieces can only swap with the 'blank' grey puzzle piece to move horizontally or vertically around the puzzle board. The game concludes when all the puzzle pieces are in the correct order and you are notified of how many moves it took you to complete the puzzle. There are interactive buttons which show how to play the game, to start a new game, and also to toggle on and off the background music. The default for audio is set to mute. 

## User Stories

- As a first-time user I was able to quickly identify that this was a picture puzzle. I was unsure of the rules before I started the game so I used the "how to play" option which clearly outlined the rules of the game. The game played smoothly, and when I eventually solved the puzzle, a pop-up messsage congratulated me and let me know how many moves it took to complete the game.

## Features

### Game Options

- The game options include a 'How to Play', 'New Game', and audio on/off buttons". The 'How to Play' button opens a pop-up window with instructions on how to play the game

  <img src="readme-docs/game-options.png" alt="Image of 'How to Play', 'New Game', and audio on/off buttons" width="55%" height="auto">

**How to Play**
- This button opens a pop-up window that contains the rules of the game. There is a 'Close' button at the bottom of the window to exit back to the game.

    <img src="readme-docs/how-to-play-img.png" alt="Image of 'How to Play' button" width="55%" height="auto">
    <img src="readme-docs/how-to-play.png" alt="Image of 'How to Play' instructions" width="55%" height="auto">

**New Game**
- This buttton starts a new game at any time. You will be asked to confirm the request via a pop-up window where you can confirm or cancel the request.

    <img src="readme-docs/new-game-img.png" alt="Image of 'New Game' button" width="55%" height="auto">
    <img src="readme-docs/new-game-confirm.png" alt="Image of 'New Game' confirmation button" width="55%" height="auto">

**Audio on/off**


<img src="readme-docs/audio-off.png" alt="Image of 'Audio muted' button" width="55%" height="auto">
<img src="readme-docs/audio-on.png" alt="Image of 'Audio unmuted' button" width="55%" height="auto">

### Turns Counter

### The Footer

- The footer section includes links to the relevant social media sites for ABP. The links will open to a new tab to allow easy navigation for the user.
- The footer is valuable to the user as it encourages them to keep connected via social media

    <img src="readme-docs/footer-readme-screenshot.png" alt="image of website footer" width="65%" height="auto">

## Future Features

- Future features will include recording of high scores, an audio alert when you complete the game (if audio is enabled), 

## Typography and color scheme

- The Honk font from Google Fonts will be used for this project.
- The color schemes will include Greys #8C8C8C #404040 #262626 #BFBFBF #595959 #d9d9d9 from Adobe Color and black #000000/white /grey contrasts between background and text to give a sleek look over a colored background. I also used #9087b0 for color change on usable links and icons when hovered over with the mouse pointer.

    <img src="readme-docs/adobe-color-black-grey-anthracite.jpeg" alt="Adobe color pallet image." width="25%" height="auto">
    <img src="readme-docs/adobe-color-grey-gradient-abstract.jpeg" alt="Adobe color pallet image." width="25%" height="auto">

## Wireframes

   <img src="readme-docs/wireframe-abp-website.png" alt="Wireframe image of website plan." width="60%" height="auto">

## Technology Used

### Language Used

- HTML5, CSS3 & JavaScript were the languages used in this project.

### Programs, Libraries & Frameworks Used

- Google Fonts was used to import the Honk font used for the heading text.
- Font Awesome was used for all social media icons contained in the project.
- VS Code Desktop was used to write the code.
- Inkscape was used to create the individual puzzle pieces.
- Favicon.cc was used to generate the favicon.
- Figma was used to design the wireframe for the project.
- Github was used to store the project code after being pushed.

## Testing

- W3C Markup Validator and W3C CSS Validator were used to validate all three pages of the project. The final tests were completed without errors or warnings.
- Lighthouse developer tool was also used to gauge the performance of the project on desktop and mobile views. The desktop scored a 95, and the mobile test scored 83 for performance.

    <img src="readme-docs/95-desktop-home-performance.png" alt="Performance score image desktop." width="26.7%" height="auto">
    <img src="readme-docs/mobile-83.png" alt="Performance score image mobile." width="25%" height="auto">

### Further Testing

- The project was also tested with Google's dev tools to show responsiveness on different screen sizes, and also on different browsers.
- Testing was done on several desktop and laptop computers, various mobile devices like the iPhone, Nokia, Samsung and Huawei to make sure that the navigation and external links were functioning correctly.
- Family members, friends and colleagues also kindly tested the functionality and user experience at several stages of the projects development.

### Known Bugs

- When scrolling on mobile devices, the background image slightly moves up and down in the scrolling direction. This is happening even though the background image is fixed. The bug persisted with the addition of a @media query to address the issue which has been removed. This bug persists.
- There was an issue with the responsiveness of the About page. I wanted to have the media clip and relevant text on the same row on wider screens, and for the text to move below the media as the screen got narrower. I achieved this by removing the excess html and css that was causing conflicts. This bug on the About page has been resolved.
- I had some issues with the background image not visible after I pushed to Github. The solution to this bug was in the Love Running coursework and I was able to resolve the issue for the final view of the project.
- During the course of the project there were issues with Codeanywhere not loading up my repositary on a few occasions, and also issues with commits not being recognised. I copied my progress to VS Code desktop version and worked from there to have a workspace that I knew would load for me every time, and also see my changes in realtime. I had started to move to Gitpod but encountered conflict issues as can be seen from my git commits. I continued to use Codeanywhere to complete the project.

## Deployment

- The site was deployed to GitHub pages. The steps to deploy are as follows:
- In the GitHub repository, navigate to the Settings tab
- From the source section drop-down menu, select the Master Branch
- Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.

The live link can be followed here - <https://brianmcconway.github.io/Astral-Beard-Productions/index.html>

## Credits

- How to change color on hover in css 2021 <https://www.youtube.com/watch?v=p2XzQq4vq70> A tutorial on hover css I used for my links changing color when hovered over.
- Pixbay, for the royalty free background image.
- Clipart Library Art, for the outline for the hero image.
- Wallpaper Hub, for the hero image filling.
- Karl McConway, for use of his video footage.
- Geoff Cooper for use of his video footage.
- Sheamus O'Neill, for the use of his club logo.
- All music contained in the website is owned by myself the developer.
- Love Running project, as a template for the comment box, and for the the favicon html.
- This Readme file template, for the suggested layout.

## Acknowledgements

- Friends, family and colleagues, for testing my project at every stage, and also for their feedback.
- My Mentor for constructive feedback and direction.
- Support from The Code Institute.