let age = 2
let canVote = false

let vote = age >= 18 ? !canVote : canVote

vote ? console.log('you can vote') : console.log('you can not vote')