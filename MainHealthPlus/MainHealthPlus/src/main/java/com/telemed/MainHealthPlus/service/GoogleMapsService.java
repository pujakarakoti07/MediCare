package com.telemed.MainHealthPlus.service;

import com.google.maps.GeoApiContext;
import com.google.maps.PlacesApi;
import com.google.maps.model.PlacesSearchResponse;
import com.google.maps.model.PlacesSearchResult;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class GoogleMapsService {

//    @Value("${google.maps.api.key}")
//    private String API_KEY;
     private static final String API_KEY = "AIzaSyDplEzPbW-VMv4ylEOrgHOxTT9_-nDJrfY";

    private final GeoApiContext context = new GeoApiContext.Builder()
            .apiKey(API_KEY)
            .build();

    public List<String> getNearbyHospitals(double latitude, double longitude) {
        List<String> hospitals = new ArrayList<>();
        try {
            PlacesSearchResponse response = PlacesApi
                    .nearbySearchQuery(context, new com.google.maps.model.LatLng(latitude, longitude))
                    .keyword("hospital")
                    .radius(5000)
                    .await();

            for (PlacesSearchResult result : response.results) {
                hospitals.add(result.name);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return hospitals;
    }
}
