package com.fayaman.hoxify.repo;

import com.fayaman.hoxify.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;

//@Repository
public interface UserRepository extends JpaRepository<User,Long> {
}
