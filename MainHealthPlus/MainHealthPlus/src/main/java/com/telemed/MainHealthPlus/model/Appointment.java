package com.telemed.MainHealthPlus.model;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import java.time.LocalDateTime;

@Entity
public class Appointment {
    @Id
    @GeneratedValue
    private Integer id;
    private String patientName;
    private String patientNumber;
    private String patientGender;
    private LocalDateTime appointmentTime;
    private String preferredMode;

    public Appointment() {
    }

    public Appointment(Integer id, String patientName, String patientNumber, String patientGender, LocalDateTime appointmentTime, String preferredMode) {
        this.id = id;
        this.patientName = patientName;
        this.patientNumber = patientNumber;
        this.patientGender = patientGender;
        this.appointmentTime = appointmentTime;
        this.preferredMode = preferredMode;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getPatientName() {
        return patientName;
    }

    public void setPatientName(String patientName) {
        this.patientName = patientName;
    }

    public String getPatientNumber() {
        return patientNumber;
    }

    public void setPatientNumber(String patientNumber) {
        this.patientNumber = patientNumber;
    }

    public String getPatientGender() {
        return patientGender;
    }

    public void setPatientGender(String patientGender) {
        this.patientGender = patientGender;
    }

    public LocalDateTime getAppointmentTime() {
        return appointmentTime;
    }

    public void setAppointmentTime(LocalDateTime appointmentTime) {
        this.appointmentTime = appointmentTime;
    }

    public String getPreferredMode() {
        return preferredMode;
    }

    public void setPreferredMode(String preferredMode) {
        this.preferredMode = preferredMode;
    }

    @Override
    public String toString() {
        return "Appointment{" +
                "id=" + id +
                ", patientName='" + patientName + '\'' +
                ", patientNumber='" + patientNumber + '\'' +
                ", patientGender='" + patientGender + '\'' +
                ", appointmentTime=" + appointmentTime +
                ", preferredMode='" + preferredMode + '\'' +
                '}';
    }
}
