package com.spring.productservice.model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Document(collection = "product")
@Getter
@Setter
public class Product {

    @Id
    private String id;             // MongoDB ObjectId as String

    private int userId;

    private String name;           // Product name

    private String brand;          // Brand name

    private List<String> categories; // List of categories

    private double price;          // Product price

    private boolean auction;

    private int averageRating;

    private String description;

    private List<Review> reviews = new ArrayList<>();

}
