import React, { useCallback, useRef } from "react"
import Download from "./Download"

function Form() {
    const [meme, setMeme] = React.useState({
        topText:"",
        bottomText:"",
        randomImage:"http://i.imgflip.com/1bij.jpg"
    })
    
    const [allMemes, setAllMemes] = React.useState([])

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])
    
    function getMemeImage() {
        const memeArray = allMemes
        const randomNumber = Math.floor(Math.random() * memeArray.length)
        const imagePath = memeArray[randomNumber].url
        setMeme(prevMeme => ({...prevMeme,  randomImage:imagePath}))
    }

    function handleTextChange(event) {
        const {name, value} = event.target
        setMeme(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    return (
        <div className="form-wrapper">
            <div className="form">
                <div className="form-input-wrapper">
                    <input type="text" placeholder="Top text" className="form-input-top" name="topText" onChange={handleTextChange} value={meme.topText}/>
                    <input type="text" placeholder="Bottom text" className="form-input-bottom" name="bottomText" onChange={handleTextChange} value={meme.bottomText}/>
                </div>
                <button className="form-button" onClick={getMemeImage}>Get a new meme image</button>
            </div>
            <div className="meme-wrapper" id="meme-download">
                <img src={meme.randomImage} className="meme"/>
                <div className="meme-top-text">{meme.topText}</div>
                <div className="meme-bottom-text">{meme.bottomText}</div>
            </div>
            <Download/>
        </div>
    )
}

export default Form