package com.telemed.MainHealthPlus.controller;

import com.telemed.MainHealthPlus.model.ChatResponse;
import com.telemed.MainHealthPlus.service.Chat;
import com.telemed.MainHealthPlus.service.HuggingFaceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class ChatbotController {
    @Autowired
    private final HuggingFaceService huggingFaceService;

    public ChatbotController(HuggingFaceService huggingFaceService) {
        this.huggingFaceService = huggingFaceService;
    }

    @PostMapping("/chat")
    public ChatResponse chat(@RequestParam String message) {
        try {
            String response = huggingFaceService.generateResponse(message);
            return new ChatResponse(response);
        } catch (Exception e) {
            return new ChatResponse("An error occurred: " + e.getMessage());
        }
    }
}
