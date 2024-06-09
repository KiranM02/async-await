// async function showAvatar() {

//     // read our JSON
//     let response = await fetch('');
//     let user = await response.json();
  
//     // read github user
//     // let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
    
//     let githubUser = await githubResponse.json();
  
//     // show the avatar
//     let img = document.createElement('img');
//     img.src = githubUser.avatar_url;
//     img.className = "promise-avatar-example";
//     document.body.append(img);
  
//     // wait 3 seconds
//     await new Promise((resolve, reject) => setTimeout(resolve, 3000));
  
//     img.remove();
  
//     return githubUser;
//   }
  
//   showAvatar();





const getting = async function getUsers(req, res, next){
    let response = await fetch('http://localhost:3003/USERS')
    console.log("Hello");
    console.log(response)
    let trial = {user:"Hiiiiiiii"}
    // req.send(trial)
    req.triallll = trial
    next();
}

// getUsers();

export {getting};