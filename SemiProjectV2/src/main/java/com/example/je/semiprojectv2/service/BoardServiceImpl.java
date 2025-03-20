package com.example.je.semiprojectv2.service;

import com.example.je.semiprojectv2.domain.Board;
import com.example.je.semiprojectv2.repository.BoardRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class BoardServiceImpl implements BoardService {

    private final BoardRepository boardRepository;

    @Override
    public Board newBoard(Board board) {

        return boardRepository.save(board);
    }

}