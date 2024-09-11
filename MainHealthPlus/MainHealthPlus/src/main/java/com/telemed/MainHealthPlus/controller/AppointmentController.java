package com.telemed.MainHealthPlus.controller;

import com.telemed.MainHealthPlus.model.Appointment;
import com.telemed.MainHealthPlus.model.Patient;
import com.telemed.MainHealthPlus.service.AppointmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class AppointmentController {
    private final AppointmentService appointmentService;

    public AppointmentController(AppointmentService appointmentService) {
        this.appointmentService = appointmentService;
    }

    @PostMapping("/appointment")
    public ResponseEntity<String> createPatient(@RequestBody Appointment appointment) {
        String result = appointmentService.addAppointment(appointment);
        return new ResponseEntity<String>(result, HttpStatus.CREATED);
    }


    //maybe fetch all appoints
    @GetMapping("/appointment/{id}")
    public ResponseEntity<Appointment> getAppointment(@PathVariable Integer id) {
        Appointment appointment = appointmentService.getAppointment(id);
        if (appointment == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(appointment, HttpStatus.OK);
    }
}
