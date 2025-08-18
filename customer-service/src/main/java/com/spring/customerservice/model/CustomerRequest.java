package com.spring.customerservice.model;

import lombok.*;

@Data
@NoArgsConstructor
@Getter
@Setter
public class CustomerRequest {

    private String email;
    private String phoneNumber;
    private String username;
    private String password;

    public CustomerRequest(String email, String phoneNumber, String username) {
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.username = username;
    }
}
