package edu.rice.shortit.shortit;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class })
@RestController
public class ShortitApplication {
    @GetMapping("/")
    public String index() {
        return "Hello";
    }

    public static void main(String[] args) {
        SpringApplication.run(ShortitApplication.class, args);
    }

}
