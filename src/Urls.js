import React, { useState, useEffect } from 'react'
import linkservice from './services/linkService'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';

const Urls = () => {
  const [urls, setUrls] = useState([])

  useEffect(() => {
      linkservice
      .getAll()
      .then(response => {
        setUrls(response.data)
      })
  }, [])

  const deleteLink = (urlCode) => {
    linkservice
    .remove(urlCode)
    .then(response => {
      console.log(response.data);
    })
    setUrls(urls.filter(u => u.urlCode !== urlCode))
  }

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Long link</TableCell>
              <TableCell align="center">Short link</TableCell>
              <TableCell align="center">Statistics</TableCell>
              <TableCell align="center">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {urls.map((u, i) => {
            return <TableRow key={i}>
              <TableCell align="center" style={{ whiteSpace: "normal", wordBreak: "break-word"}}>{u.longUrl}</TableCell>
              <TableCell align="center"><a href={u.longUrl} target="_blank" rel="noreferrer">{u.shortUrl}</a></TableCell>
              <TableCell align="center"><Link to={`/statistics/${u.urlCode}`}>Statistics</Link></TableCell>
              <TableCell align="center"><button onClick={() => deleteLink(u.urlCode)}>Delete</button></TableCell>
              </TableRow>
          })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
      
  )
}

export default Urls