package com.spring.customerservice.service;

import com.spring.customerservice.model.Customer;
import com.spring.customerservice.model.CustomerLogin;
import com.spring.customerservice.model.CustomerRequest;
import com.spring.customerservice.model.CustomerResponse;
import com.spring.customerservice.repository.CustomerRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerService {
    private final CustomerRepository customerRepository;

    public CustomerService(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }

    public Customer save(Customer customer) {
        return customerRepository.save(customer);
    }

    public CustomerResponse getById(Long id) {
        Customer customer = customerRepository.findById(id).orElse(null);
        if (customer == null) {
            return null;
        }
        return  new CustomerResponse(customer.getId(), customer.getEmail(), customer.getUsername());
    }

    public List<CustomerResponse> getAll() {

        return customerRepository.findAll()
                .stream()
                .map(customer -> new CustomerResponse(
                        customer.getId(),
                        customer.getEmail(),
                        customer.getUsername()
                ))
                .toList();
    }

    public Customer getCustomerByUsername(String username) {
        Customer customer = customerRepository
                            .findAll()
                .stream()
                .filter(cust -> cust.getUsername().equals(username))
                .findFirst()
                .orElse(null);
        if (customer == null) {
            return null;
        }

        return customer;

    }

    public CustomerResponse loginUser(CustomerLogin customerLogin) {

        // check if username exits if so check password
        Customer customer = getCustomerByUsername(customerLogin.username());
        if (customer != null && customer.getPassword().equals(customerLogin.password())) {
            return new CustomerResponse(customer.getId(), customer.getEmail(), customer.getUsername());
        }

        return null;
    }

    public CustomerResponse registerUser(CustomerRequest customerRequest) {
        // check if username exists
        Customer customer = getCustomerByUsername(customerRequest.getUsername());
        if (customer == null) {
            Customer customer1 = new Customer(customerRequest.getEmail(), customerRequest.getPhoneNumber(), customerRequest.getUsername(), customerRequest.getPassword());
            return new CustomerResponse(customerRepository.save(customer1).getId(), customer1.getEmail(), customer1.getUsername());
        }
        return null;
    }

}
