package com.spring.customerservice;

import com.spring.customerservice.model.Customer;
import com.spring.customerservice.model.CustomerLogin;
import com.spring.customerservice.model.CustomerRequest;
import com.spring.customerservice.model.CustomerResponse;
import com.spring.customerservice.repository.CustomerRepository;
import com.spring.customerservice.service.CustomerService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import java.util.Arrays;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class CustomerServiceMockTests {

    private CustomerRepository customerRepository;
    private CustomerService customerService;

    @BeforeEach
    void setup() {
        // Mock the repository
        customerRepository = mock(CustomerRepository.class);

        // Sample customers
        Customer alice = new Customer("alice@example.com", "555-5678", "alice", "alicePass");
        alice.setId(1L);
        Customer bob = new Customer("bob@example.com", "555-9012", "bob", "bobPass");
        bob.setId(2L);

        // Mock repository behavior
        when(customerRepository.findAll()).thenReturn(Arrays.asList(alice, bob));

        when(customerRepository.save(any(Customer.class)))
                .thenAnswer(invocation -> {
                    Customer c = invocation.getArgument(0);
                    c.setId(100L); // assign an ID for testing
                    return c;
                });

        // Inject mock into service
        customerService = new CustomerService(customerRepository);
    }

    @Test
    void testLoginSuccess() {
        CustomerLogin login = new CustomerLogin("alice", "alicePass");
        CustomerResponse response = customerService.loginUser(login);

        assertNotNull(response);
        assertEquals("alice", response.getUsername());
        System.out.println("Login success: " + response);
    }

    @Test
    void testRegisterNewUser() {
        CustomerRequest request = new CustomerRequest("new@example.com", "555-7777", "newuser", "newPass");
        CustomerResponse response = customerService.registerUser(request);

        assertNotNull(response);
        assertEquals("newuser", response.getUsername());
        System.out.println("Registered new user: " + response);
    }
}
