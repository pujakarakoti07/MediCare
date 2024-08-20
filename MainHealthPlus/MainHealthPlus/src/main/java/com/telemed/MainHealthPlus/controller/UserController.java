package com.telemed.MainHealthPlus.controller;

import com.telemed.MainHealthPlus.model.Login;
import com.telemed.MainHealthPlus.model.Patient;
import com.telemed.MainHealthPlus.service.UserService;
import org.apache.juli.logging.Log;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class UserController {
    @Autowired
    UserService service;
    @PostMapping("/register")
    public void setUserDetails(@RequestBody Patient patient){
        service.addUser(patient);
    }


    @PostMapping("/login")
    public void addLogin(@RequestBody Login login){
        service.addLogin(login);
    }
}
