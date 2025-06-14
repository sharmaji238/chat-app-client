import { useInputValidation } from '6pp'
import { Avatar, Dialog, DialogTitle, List, Stack, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { sampleUsers } from '../../constants/sampleData'
import UserItem from './UserItem'
import { pink } from '../../constants/colors'
import { useState } from 'react'

const SearchDialog = () => {

  const search = useInputValidation()
  const handleClose = () => {
    console.log("Dialog closed");
    // Implement close logic here
  }
  const handleSearchClick = () => {
    console.log("Search button clicked");
    // Implement search button logic here
  }

  const addFriendHandler = (userId) => {
    console.log("Add friend clicked for user:", userId);
    // Implement add friend logic here
  }
 let isLoadingSendFriendRequest = false; // Replace with actual loading state if needed
  const [users,setUsers] = useState(sampleUsers)
  return (
    <Dialog
      open={true}
      onClose={() => console.log('Dialog closed')}
      // maxWidth="sm"
    // fullWidth
    >
      <Stack p={2} direction={"column"} width={"25rem"}>
        <DialogTitle
          p={2} direction={"column"}
          width={"25rem"}
        >Find People</DialogTitle>
        <TextField
          color={pink}
          value={search.value}
          onChange={search.onChange}
          variant="outlined"
          placeholder="Search for users or groups"
          fullWidth
          style={{ marginBottom: '1rem' }}
          InputProps={{
            startAdornment: (
              <SearchIcon sx={{marginRight:'0.75rem'}}/>
            ),
          }}
        />

      <List>
        {users.map((user) => (
          <UserItem key={user.id} user={user} 
          handler={addFriendHandler}
          handlerIsLoading={isLoadingSendFriendRequest} // Replace with actual loading state if needed
          />
        ))}
      </List>
      </Stack>
    </Dialog>
  )
}

export default SearchDialog