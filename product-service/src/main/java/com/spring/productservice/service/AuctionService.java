package com.spring.productservice.service;

import com.spring.productservice.model.Auction;
import com.spring.productservice.model.Comments;
import com.spring.productservice.repository.AuctionRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AuctionService {

    private AuctionRepository auctionRepository;

    public AuctionService(AuctionRepository auctionRepository) {
        this.auctionRepository = auctionRepository;
    }

    public void saveAuction(Auction bid) {
        auctionRepository.save(bid);
    }

    public Auction getAuctionById(String id) {
        return auctionRepository.findById(id).orElse(null);
    }

    public Auction updateComment(String id, Comments comments) {
        Auction bid = auctionRepository.findById(id).orElse(null);
        if (bid != null) {
            List<Comments> commentsList = bid.getComments();
            commentsList.add(comments);
            bid.setComments(commentsList);
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

    public List<Auction> getBidsByUserId(String userId) {
        return auctionRepository.findAll().stream().filter(bid -> bid.getProduct().getUserId() == Integer.parseInt(userId)).toList();
    }


}
