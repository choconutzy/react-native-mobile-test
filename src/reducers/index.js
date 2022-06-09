// import React from "react";
// import { FOLLOW, UNFOLLOW } from "../action/store";

const initState = {
    following: [
        {
            "id":1,
            "nama": "User1",
            "FollowStatus": true
        },
        {
            "id":2,
            "nama": "User2",
            "FollowStatus": true
        },
        {
            "id":3,
            "nama": "User3",
            "FollowStatus": true
        },
        {
            "id":4,
            "nama": "User4",
            "FollowStatus": true
        },
        {
            "id":5,
            "nama": "User5",
            "FollowStatus": true
        },
        {
            "id":6,
            "nama": "User6",
            "FollowStatus": true
        },
        {
            "id":7,
            "nama": "User7",
            "FollowStatus": true
        },
        {
            "id":8,
            "nama": "User8",
            "FollowStatus": true
        },
        {    
            "id":9,
            "nama": "User9",
            "FollowStatus": true
        },
        {    
            "id":10,
            "nama": "User9",
            "FollowStatus": true
        },
        {
            "id":11,
            "nama": "User11",
            "FollowStatus": true
        },
        {
            "id":12,
            "nama": "User12",
            "FollowStatus": true
        },
        {
            "id":13,
            "nama": "User13",
            "FollowStatus": true
        },
        {
            "id":14,
            "nama": "User14",
            "FollowStatus": true
        },
        {
            "id":15,
            "nama": "User15",
            "FollowStatus": true
        },
        {
            "id":16,
            "nama": "User16",
            "FollowStatus": true
        },
        {
            "id":17,
            "nama": "User17",
            "FollowStatus": true
        },
        {
            "id":18,
            "nama": "User18",
            "FollowStatus": true
        },
        {
            "id":19,
            "nama": "User19",
            "FollowStatus": true
        },
        {
            "id":20,
            "nama": "User20",
            "FollowStatus": true
        },
    ],
    followers: [
        {
            "id":21,
            "nama": "User21",
            "FollowStatus": false
        },
        {
            "id":22,
            "nama": "User22",
            "FollowStatus": false
        },
        {
            "id":23,
            "nama": "User23",
            "FollowStatus": false
        },
        {
            "id":24,
            "nama": "User24",
            "FollowStatus": false
        },
        {
            "id":25,
            "nama": "User25",
            "FollowStatus": false
        },
        {
            "id":26,
            "nama": "User26",
            "FollowStatus": false
        },
        {
            "id":27,
            "nama": "User27",
            "FollowStatus": false
        },
        {
            "id":28,
            "nama": "User28",
            "FollowStatus": false
        },
        {    
            "id":29,
            "nama": "User29",
            "FollowStatus": false
        },
        {    
            "id":30,
            "nama": "Use30",
            "FollowStatus": false
        },
        {
            "id":31,
            "nama": "User31",
            "FollowStatus": false
        },
        {
            "id":32,
            "nama": "User32",
            "FollowStatus": false
        },
        {
            "id":33,
            "nama": "User33",
            "FollowStatus": false
        },
        {
            "id":34,
            "nama": "User34",
            "FollowStatus": false
        },
    ],
    followingTotal:20,
    followersTotal:14
}

function followCounter(state=initState, action) {
    if (typeof state === 'undefined') {
      state = undefined // If state is undefined, initialize it with a default value
    }
  
    switch(action.type){
        case "FOLLOW":
            let isExist = state.following.find(e=> e.id === action.payload)
            if(!isExist) {
                // isExist.FollowStatus = true
                isExist = {...isExist, FollowStatus: true}
                state.following = [...state.following, isExist]
                state.followingTotal =+ 1
            }

        case "UNFOLLOW":
            let Exist = state.following.find(e=> e.id === action.payload)
            if(Exist) {
                Exist = {...Exist, FollowStatus: false}
                let filter = state.following.filter(e=> e.id !== action.payload)
                state.following = [...filter, Exist]
                state.followingTotal =- 1
            }
    }
  }
export default followCounter;