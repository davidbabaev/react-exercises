import React, { useState, useEffect } from 'react';
import ProfileHeader from './ProfileHeader';
import ProfilePosts from './ProfilePosts';
import EditButton from './EditButton';
import FollowButton from './FollowButton';
import ProfileState from './ProfileStateExample';

export default function ProfilePage() {
    // MULTIPLE states for different things
    const [user, setUser] = useState(null);
    const [posts, setPosts] = useState([]);
    const [followers, setFollowers] = useState(0);
    const [following, setFollowing] = useState(0);
    const [isFollowing, setIsFollowing] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [loading, setLoading] = useState(true);

    // Fetch user data
    useEffect(() => {
        fetchUserData();
        fetchUserPosts();
        fetchUserStats();
    }, []);

    const fetchUserData = async () => {
        // API call
        const data = await fetch('/api/user/123');
        setUser(data);
    };

    const fetchUserPosts = async () => {
        const data = await fetch('/api/user/123/posts');
        setPosts(data);
    };

    const fetchUserStats = async () => {
        const data = await fetch('/api/user/123/stats');
        setFollowers(data.followers);
        setFollowing(data.following);
    };

    // MULTIPLE functions for different actions
    const handleFollow = () => {
        setIsFollowing(!isFollowing);
        setFollowers(prev => isFollowing ? prev - 1 : prev + 1);
    };

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSaveEdit = (newData) => {
        setUser(newData);
        setIsEditing(false);
    };

    const handleLikePost = (postId) => {
        setPosts(posts.map(post => 
            post.id === postId 
                ? { ...post, likes: post.likes + 1 }
                : post
        ));
    };

    const handleDeletePost = (postId) => {
        setPosts(posts.filter(post => post.id !== postId));
    };

    if (loading) return <div>Loading...</div>;

    return (
        <div style={{ padding: '20px' }}>
            {/* MANY children, MANY props */}
            
            <ProfileHeader 
                user={user}
                isEditing={isEditing}
                onSave={handleSaveEdit}
            />

            <ProfileState 
                followers={followers}
                following={following}
                postsCount={posts.length}
            />

            <FollowButton 
                isFollowing={isFollowing}
                onFollow={handleFollow}
            />

            <EditButton 
                onEdit={handleEdit}
            />

            <ProfilePosts 
                posts={posts}
                onLike={handleLikePost}
                onDelete={handleDeletePost}
                currentUserId={user.id}
            />
        </div>
    );
}