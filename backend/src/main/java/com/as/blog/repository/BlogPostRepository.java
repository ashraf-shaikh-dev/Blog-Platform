package com.as.blog.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.as.blog.model.BlogPost;

public interface BlogPostRepository extends JpaRepository<BlogPost, Long> {
	
}
