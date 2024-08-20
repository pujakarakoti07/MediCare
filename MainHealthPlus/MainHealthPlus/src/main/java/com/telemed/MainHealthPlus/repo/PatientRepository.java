package com.telemed.MainHealthPlus.repo;

import com.telemed.MainHealthPlus.model.Appointment;
import com.telemed.MainHealthPlus.model.Patient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PatientRepository extends JpaRepository<Patient, Integer> {
    Patient findByEmailAndPassword(String email, String password);
}
