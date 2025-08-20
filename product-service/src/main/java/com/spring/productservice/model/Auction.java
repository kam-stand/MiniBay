package com.spring.productservice.model;


import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Data
@NoArgsConstructor
@Document(collection = "auction")
@Getter
@Setter
public class Auction {

    @Id
    private String id;
    @DBRef
    private Product product;

    private Date datePosted;
    private Date dateEnd;

    private double currentBid;

    private List<Comment> comments = new ArrayList<>();

    private List<Bid> bids = new ArrayList<>();

    public Auction(Product product) {
        this.product = product;
        this.datePosted = new Date();
        this.dateEnd = new Date(this.datePosted.getTime() + 1000 * 60 * 60 * 24);
        this.currentBid = 0;
    }


}
