package com.telemed.MainHealthPlus.repo;

import com.telemed.MainHealthPlus.model.AmbulanceBooking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AmbulanceBookingRepo extends JpaRepository<AmbulanceBooking, Integer> {
}
