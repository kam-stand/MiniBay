package com.spring.productservice.service;

import com.spring.productservice.model.Auction;
import com.spring.productservice.model.Bid;
import com.spring.productservice.model.Comment;
import com.spring.productservice.repository.AuctionRepository;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class AuctionService {

    private final AuctionRepository auctionRepository;

    public AuctionService(AuctionRepository auctionRepository) {
        this.auctionRepository = auctionRepository;
    }

    public void saveAuction(Auction bid) {
        auctionRepository.save(bid);
    }

    public Auction getAuctionById(String id) {
        return auctionRepository.findById(id).orElse(null);
    }

    public Auction updateComment(String id, Comment comment) {
        Auction bid = getAuctionById(id);
        if (bid != null) {
            bid.getComments().add(comment);
            return auctionRepository.save(bid);
        }
        return null;
    }

    public void deleteAuctionById(String id) {
        auctionRepository.deleteById(id);
    }

    public List<Auction> getAllAuctions() {
        return auctionRepository.findAll();
    }

    public Auction getAuctionByProductId(String productId) {
        return auctionRepository.findAll().stream().filter(bid -> bid.getProduct().getId().equals(productId)).findFirst().orElse(null);
    }

    public List<Auction> getAuctionByUserId(String userId) {
        return auctionRepository.findAll().stream().filter(bid -> bid.getProduct().getUserId() == Integer.parseInt(userId)).toList();
    }

    public Auction updateBid(String auctionId, Bid bid){
        Auction auction = getAuctionById(auctionId);
        if (auction != null) {
            auction.getBids().add(bid);
            // set the auction amount to the max bid amt
            Optional<Bid> currentMax = auction.getBids().stream().max(Comparator.comparingDouble(Bid::bidAmount));
            currentMax.ifPresent(value -> auction.setCurrentBid(value.bidAmount()));

            return auctionRepository.save(auction);
        }
        return null;
    }




}
