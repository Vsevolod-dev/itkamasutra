import React from "react";
import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";

let state = {
    posts: [
        {id: 1, message: 'privet', like: 15},
        {id: 2, message: 'poka', like: 20},
        {id: 3, message: 'hi', like: 30},
        {id: 4, message: 'bye', like: 40},
    ],
}

it('right length', () => {
    let action = addPostActionCreator('asd')

    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(5)
})

it('right name', () => {
    let action = addPostActionCreator('asd')

    let newState = profileReducer(state, action)

    expect(newState.posts[4].message).toBe("asd")
})

it('delete post', () => {
    let action = deletePost(4)

    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(3)
})

it('don\'t delete post', () => {
    let action = deletePost(40)

    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(4)
})

