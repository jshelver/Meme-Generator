# Check out the project [here](https://jshelver.github.io/Meme-Generator/)
## How I got the random images
I pulled 100 images from this [imgflip api](https://api.imgflip.com/get_memes) with the `React.useEffect` function and one is randomly chosen each the user clicks a button.


## How I enabled the user to add their own text to the image
I used `React.useState` function to dynamically update the text whenever a change is detected in either of the text inputs.

## How I implemented the download image feature
First, I installed 2 modules, [html-to-image](https://www.npmjs.com/package/html-to-image#toPng) and [downloadjs](https://github.com/rndme/download). Then I used the `toPNG` function from the html-to-image module to get the url for the div that contained both the image and each of the text elements. Lastly, I used the `download` function from the downloadjs module to download the file to the user's computer. 
