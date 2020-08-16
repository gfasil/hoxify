package com.fayaman.hoxify.controller;

import com.fayaman.hoxify.Model.User;
import com.fayaman.hoxify.UserService.UserService;
import com.fayaman.hoxify.util.GenericResponse;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/1.0/users")
public class UserController {

    UserService userService;

    public UserController(UserService userService){
        this.userService=userService;
    }
    @PostMapping
    public GenericResponse createUser(@RequestBody User user){

        userService.save(user);
        return new GenericResponse("user created");
    }
}
