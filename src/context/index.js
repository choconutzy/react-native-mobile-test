import React from "react";
import { createContext, useContext, useReducer } from "react";
import { followData } from "../constants/followData";


const initialState = {
    userData:[...followData],
    following:20, 
    followers:15}
const FollowContext = createContext()

const followReducer = (state=initialState, action) => {
    // let findUser = state.userData.find(e=> e.id===action.payload.id)
    let filterData = state.userData.filter(e=> e.id!==action.payload.id)
    let newUserData = {...action.payload}
    let newUsersData = [...filterData, newUserData]
    newUsersData.sort()
    switch(action.type) {
        case 'follow': {
            let newTotal = state.following + 1
            return {userData:[...newUsersData], following:newTotal, followers:15}
        }
        case 'unfollow': {
            let newTotal = state.following - 1
            return {userData:[...newUsersData], following:newTotal, followers:15}
        }
        default:
            return state
    }
}

const FollowProvider = ({children}) => {
    // useReducer
    const [state, dispatch] = useReducer(followReducer, initialState)
    const value = { state, dispatch }
    return <FollowContext.Provider value={value}>{children}</FollowContext.Provider>
}

const useFollow = () => {
    const context = useContext(FollowContext)
    if(context === undefined) {
        throw new Error('useCount must be used within a Bookmark Provider')
    }
    return context
}

export {FollowProvider, useFollow}