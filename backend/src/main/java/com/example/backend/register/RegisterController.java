package com.example.backend.register;

import org.springframework.web.bind.annotation.*;

import com.example.backend.User.User;
import com.example.backend.User.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;




@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:3000") // フロントと通信可能にする
public class RegisterController {
    

    @Autowired
    private UserRepository userRepository;

    private BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    // ユーザー登録処理
    @PostMapping("/register")
    public String register(@RequestBody User user) {
        // ① 同じメールアドレスが既に登録されているか確認
        if (userRepository.findByEmail(user.getEmail()).isPresent()) {
            return "Email already exists";
        }

        // ② パスワードを暗号化して保存
        user.setPassword(passwordEncoder.encode(user.getPassword()));

        // ③ DBに保存
        userRepository.save(user);

        // ④ レスポンス返却
        return "User registered successfully";
    }
}
