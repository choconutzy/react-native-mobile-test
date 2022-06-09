
export const follow = (id) => {
    return {
        type: 'FOLLOW',
        payload: id
    }
}
export const unfollow = (id) => {
    return {
        type: 'UNFOLLOW',
        payload: id
    }
}