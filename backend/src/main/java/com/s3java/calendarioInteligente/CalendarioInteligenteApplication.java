package com.s3java.calendarioInteligente;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class CalendarioInteligenteApplication {


	public static void main(String[] args) {
		SpringApplication.run(CalendarioInteligenteApplication.class, args);
	}

	/*

	private void createAccount(String name, String email, String password, Role role) {
		User user = new User();
		user.setName(name);
		user.setEmail(email);
		user.setRole(role);
		user.setPassword(new BCryptPasswordEncoder().encode(password));
		userRepository.save(user);
	}

	@Override
	public void run(String... args) {

		User Account1 = userRepository.findByRole(Role.ADMIN);
		User Account2 = userRepository.findByRole(Role.USER);

		if(Account1 == null) {
			createAccount("Admin", "admin@mail.co", "123", Role.ADMIN );
		}

		if(Account2 == null) {
			createAccount("User", "user@mail.co", "userp", Role.USER );
		}
	}*/
}
