package com.fayaman.hoxify.UserService;

import com.fayaman.hoxify.Model.User;
import com.fayaman.hoxify.repo.UserRepository;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    UserRepository userRepository;

    public UserService(UserRepository userRepository){
        this.userRepository=userRepository;
    }

    public User save(User user){
        return userRepository.save(user);
    }
}
