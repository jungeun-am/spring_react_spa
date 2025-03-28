package com.example.je.semiprojectv2.domain;

import lombok.Data;

import java.util.List;

@Data

public class BoardReplyDTO {
    private Board bd;
    private List<?> rps; // 댓글들이 목록으로

    public BoardReplyDTO(Board bd, List<?> rps) {
        this.bd = bd;
        this.rps = rps;
    }
}


