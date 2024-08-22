package com.telemed.MainHealthPlus.controller;

import com.telemed.MainHealthPlus.model.AmbulanceBooking;
import com.telemed.MainHealthPlus.service.AmbulanceBookingService;
import com.telemed.MainHealthPlus.service.GoogleMapsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;



@RestController
@RequestMapping("/ambulance")
@CrossOrigin(origins = "http://localhost:3000")
public class AmbulanceController {
    private final GoogleMapsService googleMapsService;
    private final AmbulanceBookingService ambulanceBookingService;


    public AmbulanceController(GoogleMapsService googleMapsService, AmbulanceBookingService ambulanceBookingService) {
        this.googleMapsService = googleMapsService;
        this.ambulanceBookingService = ambulanceBookingService;
    }

    @PostMapping("/book")
    public ResponseEntity<String> bookAmbulance(@RequestBody AmbulanceBooking booking) {
        String st = ambulanceBookingService.bookAmbulance(booking);
        return new ResponseEntity<String>(st, HttpStatus.CREATED);
    }

    @GetMapping("/nearby-hospitals")
    public ResponseEntity<List<String>> getNearbyHospitals(@RequestParam double latitude, @RequestParam double longitude) {
        List<String> nearbyHospitals = googleMapsService.getNearbyHospitals(latitude, longitude);
        return new ResponseEntity<>(nearbyHospitals, HttpStatus.OK);
    }
    @GetMapping("/data")
    public void getAmbulanceData() {
        ambulanceBookingService.getAmbulanceData();
    }
}