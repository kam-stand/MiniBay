package com.spring.customerservice.controller;

import com.spring.customerservice.model.CustomerDTO;
import com.spring.customerservice.service.CustomerService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/customers")
public class CustomerController {

    private final CustomerService customerService;

    public CustomerController(CustomerService customerService) {
        this.customerService = customerService;
    }


    @GetMapping("")
    public String home() {
        return "Hello World, from customer service";
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody CustomerDTO customerDTO){
        return ResponseEntity.ok(customerService.loginUser(customerDTO));
    }

    @PostMapping("/signin")
    public ResponseEntity<?> registerUser(@RequestBody  CustomerDTO customerDTO){
        return ResponseEntity.ok(customerService.registerUser(customerDTO));
    }
}
