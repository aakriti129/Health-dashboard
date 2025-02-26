package com.example.health_dashboard.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "services")
@AllArgsConstructor
@NoArgsConstructor
public class Service1 {
    @Id
    private String id;
    public String name;
    public String endpointUrl;
    public int checkIntervalSeconds;
    private boolean active = true;

    // Explicit getters
    public String getId() {
        return id;
    }

    public String getEndpointUrl() {
        return endpointUrl;
    }

    public boolean isActive() {
        return active;
    }
}