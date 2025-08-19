package com.spring.customerservice.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@Entity
@NoArgsConstructor
@Getter
@Setter
public class Customer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long Id;
    @Column(nullable = false)
    String email;

    String phoneNumber;

    @Column(nullable = false)
    String username;

    @Column(nullable = false)
    String password;


    public Customer(String email, String phoneNumber, String username, String password) {
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.username = username;
        this.password = password;
    }

}
