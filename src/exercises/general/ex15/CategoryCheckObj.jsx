import React from 'react'

export default function CategoryCheckObj() {
    // quastion: 
    // How many categories are there? What are their names?
    // Answer: We don't know until we loop through the data.

    const posts = [
        { post: 1, category: 'action' },
        { post: 2, category: 'action' },
        { post: 3, category: 'fantasy' },
        { post: 4, category: 'fantasy' },
        { post: 4, category: 'fantasy' },
        { post: 5, category: 'comedy' },
        { post: 6, category: 'comedy' }
    ];

    // Hard coded - buuild and chedk everything manually
    const groups = {
        action: [],
        fantasy: [],
        comedy: [],
    }

    // Now manually check each post
    posts.forEach((post) => {
        if(post.category === 'action'){
            groups.action.push(post);
        }
        if(post.category === 'fantasy'){
            groups.fantasy.push(post);
        }
        if(post.category === 'comedy'){
            groups.comedy.push(post);
        }
    })
    console.log(groups);

    // what's the problem with it:
    // problem 1: you need to know all categories ahead of time.
    // problem 2: if a new category appears, your code breaks.
    // problem 3: you need to write an if statement for every possible category if there is 100 categories it's impossible.
    // if new data comes your code will brake, you're code doesn't handle it.

    // the solution:
    // Use Variables(Dynamic Keys)
    

  return (
    <div>CategoryCheckObj</div>
  )

//   reduce() is called with:
// - starting value: {} (empty object)
// - will loop through all 7 posts
// groups = {}

// const category = post.category;

// behind the scenes:
// post.category -> access the category property - dynamic
// return: 'action'

// category - 'action' // variable new holds 'action'

// **Visual:**
// ```
// post object:
// ┌─────────────────────────┐
// │ post: 1                 │
// │ title: 'Hello one'      │
// │ category: 'action'  <------- We grab this!
// └─────────────────────────┘

// category variable = "action"
// _____________________________________________________

// Line 2: Check if category exist
// if(!groups[categoty])

// behind the scenes:
// groups['action'] --> does 'action' exist in groups? 


// same as: groups['action]
// check if groups has property called "action"

// groups = {action [...]}
// groups['action'] = [...] -> it exists now!

// **Visual:**
// ```
// groups object (current state):
// ┌─────────────────────────────┐
// │ action: [...]  ←── EXISTS!  │
// └─────────────────────────────┘

// Check: Does "action" property exist?
// Answer: YES! (it's an array with 1 item)

// !(array) = false → SKIP if block ❌

// groups[category] = [];
// this line doesn't run because if condtion was false!
// we don't create a new array - we keep the existing one
// ______________________________________________________________
// Line 4: push post into existing array
// groups[category].push(post)

// behind the scenes:
// groups['action']
// get the existing 'action' array
// returns: [{post: 1, ...}]
// push post(post) -> add new post the existing array

// groups['action'].push({
// post: 2,
// title: 'hello two',
// category: 'action'
// })

// groups objects NOW looks like:


}
