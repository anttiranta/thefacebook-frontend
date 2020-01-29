// Friends helper

export function calcMutualFriendsAmount (userA, userB) {
    if (!Array.isArray(userA.friends) || !Array.isArray(userB.friends)) {
        return 0
    }
    return userA.friends.filter(friend => userB.friends.includes(friend)).length
}