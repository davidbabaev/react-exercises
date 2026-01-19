import React, { useState } from 'react'

export default function GroupByCategory() {

    const [posts] = useState([
        {post: 1 ,title: 'Hello one', category: 'action'},
        {post: 2 ,title: 'Hello two', category: 'action'},
        {post: 3 ,title: 'Hello three', category: 'fantasy'},
        {post: 4 ,title: 'Hello four', category: 'fantasy'},
        {post: 5 ,title: 'Hello five', category: 'comedy'},
        {post: 6 ,title: 'Hello six', category: 'comedy'},
        {post: 7 ,title: 'Hello seven', category: 'comedy'}
    ])

    // Blog - Group posts by category
    // used in: Blogs, news sites, product catalog
    const postsByCategory = posts.reduce((groups, post) => {

        // groups accumulator -> will be an emty {}
        // groups = {}

        // we save it category the real categoty from each post
        const category = post.category;


    if(!groups[category]){
        groups[category] = [];
    }
    groups[category].push(post)
    return groups
    }, {})

    console.log(postsByCategory);
    

    // ____________________________________________________
    const obj = {};

    // these are three ways to add properties:
    // way 1: Dot notation
    obj.name = 'Jhon'

    // way 2: btackets notation with string
    obj['age'] = 25

    // way 3: Brackets notation with variable
    const key = 'city';
    obj[key] = 'NYC'

    console.log(obj);
    // ____________________________________________________
    
    
    return (
        <div>GroupByCategory</div>
    )
    // we want this:
    // each category have it's own array of object with category: 'same'
    // we want to groups posts ny their category
//     {
//     action: [
//         { post: 1, title: 'Hello one', category: 'action' },
//         { post: 2, title: 'Hello two', category: 'action' }
//     ],
//     fantasy: [
//         { post: 3, title: 'Hello three', category: 'fantasy' },
//         { post: 4, title: 'Hello four', category: 'fantasy' }
//     ],
//     comedy: [
//         { post: 5, title: 'Hello five', category: 'comedy' },
//         { post: 6, title: 'Hello six', category: 'comedy' },
//         { post: 7, title: 'Hello seven', category: 'comedy' }
//     ]
//      }



// const groups = {}; -> groups mean empty object, this is out accumulator
// create a property called 'action' with an empty array
// groups['action'] = []
// console.log(groups);
// 
// Now we can add items to that array
// groups['action'].push({post: 1, title: 'hello'});

// console.log(groups);
// {action: [{post: 1, title: 'Hello'}]}



}
