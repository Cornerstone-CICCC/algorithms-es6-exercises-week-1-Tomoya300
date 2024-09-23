/*
Create an object called facebookProfile. The object should have 3 properties:

your name
the number of friends you have, and
an array of messages you've posted (as strings)
The object should also have 4 methods:

postMessage(message) - adds a new message string to the array
deleteMessage(index) - removes the message corresponding to the index provided
addFriend() - increases the friend count by 1
removeFriend() - decreases the friend count by 1
*/
let facebookProfile = {
    yourName: "Ethan",
    friends: 3,
    messages: ["first post", "second post", "third post"],
    postMessage: function(message) {
        return this.messages.push(message)
    },
    deleteMessage: function(index) {
        return this.messages.splice(index, 1)
    },
    addFriend: function() {
            return this.friends += 1
    },
    removeFriend: function() {
            return this.friends -= 1
    }
}

facebookProfile.postMessage("fourth post")
facebookProfile.deleteMessage(0)
facebookProfile.removeFriend()
console.log(facebookProfile.friends)
console.log(facebookProfile.messages)