package com.exampleskillsharingapp.demo.service;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.exampleskillsharingapp.demo.model.Resource;
import com.exampleskillsharingapp.demo.repository.ResourceRepository;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ResourceService {

    @Autowired
    private ResourceRepository resourceRepository;

    

    public void savePost(String title, String description, MultipartFile file) throws IOException {

          String uploadDir = "backend/demo/src/uploads/";

          File directory = new File(uploadDir);
        if (!directory.exists()) {
            directory.mkdirs();
        }

        String fileName = UUID.randomUUID() + "_" + file.getOriginalFilename();
        Path filePath = Paths.get(uploadDir + fileName);
        Files.copy(file.getInputStream(), filePath);

        String mediaType = getMediaType(file.getContentType());

        Resource post = new Resource();
        post.setTitle(title);
        post.setDescription(description);
        post.setMediaType(mediaType);
       post.setMediaUrl("/api/resources/media/" + fileName);

        resourceRepository.save(post);
    }

    private String getMediaType(String contentType) {
        if (contentType.startsWith("image")) return "image";
        if (contentType.startsWith("video")) return "video";
        if (contentType.equals("application/pdf")) return "pdf";
        return "unknown";
    }

public List<Resource> getAllPosts() {
    return resourceRepository.findAll();
}

public Optional<Resource> getPostById(String id) {
    return resourceRepository.findById(id);
}

public List<Resource> getPostsByTitle(String title) {
    return resourceRepository.findByTitleContainingIgnoreCase(title);
}

public Resource updatePost(String id, String title, String description, MultipartFile file) throws IOException {
    Resource existingPost = resourceRepository.findById(id).orElseThrow(() -> new RuntimeException("Post not found"));

    existingPost.setTitle(title);
    existingPost.setDescription(description);

    if (file != null && !file.isEmpty()) {
        String uploadDir = "backend/demo/src/uploads/";
        File directory = new File(uploadDir);
        if (!directory.exists()) {
            directory.mkdirs();
        }

        String fileName = UUID.randomUUID() + "_" + file.getOriginalFilename();
        Path filePath = Paths.get(uploadDir + fileName);
        Files.copy(file.getInputStream(), filePath);

        String mediaType = getMediaType(file.getContentType());

        existingPost.setMediaType(mediaType);
        existingPost.setMediaUrl("/api/posts/media/" + fileName);
    }

    return resourceRepository.save(existingPost);
}

public void deletePost(String id) {
    resourceRepository.deleteById(id);
}
   
}
