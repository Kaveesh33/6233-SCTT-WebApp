package com.kazzabey.smsbacknend.exeption;

public class UserNotFoundException extends RuntimeException{
    public UserNotFoundException(Long id) {
        super("Could not found the User with the given  id"+ id);
    }
}
