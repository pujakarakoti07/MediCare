package com.telemed.MainHealthPlus.service;

import com.telemed.MainHealthPlus.model.AmbulanceBooking;
import com.telemed.MainHealthPlus.repo.AmbulanceBookingRepo;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AmbulanceBookingService {

    private final AmbulanceBookingRepo ambulanceBookingRepo;

    public AmbulanceBookingService(AmbulanceBookingRepo ambulanceBookingRepo) {
        this.ambulanceBookingRepo = ambulanceBookingRepo;
    }

    public String bookAmbulance(AmbulanceBooking ambulanceBooking) {
        ambulanceBookingRepo.save(ambulanceBooking);
        return "Ambulance Booked";
    }

    public AmbulanceBooking getAmbulanceBooking(Integer id) {
        return ambulanceBookingRepo.findById(id).orElse(null);
    }

    public List<AmbulanceBooking> getAmbulanceData() {
        List<AmbulanceBooking> employees = ambulanceBookingRepo.findAll();
        return employees;
    }
}
