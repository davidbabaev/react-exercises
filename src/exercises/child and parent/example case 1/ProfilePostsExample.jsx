import React, { useState } from 'react';
import PostCard from './PostCard';

export default function ProfilePosts({ posts, onLike, onDelete, currentUserId }) {
    const [filter, setFilter] = useState('all'); // Child has its OWN state!
    const [sortBy, setSortBy] = useState('newest');

    const filteredPosts = posts.filter(post => {
        if (filter === 'liked') return post.isLiked;
        if (filter === 'mine') return post.userId === currentUserId;
        return true;
    });

    const sortedPosts = [...filteredPosts].sort((a, b) => {
        if (sortBy === 'newest') return b.date - a.date;
        if (sortBy === 'popular') return b.likes - a.likes;
        return 0;
    });

    return (
        <div>
            {/* Filter buttons */}
            <div>
                <button onClick={() => setFilter('all')}>All</button>
                <button onClick={() => setFilter('liked')}>Liked</button>
                <button onClick={() => setFilter('mine')}>My Posts</button>
            </div>

            {/* Sort buttons */}
            <div>
                <button onClick={() => setSortBy('newest')}>Newest</button>
                <button onClick={() => setSortBy('popular')}>Most Popular</button>
            </div>

            {/* Posts list */}
            {sortedPosts.map(post => (
                <PostCard 
                    key={post.id}
                    post={post}
                    onLike={() => onLike(post.id)}
                    onDelete={() => onDelete(post.id)}
                />
            ))}
        </div>
    );
}