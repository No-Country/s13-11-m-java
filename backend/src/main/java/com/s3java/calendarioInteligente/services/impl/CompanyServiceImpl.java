package com.s3java.calendarioInteligente.services.impl;

import com.s3java.calendarioInteligente.entities.Company;
import com.s3java.calendarioInteligente.repositories.CompanyRepository;
import com.s3java.calendarioInteligente.services.inter.CompanyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class CompanyServiceImpl implements CompanyService {

    @Autowired
    CompanyRepository companyRepository;


    @Override
    public Company save( Company company ) {
        return companyRepository.save(company);
    }
}
