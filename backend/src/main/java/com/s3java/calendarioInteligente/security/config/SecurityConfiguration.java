package com.s3java.calendarioInteligente.security.config;


import com.s3java.calendarioInteligente.security.services.UserService;
import com.s3java.calendarioInteligente.utils.UserRole;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.authentication.AuthenticationManager;



@Configuration
@EnableWebSecurity
public class SecurityConfiguration {



    private final JwtAuthenticationFilter jwtAuthenticationFilter;

    private final UserService userService;

    public SecurityConfiguration(JwtAuthenticationFilter jwtAuthenticationFilter, UserService userService) {
        this.jwtAuthenticationFilter = jwtAuthenticationFilter;
        this.userService = userService;
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception {



        httpSecurity.csrf(AbstractHttpConfigurer::disable)
                .authorizeHttpRequests( request ->  request.requestMatchers(
                        "/",
                                "/swagger-ui/index.html",
                                "/api/security/auth/**",
                                "/api/security/auth/signin"
                        )
                        .permitAll()
                        .requestMatchers("/api/security/admin").hasAnyAuthority(String.valueOf(UserRole.ROLE_ADMIN)) // Admin
                        .requestMatchers("/api/security/user").hasAnyAuthority(String.valueOf(UserRole.ROLE_EMPLOYEE)) // User
                        .anyRequest().authenticated()

                )
                .sessionManagement(manager -> manager.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .authenticationProvider(authenticationProvider()).addFilterBefore(
                        jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class
                );
        return httpSecurity.build();
    }

    @Bean
    public AuthenticationProvider authenticationProvider() {
        DaoAuthenticationProvider daProvider = new DaoAuthenticationProvider();
        daProvider.setUserDetailsService(userService.userDetailsService());
        daProvider.setPasswordEncoder(passwordEncoder());
        return daProvider;
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception {
        return config.getAuthenticationManager();
    }

}
