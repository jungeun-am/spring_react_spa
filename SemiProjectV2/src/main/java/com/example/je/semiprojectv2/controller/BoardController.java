package com.example.je.semiprojectv2.controller;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/board")
public class BoardController {

    @PostMapping("/write")
    public ResponseEntity<?> writeok() {

        return ResponseEntity.ok().build();
    }
}
