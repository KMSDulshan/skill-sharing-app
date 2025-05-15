package com.exampleskillsharingapp.demo.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.exampleskillsharingapp.demo.model.Resource;

import java.util.List;

@Repository
public interface ResourceRepository extends MongoRepository<Resource, String> {
    List<Resource> findByTitleContainingIgnoreCase(String title);

}
