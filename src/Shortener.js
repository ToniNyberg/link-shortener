import React from 'react'
import linkService from './services/linkService'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Shortener = ({setLongUrl, longUrl, setShortenLink, setUrlCode}) => {

    const addLink = (e) => {
      e.preventDefault()
      const linkObject = {
        longUrl: longUrl,
      }
      
      linkService
      .create(linkObject)
      .then(res => {
        setShortenLink(res.data.shortUrl)
        setUrlCode(res.data.urlCode)
      })
      .catch(err => {
        console.log(err);
      })
    }


    const handleNewLink = (e) => {
        setLongUrl(e.target.value)
    }

  return (
    <form onSubmit={addLink} className='shortener-container'>

        <div className='input-container'>
        <TextField
          id="standard-read-only-input"
          defaultValue="Insert your long link here!"
          value={longUrl}
          onChange={handleNewLink}
        />
        {/* <input 
        type="text" 
        placeholder="add link here"
        /> */}
        <div className='shortenLinkButtonContainer'>
          <Button variant="contained" type="submit">Shorten Link</Button>
        </div>
        </div>
    </form>
  )
}

export default Shortener