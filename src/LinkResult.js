import { IconButton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import "./App.css"
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CopyToClipboard from 'react-copy-to-clipboard';

const LinkResult = ({shortenLink, urlCode}) => {

    const [copied, setCopied] = useState(false);
 useEffect(() => {
  if (copied) {
     setTimeout(()=> {
        setCopied(false)
     }, 2000)
  }
 }, [copied])
  return (
      <div>
      {shortenLink &&
      <>
        <div className='resultContainer'>
      <a 
        href={shortenLink} 
        target="_blank" 
        rel="noreferrer"
        className="shortenLink">{shortenLink}</a>
           <CopyToClipboard 
            text={shortenLink}
            onCopy={() => setCopied(true)}>
          <IconButton
                  aria-label="toggle password visibility"
                  >
                  <ContentCopyIcon /> 
                </IconButton>
        </CopyToClipboard>
        {copied ? <span style={{ color: "green" }}>Copied</span> : null}
        </div>
        <div className='statisticsLinksContainer'>
        <Link to={`statistics/${urlCode}`} target="_blank">Statistics for this link</Link>
        <span className='stats'>
        <Link to={"statistics"} target="_blank">All links</Link>
        </span>
        </div>
      </>
      }
    </div>
  )
}

export default LinkResult