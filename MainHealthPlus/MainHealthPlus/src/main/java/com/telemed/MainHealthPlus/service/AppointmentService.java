package com.telemed.MainHealthPlus.service;

import com.telemed.MainHealthPlus.model.Appointment;
import com.telemed.MainHealthPlus.repo.AppointmentsRepo;
import org.springframework.stereotype.Service;

@Service
public class AppointmentService {
    private final AppointmentsRepo appointmentsRepo;

    public AppointmentService(AppointmentsRepo appointmentsRepo) {
        this.appointmentsRepo = appointmentsRepo;
    }

    public String addAppointment(Appointment appointment) {
        appointmentsRepo.save(appointment);
        return "Appointment done";
    }

    public Appointment getAppointment(Integer id) {
        return appointmentsRepo.findById(id).orElse(null);
    }
}
