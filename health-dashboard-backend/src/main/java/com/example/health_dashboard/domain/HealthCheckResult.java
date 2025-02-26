package com.example.health_dashboard.domain;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.time.LocalDateTime;

@Data
@Document(collection = "health_checks")
public class HealthCheckResult {
    @Id
    private String id;
    private String serviceId;
    private LocalDateTime timestamp;
    private boolean isUp;
    private String endpointUrl;

    // Add a constructor
    public HealthCheckResult(String serviceId, LocalDateTime timestamp, boolean isUp, String endpointUrl) {
        this.serviceId = serviceId;
        this.timestamp = timestamp;
        this.isUp = isUp;
        this.endpointUrl = endpointUrl;
    }
}
