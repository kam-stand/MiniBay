package com.spring.customerservice.service;

import com.spring.customerservice.model.Customer;
import com.spring.customerservice.model.CustomerDTO;
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

    public Customer getById(Long id) {
        return customerRepository.findById(id).orElse(null);
    }

    public List<Customer> getAll() {
        return customerRepository.findAll();
    }

    public CustomerResponse loginUser(CustomerDTO customerDTO) {
        List<Customer> customers = customerRepository.findAll();
        for (Customer customer : customers) {
            if (customer.getEmail().equals(customerDTO.getEmail()) && customer.getPassword().equals(customerDTO.getPassword())) {
                CustomerResponse customerResponse = new CustomerResponse();
                customerResponse.setId(customer.getId());
                customerResponse.setEmail(customer.getEmail());
                customerResponse.setUsername(customer.getUsername());
                return customerResponse;
            }
        }
        return null;
    }

    public CustomerResponse registerUser(CustomerDTO customerDTO) {
        List<Customer> customers = customerRepository.findAll();
        for (Customer customer: customers) {
            if (customer.getEmail().equals(customerDTO.getEmail()) || customer.getUsername().equals(customerDTO.getUsername())) {
                return null;
            }
        }
        Customer customer = new Customer();
        customer.setEmail(customerDTO.getEmail());
        customer.setUsername(customerDTO.getUsername());
        customer.setPassword(customerDTO.getPassword());
        customer.setPhoneNumber(customerDTO.getPhoneNumber());
        save(customer);
        CustomerResponse customerResponse = new CustomerResponse();
        customerResponse.setId(customer.getId());
        customerResponse.setEmail(customer.getEmail());
        customerResponse.setUsername(customer.getUsername());

        return customerResponse;
    }

}
