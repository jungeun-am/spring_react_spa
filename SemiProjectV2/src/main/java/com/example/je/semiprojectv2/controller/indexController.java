package com.example.je.semiprojectv2.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class indexController {
    @GetMapping("/")
    public String index() {
        return "Hello World";
    }
}
