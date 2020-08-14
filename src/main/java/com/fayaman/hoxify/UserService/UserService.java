package com.fayaman.hoxify.UserService;

import com.fayaman.hoxify.Model.User;
import com.fayaman.hoxify.repo.UserRepository;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    UserRepository userRepository;
    public BCryptPasswordEncoder encoder;

    public UserService(UserRepository userRepository,BCryptPasswordEncoder bCryptPasswordEncoder){
        this.userRepository=userRepository;
        this.encoder=bCryptPasswordEncoder;
    }

    public User save(User user){
        user.setPassword(encoder.encode(user.getPassword()));
        return userRepository.save(user);
    }
}
