package com.spring.configserver;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controller {

    @GetMapping("")
    public String home() {
        return "Hello World, from config server";
    }
}
