package com.spring.customerservice.controller;

import com.spring.customerservice.model.CustomerLogin;
import com.spring.customerservice.model.CustomerRequest;
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


    @GetMapping("/index")
    public String home() {
        return "Hello World, from customer service";
    }


    @GetMapping("")
    public ResponseEntity<?> getAll(){
        return ResponseEntity.ok(customerService.getAll());
    }

    @GetMapping("{id}")
    public ResponseEntity<?> getById(@PathVariable Long id){
        return ResponseEntity.ok(customerService.getById(id));
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody CustomerLogin customerLogin){
        return ResponseEntity.ok(customerService.loginUser(customerLogin));
    }

    @PostMapping("/signin")
    public ResponseEntity<?> registerUser(@RequestBody CustomerRequest customerRequest){
        return ResponseEntity.ok(customerService.registerUser(customerRequest));
    }
}
