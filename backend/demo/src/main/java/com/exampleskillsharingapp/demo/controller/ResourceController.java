package com.exampleskillsharingapp.demo.controller;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.exampleskillsharingapp.demo.model.Resource;
import com.exampleskillsharingapp.demo.repository.ResourceRepository;
import com.exampleskillsharingapp.demo.service.ResourceService;


import java.util.Optional;
import java.util.UUID;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/resources")
public class ResourceController {

    private final ResourceRepository resourceRepository;

    @Autowired
    private ResourceService postService;

    ResourceController(ResourceRepository resourceRepository) {
        this.resourceRepository = resourceRepository;
    }

    @PostMapping("/upload")
public ResponseEntity<String> uploadPost(
    @RequestParam("title") String title,
    @RequestParam("description") String description,
    @RequestParam("file") MultipartFile file
) {
    try {
        System.out.println("Title: " + title);
        System.out.println("Description: " + description);
        System.out.println("File Name: " + file.getOriginalFilename());
        postService.savePost(title, description, file);
        return ResponseEntity.ok("Post uploaded successfully");
    } catch (Exception e) {
        e.printStackTrace();
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Upload failed");
    }
}


@GetMapping
public ResponseEntity<List<Resource>> getAllPosts() {
    return ResponseEntity.ok(postService.getAllPosts());
}

@GetMapping("/{id}")
public ResponseEntity<?> getPostById(@PathVariable String id) {
    Optional<Resource> optionalPost = postService.getPostById(id);
    if (optionalPost.isPresent()) {
        return ResponseEntity.ok(optionalPost.get());
    } else {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Post not found");
    }
}

@GetMapping("/search/{title}")
public ResponseEntity<List<Resource>> getPostsByTitle(@PathVariable String title) {
    return ResponseEntity.ok(postService.getPostsByTitle(title));
}

@GetMapping("/media/{filename:.+}")
public ResponseEntity<byte[]> getMedia(@PathVariable String filename) {
    try {
        Path filePath = Paths.get("backend/demo/src/uploads/").resolve(filename);
        byte[] fileBytes = Files.readAllBytes(filePath);
        String contentType = Files.probeContentType(filePath);
        return ResponseEntity.ok()
                .header("Content-Type", contentType)
                .body(fileBytes);
    } catch (IOException e) {
        return ResponseEntity.notFound().build();
    }
}

@PutMapping("/{id}")
public ResponseEntity<?> updatePost(
        @PathVariable String id,
        @RequestParam("title") String title,
        @RequestParam("description") String description,
        @RequestParam(value = "file", required = false) MultipartFile file) {
    try {
        Resource updatedPost = postService.updatePost(id, title, description, file);
        return ResponseEntity.ok(updatedPost);
    } catch (Exception e) {
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Update failed");
    }
}

@DeleteMapping("/{id}")
public ResponseEntity<String> deletePost(@PathVariable String id) {
    try {
        postService.deletePost(id);
        return ResponseEntity.ok("Post deleted successfully");
    } catch (Exception e) {
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Delete failed");
    }
}


}
