package com.spring.productservice.controller;

import com.spring.productservice.model.Bid;
import com.spring.productservice.model.Comment;
import com.spring.productservice.service.AuctionService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/products/auctions")
public class AuctionController {

    private final AuctionService auctionService;

    public AuctionController(AuctionService auctionService) {
        this.auctionService = auctionService;
    }

    // Get all auctions
    @GetMapping("")
    public ResponseEntity<?> getAllAuctions() {
        return ResponseEntity.ok(auctionService.getAllAuctions());
    }

    // Get auction by ID
    @GetMapping("/by-id/{id}")
    public ResponseEntity<?> getAuctionById(@PathVariable String id) {
        return ResponseEntity.ok(auctionService.getAuctionById(id));
    }

    // Get auctions by product ID
    @GetMapping("/by-product/{productId}")
    public ResponseEntity<?> getAuctionByProductId(@PathVariable String productId) {
        return ResponseEntity.ok(auctionService.getAuctionByProductId(productId));
    }

    // Get auctions by user ID
    @GetMapping("/by-user/{userId}")
    public ResponseEntity<?> getAuctionByUserId(@PathVariable String userId) {
        return ResponseEntity.ok(auctionService.getAuctionByUserId(userId));
    }

    // Delete auction by ID
    @DeleteMapping("/{id}")
    public void deleteAuctionById(@PathVariable String id) {
        auctionService.deleteAuctionById(id);
    }

    // Update comment on auction
    @PutMapping("/{id}/comment")
    public ResponseEntity<?> updateCommentOnAuction(@PathVariable String id, @RequestBody Comment comment) {
        return ResponseEntity.ok(auctionService.updateComment(id, comment));
    }

    // Update bid on auction
    @PutMapping("/{auctionId}/bid")
    public ResponseEntity<?> updateBidOnAuction(@PathVariable String auctionId, @RequestBody Bid bid) {
        return ResponseEntity.ok(auctionService.updateBid(auctionId, bid));
    }
}
