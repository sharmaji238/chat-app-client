import { isValidUsername } from '6pp';

export const usernameValidator = (username) => {

    // Check if the username is at least 3 characters long
    if (username.length >= 3 && /^[a-zA-Z0-9_]+$/.test(username)) {
        return { isValid: true };
    }
    // If not, return an error message
    else {
        // Return an object with isValid set to false and an error message
        return {
            isValid: false,
            errorMessage: "Username must be at least 3 characters long and can only contain letters, numbers, and underscores.",
        }
    }

    // if(!isValidUsername)
    //       return {
    //         isValid: false,
    //         errorMessage: "Username must be at least 3 characters long and can only contain letters, numbers, and underscores.",
    //      } 

}


export const bioValidator = (bio) => {

    // Check if the bio is at least 3 characters long
    if (bio.length >= 5) {
        return { isValid: true };
    }
    // If not, return an error message
    else {
        // Return an object with isValid set to false and an error message
        return {
            isValid: false,
            errorMessage: "bio must be at least 5 characters long and can only contain letters, numbers, and underscores.",
        }
    }
}