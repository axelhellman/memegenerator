import React from 'react';

function Meme(){

  const [meme, setMeme] = React.useState({
       topText: "",
       bottomText: "",
       randomImage: "https://i.imgflip.com/30b1gx.jpg",
   })

   const [allMemeImages, setAllMemeImages] = React.useState([])

  function handleClick() {
    const randomNumber = Math.floor(Math.random() * allMemeImages.length)
    const url = allMemeImages[randomNumber].url
    setMeme(prevState => ({...prevState, randomImage:url}))
        //const {url} = memeList[randomNumber]
  }

  function textChange(event) {
    const {name, value} = event.target
    setMeme(prevMemeState => ({
      ...prevMemeState, [name]: value
    }))

  }

  React.useEffect(() => {
      async function getMemes() {
        const res = await fetch("https://api.imgflip.com/get_memes")
        const data = await res.json()
        setAllMemeImages(data.data.memes)
      }
      getMemes()}, [])

  return (
        <main>
            <div className="form">
                <input
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    name="topText"
                    value={meme.topText}
                    onChange={textChange}
                />
                <input
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={textChange}
                />
                <button
                    className="form--button"
                    onClick={handleClick}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
} export default Meme;
