package com.spring.productservice.service;

import com.spring.productservice.model.Auction;
import com.spring.productservice.model.Product;
import com.spring.productservice.model.Review;
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

    public Product updateProduct(String id, Product product) {
        Product productToUpdate = getProductById(id);
        if (productToUpdate != null) {
            productToUpdate.setName(product.getName());
            product.setUserId(productToUpdate.getUserId());
            productToUpdate.setBrand(product.getBrand());
            productToUpdate.setCategories(product.getCategories());
            productToUpdate.setPrice(product.getPrice());
            productToUpdate.setAuction(product.isAuction());
            productToUpdate.setReviews(product.getReviews());
            productToUpdate.setAverageRating(product.getAverageRating());
            return productRepository.save(productToUpdate);
        }
        return null;
    }

    public Product addReview(String id, Review review) {
        Product product = getProductById(id);
        int rating =(int)product.getReviews().stream().mapToDouble(Review::rating).average().orElse(0);
        product.setAverageRating(rating);
        product.getReviews().add(review);
        return productRepository.save(product);
    }
}
