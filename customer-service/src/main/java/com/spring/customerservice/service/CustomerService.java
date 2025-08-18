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

    public CustomerRequest getById(Long id) {
        Customer customer = customerRepository.findById(id).orElse(null);
        if (customer == null) {
            return null;
        }
        return  new CustomerRequest(customer.getEmail(), customer.getPhoneNumber(), customer.getUsername());
    }

    public List<CustomerRequest> getAll() {

        return customerRepository.findAll()
                .stream()
                .map(customer -> new CustomerRequest(
                        customer.getEmail(),
                        customer.getPhoneNumber(),
                        customer.getUsername()
                ))
                .toList();
    }

    public CustomerResponse loginUser(CustomerLogin customerLogin) {
        List<Customer> customers = customerRepository.findAll();
        for (Customer customer : customers) {
            if (customer.getUsername().equals(customerLogin.username()) && customer.getPassword().equals(customerLogin.password())) {
                CustomerResponse customerResponse = new CustomerResponse();
                customerResponse.setId(customer.getId());
                customerResponse.setEmail(customer.getEmail());
                customerResponse.setUsername(customer.getUsername());
                return customerResponse;
            }
        }
        return null;
    }

    public CustomerResponse registerUser(CustomerRequest customerRequest) {
        List<Customer> customers = customerRepository.findAll();
        for (Customer customer: customers) {
            if (customer.getEmail().equals(customerRequest.getEmail()) || customer.getUsername().equals(customerRequest.getUsername())) {
                return null;
            }
        }
        Customer customer = new Customer();
        customer.setEmail(customerRequest.getEmail());
        customer.setUsername(customerRequest.getUsername());
        customer.setPassword(customerRequest.getPassword());
        customer.setPhoneNumber(customerRequest.getPhoneNumber());
        save(customer);
        CustomerResponse customerResponse = new CustomerResponse();
        customerResponse.setId(customer.getId());
        customerResponse.setEmail(customer.getEmail());
        customerResponse.setUsername(customer.getUsername());

        return customerResponse;
    }

}
