package com.telemed.MainHealthPlus.controller;

import com.telemed.MainHealthPlus.model.Login;
import com.telemed.MainHealthPlus.model.Patient;
import com.telemed.MainHealthPlus.service.PatientService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/patient")
public class PatientController {
    //DI
    private final PatientService patientService;

    public PatientController(PatientService patientService) {
        this.patientService = patientService;
    }

    @PostMapping("/register")
    public ResponseEntity<String> createPatient(@RequestBody Patient patient) {

        String result = patientService.createPatient(patient);
        return new ResponseEntity<>(result, HttpStatus.CREATED);
    }

}
