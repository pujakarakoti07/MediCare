package com.telemed.MainHealthPlus.service;
import com.telemed.MainHealthPlus.repo.PatientRepository;
import com.telemed.MainHealthPlus.model.Patient;
import org.springframework.stereotype.Service;

@Service
public class PatientService {

    private final PatientRepository patientRepository;

    public PatientService(PatientRepository patientRepository) {
        this.patientRepository = patientRepository;
    }

    public String createPatient(Patient patient) {
        patientRepository.save(patient);
        return "Patient creation Success";
    }
}


