package com.fayaman.hoxify;

import com.fayaman.hoxify.Model.User;
import com.fayaman.hoxify.repo.UserRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;

import static org.assertj.core.api.Assertions.assertThat;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@ActiveProfiles("test")
public class UserControllerTest {

    public static final String API_1_0_USERS = "/api/1.0/users";
    @Autowired
    TestRestTemplate testRestTemplate;
    @Autowired
    UserRepository userRepository;
    @Test
    public void postUser_whenUserIsValid_receiveOk(){
        User user = createValidUser();

        ResponseEntity<Object> result= testRestTemplate.postForEntity(API_1_0_USERS,user,Object.class);
             assertThat(result.getStatusCode())
             .isEqualTo(HttpStatus.OK);
    }


    private User createValidUser() {
        User user=new User();
        user.setName("test_user");
        user.setDisplayName("test-display");
        user.setPassword("pass4word");
        return user;
    }
    public void cleanUp(){
        userRepository.deleteAll();
    }

    @Test
    public void postUser_whenUserIsValid_userSavedTodatabase(){
        User user = createValidUser();
        testRestTemplate.postForEntity(API_1_0_USERS,user,Object.class);

       assertThat(userRepository.count()).isEqualTo(1);

    }

}
