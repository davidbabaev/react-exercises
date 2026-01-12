import React from 'react';

export default function ProfileState({ followers, following, postsCount }) {
    return (
        <div style={{ 
            display: 'flex', 
            justifyContent: 'space-around',
            padding: '20px',
            border: '1px solid #ddd'
        }}>
            <div>
                <h3>{followers}</h3>
                <p>Followers</p>
            </div>
            <div>
                <h3>{following}</h3>
                <p>Following</p>
            </div>
            <div>
                <h3>{postsCount}</h3>
                <p>Posts</p>
            </div>
        </div>
    );
}