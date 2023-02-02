package com.medfinder.medfinder;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;

@SpringBootApplication
@EnableWebSecurity
public class MedfinderApplication {

	public static void main(String[] args) {
		SpringApplication.run(MedfinderApplication.class, args);
	}

}
