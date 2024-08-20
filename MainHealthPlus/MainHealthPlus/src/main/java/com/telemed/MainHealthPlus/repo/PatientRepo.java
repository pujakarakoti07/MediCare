package com.telemed.MainHealthPlus.repo;

import com.telemed.MainHealthPlus.model.Appointment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PatientRepo extends JpaRepository<Appointment, Integer> {
}
