package com.org.scb.service;


import com.org.scb.model.Customer;
import com.org.scb.repo.CustomerRepository;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.bean.override.mockito.MockitoBean;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
public class CustomerServiceTest {

    @Autowired
    private CustomerService customerService;

    @MockitoBean
    private CustomerRepository customerRepository;


    @Test
    public void testCustomer(){
        Customer customer = new Customer(null , "John" , "john@gmail.com");
        Mockito.when(customerRepository.save(customer)).thenReturn(customer);
        assertEquals(customer, customerService.saveCustomer(customer));
    }
}
