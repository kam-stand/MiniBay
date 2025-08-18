package com.spring.customerservice.model;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

public record CustomerLogin (String username, String password){
}
