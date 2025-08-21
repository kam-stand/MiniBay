package com.spring.productservice;

import com.spring.productservice.model.Product;
import com.spring.productservice.model.Review;
import com.spring.productservice.repository.ProductRepository;
import com.spring.productservice.service.ProductService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

public class ProductServiceMockTests {

    private ProductService productService;
    private ProductRepository productRepository;

    @BeforeEach
    void setUp() {
        // mock the repository
        productRepository = mock(ProductRepository.class);
        List<String> categories = new ArrayList<>();
        List<Review> reviews = new ArrayList<>();

        Product p = new Product(
                "1",
                1,
                "soup",
                "campbells",
                categories,
                12.00,
                true,
                0,
                "",
                reviews);


        Product ps = new Product(
                "2",
                2,
                "Doritos",
                "Lays",
                categories,
                2.00,
                false,
                0,
                "",
                reviews);

        when(productRepository.findAll())
                .thenReturn(Arrays.asList(p, ps));
        when(productRepository.save(any(Product.class)))
                .thenAnswer(invocation -> {
                    Product p1 = invocation.getArgument(0);
                    p1.setId("100");
                    return p1;
                });

        when(productRepository.findById(any(String.class)))
                .thenAnswer(invocation -> {
                    String id = invocation.getArgument(0);
                    return Arrays.asList(p, ps).stream()
                            .filter(product -> product.getId().equals(id))
                            .findFirst(); // returns Optional<Product>
                });


        productService = new ProductService(productRepository, null);

    }

    @Test
    void testSaveProduct() {
        Product p = new Product("3", 3, "test", "test", new ArrayList<>(), 1.00, false, 0, "", new ArrayList<>());
        Product savedProduct = productService.saveProduct(p);
        System.out.println("Saved product: " + savedProduct);

        assert savedProduct.getId().equals("100");   // matches mock behavior
        assert savedProduct.getName().equals("test");
        assert savedProduct.getUserId() == 3;
    }


    @Test
    void testGetAllProducts() {
        List<Product> products = productService.getAllProducts();
        System.out.println("Products: " + products);
        assert products.size() == 2;
    }

    @Test
    void testGetProductById() {
        Product product = productService.getProductById("1");
        System.out.println("Product: " + product);
        assert product.getId().equals("1");
        assert product.getName().equals("soup");
        assert product.getUserId() == 1;
        assert product.getPrice() != 0.00;
    }
}
