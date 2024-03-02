package com.s3java.calendarioInteligente.security.config;


import com.s3java.calendarioInteligente.security.services.UserService;
import com.s3java.calendarioInteligente.utils.UserRole;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.EnableGlobalAuthentication;
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
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;


@Configuration
@EnableWebSecurity
@EnableWebMvc
public class SecurityConfiguration implements WebMvcConfigurer {



    private final JwtAuthenticationFilter jwtAuthenticationFilter;

    private final UserService userService;

    private static final String[] FREE_ENDPOINTS = {
            "/api/v1/company/create",
            "/v2/api-docs",
            "/swagger-resources",
            "/swagger-resources/**",
            "/configuration/ui",
            "/configuration/security",
            "/swagger-ui.html",
            "/webjars/**",
            // -- Swagger UI v3 (OpenAPI)
            "/v3/api-docs/**",
            "/swagger-ui/**",
            //others
            "/authenticate/**",
            "/api/security/auth/**", "/styles/**", "/assets/**", "/scripts/**"

    };

    //TODO aqui agregar todos los endpoints libres para administradores y crear uno para usuarios
    private static final String[] FREE_ADMIN_ENDPOINTS = {
            "**/company/create",
            "/v2/api-docs",
            "/swagger-resources",
            "/swagger-resources/**",
            "/configuration/ui",
            "/configuration/security",
            "/swagger-ui.html",
            "/webjars/**",
            // -- Swagger UI v3 (OpenAPI)
            "/v3/api-docs/**",
            "/swagger-ui/**",
            //others
            "/authenticate/**",
            "/api/security/auth/**", "/styles/**", "/assets/**", "/scripts/**"

    };

    public SecurityConfiguration(JwtAuthenticationFilter jwtAuthenticationFilter, UserService userService) {
        this.jwtAuthenticationFilter = jwtAuthenticationFilter;
        this.userService = userService;
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception {



        httpSecurity.csrf(AbstractHttpConfigurer::disable)
                .authorizeHttpRequests( request ->  request.requestMatchers(
                        FREE_ENDPOINTS
                        )
                        .permitAll()
                        .requestMatchers("/api/**").hasAnyAuthority(String.valueOf(UserRole.ROLE_ADMIN)) // Admin
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

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**").allowedMethods("GET", "POST", "PUT", "DELETE");
        ;
    }

}
