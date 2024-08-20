package com.telemed.MainHealthPlus.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import org.springframework.stereotype.Component;
import java.util.Date;
import java.util.Date;

@Component
@Entity
public class Appointment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String patientName;
    private String patientNumber;
    private String patientGender;
    private Date appointmentTime;
    private String preferredMode;
    public Appointment(){}
    public void Appointment(String patientGender, String patientName, Date appointmentTime, String preferredMode, String patientNumber){
        this.patientGender=patientGender;
        this.patientName=patientName;
        this.appointmentTime=appointmentTime;
        this.preferredMode=preferredMode;
        this.patientNumber=patientNumber;
    }
    public void setId(int id) {
        this.id = id;
    }

    public String getPatientName() {
        return patientName;
    }

    public void setPatientName(String patientName) {
        this.patientName = patientName;
    }

    public int getId() {
        return id;
    }

    public String getPatientGender() {
        return patientGender;
    }

    public void setPatientGender(String patientGender) {
        this.patientGender = patientGender;
    }

    public String getPreferredMode() {
        return preferredMode;
    }

    public String getPatientNumber() {
        return patientNumber;
    }

    public void setPatientNumber(String patientNumber) {
        this.patientNumber = patientNumber;
    }

    public void setPrefferedMode(String prefferedMode) {
        this.preferredMode = prefferedMode;
    }

    public void setAppointmentTime(Date appointmentTime) {
        this.appointmentTime = appointmentTime;
    }

    public Date getAppointmentTime() {
        return appointmentTime;
    }
}
