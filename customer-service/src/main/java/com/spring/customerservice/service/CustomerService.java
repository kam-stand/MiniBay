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

    public CustomerResponse getCustomerByUsername(String username) {
        Customer customer = customerRepository.findAll().stream().filter(cust -> cust.getUsername().equals(username)).findFirst().orElse(null);
        if (customer == null) {
            return null;
        }
        return  new CustomerResponse(customer.getId(), customer.getEmail(), customer.getUsername());
    }

    public CustomerResponse loginUser(CustomerLogin customerLogin) {
        CustomerResponse response = getCustomerByUsername(customerLogin.username());
        if (response != null){
            return response;
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
