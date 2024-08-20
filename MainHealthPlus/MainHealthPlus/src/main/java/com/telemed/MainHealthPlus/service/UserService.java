package com.telemed.MainHealthPlus.service;
import com.telemed.MainHealthPlus.repo.loginRepo;
import com.telemed.MainHealthPlus.model.Login;
import com.telemed.MainHealthPlus.model.Patient;
import com.telemed.MainHealthPlus.repo.Repo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {
    @Autowired
    Repo userRepo;
    @Autowired
    loginRepo repo;
    public String addUser(Patient patient) {
        userRepo.save(patient);
        return patient.getFirstName();
    }
    Patient patient;
    public LoginMessage loginUser(Login loginUser) {
        String msg = "";
        Patient patient1 = userRepo.findByEmail(loginUser.getEmail());
        if (patient1 != null) {
            String password = loginUser.getPassword();
            String encodedPassword = patient1.getPassword();
            Boolean isPwdRight = password.equals(encodedPassword);
            if (isPwdRight) {
                Optional<Patient> patient = userRepo.findOneByEmailAndPassword(loginUser.getEmail(), encodedPassword);
                if (patient.isPresent()) {
                    return new LoginMessage("Login Success", true);
                } else {
                    return new LoginMessage("Login Failed", false);
                }
            } else {
                return new LoginMessage("password Not Match", false);
            }
        }else {
            return new LoginMessage("Email not exits", false);
        }
    }

    public LoginMessage addLogin(Login login) {
        repo.save(login);
        return loginUser(login);
    }
}


