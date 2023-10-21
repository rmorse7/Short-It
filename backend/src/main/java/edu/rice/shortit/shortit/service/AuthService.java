package edu.rice.shortit.shortit.service;

import edu.rice.shortit.shortit.model.User;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKeyFactory;
import javax.crypto.spec.PBEKeySpec;
import java.security.NoSuchAlgorithmException;
import java.security.SecureRandom;
import java.security.spec.InvalidKeySpecException;
import java.security.spec.KeySpec;
import java.util.ArrayList;
import java.util.Base64;
import java.util.HashMap;

@Service
public class AuthService {
    ArrayList<User> users = new ArrayList<>();
    HashMap<Long, User> sessions = new HashMap<>();

    public User register(String username, String password) {
        for (User user : users) {
            if (user.getUsername().equals(username)) {
                return null;
            }
        }
        SecureRandom random = new SecureRandom();
        byte[] salt = new byte[16];
        random.nextBytes(salt);
        String encodedSalt = Base64.getEncoder().encodeToString(salt);
        String hashedPassword = hash(password, encodedSalt);
        User user = new User(username, hashedPassword, encodedSalt);
        users.add(user);//insert into database
        return user;
    }

    @AllArgsConstructor
    public static class LoginResult {
        public Long sid;
        public User user;
    }

    public LoginResult login(String username, String password) {
        for (User user : users) {
            if (user.getUsername().equals(username)) {
                String userSalt = user.getSalt();
                String currentHashedPassword = hash(password,userSalt);
                if (user.getPassword().equals(currentHashedPassword)) {
                    Long sessionId = System.currentTimeMillis();
                    sessions.put(sessionId, user);
                    return new LoginResult(sessionId, user);
                }
            } else {
                return null;
            }
        }
        return null;
    }


    private String hash(String password,String salt) {
        byte[] hashedValue = null;
        KeySpec spec = new PBEKeySpec(password.toCharArray(), salt.getBytes(), 5000, 128);
        try {
            SecretKeyFactory factory = SecretKeyFactory.getInstance("PBKDF2WithHmacSHA1");
            hashedValue = factory.generateSecret(spec).getEncoded();
        } catch (InvalidKeySpecException | NoSuchAlgorithmException e) {
            System.out.println("error hash");
        }
        return Base64.getEncoder().encodeToString(hashedValue);

    }
}
