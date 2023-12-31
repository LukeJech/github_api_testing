
async function GithubAPIcall() {
    var username = github_username.value
    // The await keyword lets js know that it needs to wait until it gets a response back to continue.
    var response = await fetch("https://api.github.com/users/" + username);
    // We then need to convert the data into JSON format.
    var coderData = await response.json();
    console.log(coderData)
    coding_name.innerText = coderData.name
    num_repos.innerText = coderData.public_repos
    num_followers.innerText = coderData.followers
    return coderData;
}
        

    