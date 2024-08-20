package com.telemed.MainHealthPlus.repo;

import com.telemed.MainHealthPlus.model.Appointment;
import com.telemed.MainHealthPlus.model.Patient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AppointmentsRepo extends JpaRepository<Appointment, Integer> {
    
}
