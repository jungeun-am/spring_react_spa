package com.example.je.semiprojectv2.repository;

import com.example.je.semiprojectv2.domain.Board;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BoardRepository extends JpaRepository<Board, Long> {

}