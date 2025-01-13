package com.as.blog.service;

import com.as.blog.model.BlogPost;
import java.util.List;

public interface BlogPostService {
    List<BlogPost> getAllPosts();
    BlogPost getPostById(Long id);
    BlogPost createPost(BlogPost post);
    BlogPost updatePost(Long id, BlogPost post);
    void deletePost(Long id);
}
