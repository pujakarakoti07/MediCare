package com.telemed.MainHealthPlus.controller;

import com.telemed.MainHealthPlus.model.Appointment;
import com.telemed.MainHealthPlus.service.AppointmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class AppointmentController {
    @Autowired
    AppointmentService service;

}
