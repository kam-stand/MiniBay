package com.spring.productservice.service;

import com.spring.productservice.model.Auction;
import com.spring.productservice.model.Product;
import com.spring.productservice.repository.ProductRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    private  final ProductRepository productRepository;

    private final AuctionService auctionService;


    public ProductService(ProductRepository productRepository, AuctionService auctionService) {
        this.productRepository = productRepository;
        this.auctionService = auctionService;
    }

    public Product saveProduct(Product product) {
        Product savedProduct = productRepository.save(product);
        if (product.isAuction()) {
            auctionService.saveAuction(new Auction(savedProduct));
        }
        return savedProduct;
    }

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public Product getProductById(String id) {
        return productRepository.findById(id).orElse(null);
    }

    public void deleteProductById(String id) {
        productRepository.deleteById(id);
    }

    public Product updateProduct(Product product) {
        return productRepository.save(product);
    }
}
