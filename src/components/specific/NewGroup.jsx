
import {Stack, Dialog, DialogTitle, TextField, Button, Typography, Skeleton} from "@mui/material"
import { sampleUsers } from "../../constants/sampleData"
import { useInputValidation } from "6pp"
import UserItem from "./UserItem"
import { useState } from "react"
const NewGroup = () => {

  const [members, setMembers] = useState([]) // Assuming you want to manage selected members
  const [selectedMembers, setSelectedMembers] = useState([]) 
  
  const selectMemberHandler = (id) => {
    console.log( "selectMemberHandler called with id:", id,selectedMembers)
    setSelectedMembers(
    (prev) =>prev.includes(id) 
    ?prev.filter(currElement => currElement !== id)
    :[...prev, id]) }

    console.log("NewGroup",selectedMembers)

  const submitHandler = (user) => { console.log(user)  }
  const closeHandler = (user) => { console.log(user)  }

  const groupName = useInputValidation()
  const isLoading = false // Replace with actual loading state
  return (
    <Dialog 
    // onClose={closeHandler} 
    open={true}>
      <Stack p={{ xs: "1rem", sm: "3rem" }} maxWidth={"25rem"} spacing={"2rem"}>
        <DialogTitle>
          New Group
        </DialogTitle>

        <TextField
          label="Group Name"
          value={groupName.value}
          onChange={groupName.changeHandler}
        />

        <Typography>Members</Typography>

        <Stack>
          {isLoading ? (
            <Skeleton />
          ) : (
            sampleUsers?.map((user) => (
              <UserItem
                user={user}

                key={user._id}
                handler={selectMemberHandler}
                // handlerIsLoading={isLoadingNewGroup}
                isAdded={selectedMembers.includes(user._id)}
              />
            ))
          )}
        </Stack>

        <Stack direction={"row"} justifyContent={"space-evenly"}>
          <Button
            variant="text"
            color="error"
            size="large"
            // onClick={closeHandler}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            size="large"
            // onClick={submitHandler}
            // disabled={isLoadingNewGroup}
          >
            Create
          </Button>
        </Stack>
      </Stack>
    </Dialog>
  )
}

export default NewGroup