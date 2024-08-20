package com.telemed.MainHealthPlus.controller;

import com.telemed.MainHealthPlus.model.Login;
import com.telemed.MainHealthPlus.model.Patient;
import com.telemed.MainHealthPlus.service.PatientService;
import org.apache.juli.logging.Log;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/patient")
@CrossOrigin(origins = "http://localhost:3000")
public class PatientController {
    //DI
    private final PatientService patientService;

    public PatientController(PatientService patientService) {
        this.patientService = patientService;
    }

    @PostMapping("/register")
    public ResponseEntity<String> createPatient(@RequestBody Patient patient) {

        String result = patientService.createPatient(patient);
        return new ResponseEntity<String>(result, HttpStatus.CREATED);
    }

    @PostMapping("/login")
    public ResponseEntity<Patient> loginPatient(@RequestBody Login login) {

        Patient searchedPatient = patientService.loginPatient(login);

        if (searchedPatient != null) {
            return new ResponseEntity<Patient>(searchedPatient, HttpStatus.OK);

        }
        return new ResponseEntity<>(null, HttpStatus.UNAUTHORIZED);
    }

}
