package com.example.SpringAula69;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude = { SecurityAutoConfiguration.class })
public class SpringAula69Application {

	public static void main(String[] args) {
		SpringApplication.run(SpringAula69Application.class, args);
	}

}
