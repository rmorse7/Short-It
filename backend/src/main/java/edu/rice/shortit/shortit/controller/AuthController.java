package edu.rice.shortit.shortit.controller;

import edu.rice.shortit.shortit.model.ResponseWrapper;
import edu.rice.shortit.shortit.model.User;
import edu.rice.shortit.shortit.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;

import static edu.rice.shortit.shortit.model.ResponseWrapper.OK_MESSAGE;

@RestController
public class AuthController {
    @Autowired
    AuthService authService;

    @PostMapping("/login")
    public ResponseWrapper login(@RequestParam("username") String username, @RequestParam("password") String password, HttpServletResponse response) {
        AuthService.LoginResult loginResult = authService.login(username,password);
        String responseMessage;
        if (loginResult != null){
            responseMessage = OK_MESSAGE;
            Cookie cookie = new Cookie("sid", loginResult.sid.toString());
            response.addCookie(cookie);
            return new ResponseWrapper(responseMessage, loginResult.user);
        } else {
            responseMessage = "Username and/or password don't match!";
            return new ResponseWrapper(responseMessage, null);
        }
    }

    @PostMapping("/register")
    public ResponseWrapper register(@RequestParam("username") String username, @RequestParam("password") String password) {
        User user = authService.register(username, password);
        String responseMessage = user != null ? OK_MESSAGE : "Username already exists!";
        return new ResponseWrapper(responseMessage, user);
    }

    @GetMapping("/logout")
    public boolean logout() {
        return true;
    }
}
