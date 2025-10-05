// User.java
package com.example.backend.model;

import java.time.LocalDateTime;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "users")
@Data
public class User {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(nullable = false, unique = true)
  private String username;

  @Column(nullable = false, unique = true) 
  private String email;

  @Column(nullable = false)
  private String password;

   @CreationTimestamp
  @Column(updatable = false)
  private LocalDateTime createdAt; 

  @UpdateTimestamp
  private LocalDateTime updatedAt;  


}
