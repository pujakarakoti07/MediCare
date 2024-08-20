package com.telemed.MainHealthPlus.repo;

import com.telemed.MainHealthPlus.model.Patient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@EnableJpaRepositories
@Repository
public interface Repo extends JpaRepository<Patient, Integer> {
    Optional<Patient> findOneByEmailAndPassword(String email, String password);
    Patient findByEmail(String email);
}
