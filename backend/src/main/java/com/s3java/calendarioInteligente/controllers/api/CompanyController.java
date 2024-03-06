package com.s3java.calendarioInteligente.controllers.api;

import com.s3java.calendarioInteligente.entities.Company;
import com.s3java.calendarioInteligente.repositories.CompanyRepository;

import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/company")
public class CompanyController {

    private final CompanyRepository companyRepository;

    public CompanyController(CompanyRepository companyRepository) {
        this.companyRepository = companyRepository;
    }

    @PostMapping("/create")
    public void createOrder(
            @RequestBody @Valid Company company
    ){
        this.companyRepository.save(company);
    }
}
