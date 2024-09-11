package com.telemed.MainHealthPlus.service;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class HuggingFaceService {
    @Value("${huggingface.api.key}")
    private String apiKey;

    private static final String API_URL = "https://api-inference.huggingface.co/models/gpt2";

    public String generateResponse(String message) throws Exception {
        try (CloseableHttpClient httpClient = HttpClients.createDefault()) {
            HttpPost post = new HttpPost(API_URL);
            post.setHeader("Authorization", "Bearer " + apiKey);
            post.setHeader("Content-Type", "application/json");

            String json = "{\"inputs\":\"" + message + "\"}";
            post.setEntity(new StringEntity(json));

            try (CloseableHttpResponse response = httpClient.execute(post)) {
                ObjectMapper mapper = new ObjectMapper();
                JsonNode jsonResponse = mapper.readTree(response.getEntity().getContent());
                return jsonResponse.get(0).get("generated_text").asText();
            }
        }
    }

}
