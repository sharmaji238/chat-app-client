import { useInputValidation } from '6pp'
import { Avatar, Dialog, DialogTitle, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { Stack, TextField } from '@mui/material'
import { sampleUsers } from '../../constants/sampleData'
import UserItem from './UserItem'
import { pink } from '../../constants/colors'

const SearchDialog = () => {

  const search = useInputValidation()
  // const handleSearch = (event) => {
  //   event.preventDefault();
  //   const query = event.target.search.value;
  //   console.log("Search query:", query);
  //   // Implement search logic here
  // }
  const handleClose = () => {
    console.log("Dialog closed");
    // Implement close logic here
  }
  const handleSearchClick = () => {
    console.log("Search button clicked");
    // Implement search button logic here
  }

  const users = sampleUsers
  return (
    <Dialog
      open={true}
      onClose={() => console.log('Dialog closed')}
      maxWidth="sm"
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
          <UserItem key={user.id} user={user} />
        ))}
      </List>
      </Stack>
    </Dialog>
  )
}

export default SearchDialog