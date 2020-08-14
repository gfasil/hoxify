package com.fayaman.hoxify.controller;

import com.fayaman.hoxify.Model.User;
import com.fayaman.hoxify.UserService.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/1.0/users")
public class UserController {
    @Autowired
    UserService userService;

    @PostMapping
    public User createUser(User user){
      return  userService.save(user);
    }
}
