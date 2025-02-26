package com.example.health_dashboard.service;

import com.example.health_dashboard.domain.HealthCheckResult;
import com.example.health_dashboard.domain.Service1;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import java.time.LocalDateTime;
import java.util.List;

@Service
public class HealthCheckService {
    @Autowired
    private MongoTemplate mongoTemplate;

    @Autowired
    private RestTemplate restTemplate;

    @Scheduled(fixedRate = 10000)
    public void performHealthChecks() {
        List<Service1> activeService1s = mongoTemplate.findAll(Service1.class)
                .stream()
                .filter(Service1::isActive)
                .toList();

        activeService1s.forEach(service1 -> {
            try {
                ResponseEntity<String> response = restTemplate.getForEntity(service1.getEndpointUrl(), String.class);
                boolean isUp = response.getStatusCode().is2xxSuccessful();
                saveHealthCheckResult(service1, isUp);
            } catch (Exception e) {
                saveHealthCheckResult(service1, false);
            }
        });
    }

    private void saveHealthCheckResult(Service1 service1, boolean isUp) {
        HealthCheckResult result = new HealthCheckResult(
                service1.getId(),
                LocalDateTime.now(),
                isUp,
                service1.getEndpointUrl()
        );
        mongoTemplate.save(result, "health_checks");
    }
}