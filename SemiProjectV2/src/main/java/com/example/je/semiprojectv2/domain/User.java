package com.example.je.semiprojectv2.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name ="users")
@Data @Builder
@AllArgsConstructor
@NoArgsConstructor
public class User {

//    이대로 테이블 DB에 구성됨
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String userid;

    @Column(nullable = false, unique = true)
    private String passwd;

    @Column(nullable = false, unique = true)
    private String name;

    @Column(nullable = false, unique = true)
    private String email;

    // insert, update시 해당 컬럼 제외, 자동적으로 추가 됨
    @CreationTimestamp
    @Column(insertable = false, updatable = false)
    private LocalDateTime regdate;


}
