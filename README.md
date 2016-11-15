# Data Visualiser

A single page app that loads data from a CSV file and translates the data into graphs that can be dynamically updated by the user.

### Getting Started

Make sure you have node.js installed, if not get it [here](https://nodejs.org/en/download/).

Once you have node installed, clone this repo to your machine and run ```npm install``` in your terminal to install the dependancies. From the terminal then run the server by typing ```npm start```.

Once the server is running you can open your browser and navigate to ```localhost:8080``` to use the app.

### My Approach

 I have recently come across d3.js and was amazed by some of the things people are building with it. As a dedicated data visualisation JavaScript library, I thought this would be a good starting point to try and pull the data from the table and convert it into a graph.

 As well as converting the data into a graph I had to also think about the architecture of the app. I have recently completed a couple of React tutorials and thought the requirements of the app design would be well suited to Reacts component based structure.

 This meant I had to learn d3 from scratch, understand how SVG's work and get a much better grasp of React and Redux. It became clear pretty early on that I was bitting off more than I could chew: the learning curve for d3 is very steep and combining it with React has an even steeper learning curve, not to mention requiring a pretty much expert knowledge of React to start with. It is worth noting that from my research I came to the conclusion that they work very well together and once you understand how they work in unison it is a fantastic tool kit, but at this stage it probably wasn't my best option.

 I settled on using a library based on d3 which is called c3, and has been developed for d3 beginners to help them ease into the steep learning curve. I used c3 to read the data from the CSV and build the graphs, but managed to use d3 to render the tabulated version of the data.

 ### Challenges

 As mentioned my initial plan of combining React and d3 turned out to be biting off more than I could chew at this stage. Even though I dropped React in favour of a standard HTML page and ended up using a simplified d3 library, I found this project tough going in parts.

 The documentation for c3 is very good, but the problem I have had is that due to its simplicity it is not very customisable and this caused me an issue whilst building the graph templates.

 As you can see in my code I have three separate functions which can be called depending on which radio button the user clicks. There is repeated code here and I wanted to separate out a ```generateGraph()```function that would render a baseline graph and then have three separate functions to load in the extra data from the CSV.

 I thought I had this working by using c3's ```chart.load``` but it turns out this only looked like it was working due to the second challenge I had. After a lot of playing about I was unable to refactor the graph functions and had to settle with some repeated code.

 The second challenge I faced was caching issues with Chrome. For some reason I started having to clear my browser cache after every three or four loads of the page otherwise I was getting graphs rendered to the screen that were not meant to be there. This caused a big problem when I thought I had refactored my graph functions, but I was actually just seeing the graphs rendered by the original functions. This roadblock wasted a lot of time but I am glad I spotted it when I did otherwise I would be submitting a broken project.

 ### Going Forward

I am pleased with the final outcome and it was a great introduction to d3/c3 and what it is capable of.

 I would like to pick this project back up later down the line once I have spent more time with the React eco-system and had a lot more time playing around with d3. Reacts component based approach will be ideal for this kind of app, building a single reusable graph component that can be dynamically updated with d3 and Redux would be very slick! Using the full version of d3 would also allow full customisation of rendering the CSV data and combined with React would eliminate any repeated code.
