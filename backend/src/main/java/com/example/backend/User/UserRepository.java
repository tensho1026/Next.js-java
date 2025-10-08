package com.example.backend.User;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

// Userエンティティを操作するためのリポジトリ（DBアクセス層）
public interface UserRepository extends JpaRepository<User, Long> {

    // emailでユーザーを検索するメソッド
    // 例: userRepository.findByEmail("example@test.com");
    Optional<User> findByEmail(String email);
}
