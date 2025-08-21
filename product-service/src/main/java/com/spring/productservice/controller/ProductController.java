package com.spring.productservice.controller;

import com.spring.productservice.model.Product;
import com.spring.productservice.model.Review;
import com.spring.productservice.service.ProductService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/products")
public class ProductController {

    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping("")
    public ResponseEntity<?> getAllProducts(){
        return ResponseEntity.ok(productService.getAllProducts());
    }

    @GetMapping("{id}")
    public ResponseEntity<?> getProductById(@PathVariable String id){
        return ResponseEntity.ok(productService.getProductById(id));
    }

    @PostMapping("")
    public ResponseEntity<?> createProduct(@RequestBody Product product){
        return ResponseEntity.ok(productService.saveProduct(product));
    }

    @PutMapping("{id}")
    public ResponseEntity<?> updateProduct(@PathVariable String id, @RequestBody Product product){
        return ResponseEntity.ok(productService.updateProduct(id, product));
    }

    @DeleteMapping("{id}")
    public void deleteProductById(@PathVariable String id){
        productService.deleteProductById(id);
    }

    @PutMapping("{id}/review")
    public ResponseEntity<?> addReview(@PathVariable String id, @RequestBody Review review){
        return ResponseEntity.ok(productService.addReview(id, review));
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<?> getProductByUserId(@PathVariable long userId){
        return ResponseEntity.ok(productService.getProductByUserId(userId));
    }


}
