import { TextField, IconButton, Button } from '@mui/material'
import React from 'react'
import PersonSearchIcon from '@mui/icons-material/PersonSearch';

const SearchInput = () => {
  return (
      <form>
          <TextField
              id="outlined-basic"
              label="Search..."
              variant="outlined"
              size='small'
          />
      <IconButton color="black" aria-label="add to shopping cart" size="medium">
            <PersonSearchIcon fontSize="inherit"/>
        </IconButton>
    </form>
  )
}

export default SearchInput