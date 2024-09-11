package com.telemed.MainHealthPlus.service;

import org.springframework.stereotype.Service;

@Service
public class Chat {

    public String generateResponse(String message) {
        if (message == null || message.trim().isEmpty()) {
            return "Please enter a message.";
        }
        // Custom logic to generate a response based on the input message
        if (message.toLowerCase().contains("hello")) {
            return "Hi there! How can I assist you today?";
        } else if (message.toLowerCase().contains("joke")) {
            return "Why don't scientists trust atoms? Because they make up everything!";
        } else {
            return "I'm not sure how to respond to that. Can you try asking something else?";
        }
    }
}
