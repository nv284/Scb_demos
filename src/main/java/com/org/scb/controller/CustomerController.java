package com.org.scb.controller;


import com.org.scb.model.Customer;
import com.org.scb.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/customers")
public class CustomerController {

    @Autowired
    private CustomerService customerService;

    @GetMapping
    @PreAuthorize("hasRole('USER')")
    public List<Customer>  getCustomers(){
        return  customerService.getAllCustomers();
    }


    @PostMapping
    @PreAuthorize("hasRole('ADMIN')")
    public Customer saveCustomer(@RequestBody Customer customer){
         return customerService.saveCustomer(customer);
    }


    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public void deleteCustomer(@PathVariable Long id){
        customerService.deleteCustomer(id);
    }
}
