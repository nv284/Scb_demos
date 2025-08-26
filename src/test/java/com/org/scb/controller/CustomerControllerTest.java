package com.org.scb.controller;


import com.org.scb.model.Customer;
import com.org.scb.service.CustomerService;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;

import java.util.List;


import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(CustomerController.class)
public class CustomerControllerTest {


    private MockMvc mockMvc;

    @Autowired
    private CustomerController customerController;

    @Autowired
    private CustomerService customerService;


 /*   @WithMockUser(roles = "USER")
    @Test
    public void testGetCustomers() throws Exception{


            List<Customer> customers = List.of(new Customer(1L, "John", "john@example.com"));
            Mockito.when(customerService.getAllCustomers()).thenReturn(customers);

           mockMvc.perform(get("/api/customers"))
                   // .andExpect(status().isOk());
        }

       // mockMvc.perform(get("/api/customers")).andExcept(status().isOk());
      // mockMvc.perform(get("/api/cusotmer")).andExpect(status().isOk());

    }*/
}
