package com.example.health_dashboard.controller;

import com.example.health_dashboard.domain.HealthCheckResult;
import com.example.health_dashboard.domain.Service1;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/services")
public class ServiceController {

    @Autowired
    private MongoTemplate mongoTemplate;

    // Add a new service1 to monitor
    @PostMapping
    public Service1 addService(@RequestBody Service1 service1) {
        return mongoTemplate.save(service1);
    }

    // List all monitored services
    @GetMapping
    public List<Service1> getAllServices() {
        return mongoTemplate.findAll(Service1.class);
    }

    // Get health check history for a service
    @GetMapping("/{serviceId}/checks")
    public List<HealthCheckResult> getHealthChecks(@PathVariable String serviceId) {
        Query query = new Query(Criteria.where("serviceId").is(serviceId));
        return mongoTemplate.find(query, HealthCheckResult.class);
    }
}
