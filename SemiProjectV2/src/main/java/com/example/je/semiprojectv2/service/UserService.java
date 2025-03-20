package com.example.je.semiprojectv2.service;


import com.example.je.semiprojectv2.domain.User;

public interface UserService {

    User newUser(User user);

    User loginUser(User user);
}
