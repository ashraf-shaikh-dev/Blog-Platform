package com.as.blog.service.impl;

import com.as.blog.model.BlogPost;
import com.as.blog.repository.BlogPostRepository;
import com.as.blog.service.BlogPostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BlogPostServiceImpl implements BlogPostService {

    private final BlogPostRepository blogPostRepository;

    @Autowired
    public BlogPostServiceImpl(BlogPostRepository blogPostRepository) {
        this.blogPostRepository = blogPostRepository;
    }

    @Override
    public List<BlogPost> getAllPosts() {
        return blogPostRepository.findAll();
    }

    @Override
    public BlogPost getPostById(Long id) {
        return blogPostRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Post not found with id: " + id));
    }

    @Override
    public BlogPost createPost(BlogPost post) {
        return blogPostRepository.save(post);
    }

    @Override
    public BlogPost updatePost(Long id, BlogPost post) {
        BlogPost existingPost = blogPostRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Post not found with id: " + id));
        existingPost.setTitle(post.getTitle());
        existingPost.setContent(post.getContent());
        return blogPostRepository.save(existingPost);
    }

    @Override
    public void deletePost(Long id) {
        BlogPost existingPost = blogPostRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Post not found with id: " + id));
        blogPostRepository.delete(existingPost);
    }
}
