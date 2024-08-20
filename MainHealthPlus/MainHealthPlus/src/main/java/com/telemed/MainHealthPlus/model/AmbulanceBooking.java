package com.telemed.MainHealthPlus.model;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class AmbulanceBooking {

    @Id
    @GeneratedValue
    private Integer id;
    private String patientName;
    private String patientNumber;
    private String address;
    private String selectedHospital;

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

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getSelectedHospital() {
        return selectedHospital;
    }
    public void setSelectedHospital(String selectedHospital) {
        this.selectedHospital = selectedHospital;
    }
}

