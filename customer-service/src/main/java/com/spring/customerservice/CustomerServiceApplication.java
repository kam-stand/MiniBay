package com.spring.customerservice;

import com.spring.customerservice.service.CustomerService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.spring.customerservice.model.Customer;

@SpringBootApplication
public class CustomerServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(CustomerServiceApplication.class, args);
	}


    @Bean
    CommandLineRunner initData(CustomerService customerService) {
        return args -> {
            customerService.save(new Customer("bob@example.com", "555-2020", "bob123", "passBob2"));
            customerService.save(new Customer("carol@example.com", "555-3030", "carol456", "passCarol3"));
            customerService.save(new Customer("dave@example.com", "555-4040", "dave77", "passDave4"));
            customerService.save(new Customer("eve@example.com", "555-5050", "eve_smith", "passEve5"));
            customerService.save(new Customer("alice@example.com", "555-1010", "alice", "passAlice1"));
        };
    }


}
