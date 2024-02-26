import { TextField, IconButton, Button } from '@mui/material'
import React, { useState } from 'react'
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import { useChatInfoContext } from '../../context/ChatInfoContext';
import useConversations from '../../hooks/useConversations';
import toast from 'react-hot-toast';

const SearchInput = () => {

    const [search, setSearch] = useState("");
    const { setSelectedConversation } = useChatInfoContext();
    const { conversations } = useConversations();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!search) return;
        if (search.length < 3) {
            return toast.error("Search term must be at least 3 character long");
        }
        console.log("inside handle submit");
        const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLocaleLowerCase()));

        if (conversation) {
            setSelectedConversation(conversation);
            setSearch("");
        } else toast.error("No such user found!");
    };
  return (
      <form onSubmit={handleSubmit}>
          <TextField
              id="outlined-basic"
              label="Search..."
              variant="outlined"
              size='small'
              value={search}
              onChange={(e)=>{setSearch(e.target.value)}}
          />
      <IconButton color="black" aria-label="add to shopping cart" size="medium" onClick={handleSubmit}>
            <PersonSearchIcon fontSize="inherit"/>
        </IconButton>
    </form>
  )
}

export default SearchInput