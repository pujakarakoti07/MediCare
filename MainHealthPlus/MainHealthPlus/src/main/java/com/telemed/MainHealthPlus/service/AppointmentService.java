package com.telemed.MainHealthPlus.service;

import com.telemed.MainHealthPlus.model.Appointment;
import com.telemed.MainHealthPlus.repo.PatientRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AppointmentService {
    @Autowired
    PatientRepo repo1;

    public void setAppointment(Appointment a) {
        repo1.save(a);
    }
}
