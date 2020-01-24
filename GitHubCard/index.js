/* Step 1: using axios, send a GET request to the following URL
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
const followersArray = ['https://api.github.com/users/tetondan',
'https://api.github.com/users/dustinmyers',
'https://api.github.com/users/justsml',
'https://api.github.com/users/luishrd',
'https://api.github.com/users/bigknell'];

for(i=0; i<followersArray.length;i++){
let githubObjectMe = axios.get(followersArray[i]);

githubObjectMe.then(response => {
  let cards = document.querySelector('.cards');
  let newcard = cardCreate(response);
  cards.appendChild(newcard);

});
}

/* Step 2: Inspect and study the data coming back, this is YOUR
   github info! You will need to understand the structure of this
   data in order to use it to build your component function

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function,
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either
          follow this link in your browser https://api.github.com/users/<Your github name>/followers
          , manually find some other users' github handles, or use the list found
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.

          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/



/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:



*/

const cardCreate = object => {
  //creating elements
  let card = document.createElement('div');
  let card_info = document.createElement('div');
  let user_img = document.createElement('img');
  let name = document.createElement('h3');
  let username = document.createElement('p');
  let location = document.createElement('p');
  let profile = document.createElement('p');
  let followers = document.createElement('p');
  let following = document.createElement('p');
  let bio = document.createElement('p');

  //adding classes
  card.classList.add('card');
  card_info.classList.add('card-info');
  name.classList.add('name');
  username.classList.add('username');
  //appending children
  card.appendChild(user_img);
  card.appendChild(card_info);
  card_info.appendChild(name);
  card_info.appendChild(username);
  card_info.appendChild(location);
  card_info.appendChild(profile);
  card_info.appendChild(followers);
  card_info.appendChild(following);
  card_info.appendChild(bio);
  //assigning content from the object being passed
  console.log(object);
  console.log(card);
  user_img.src = object.data.avatar_url;
  name.textContent = object.data.name;
  username.textContent = `${object.data.login}`;
  location.textContent = `Location: ${object.data.location}`;
  profile.innerHTML = `Profile: <a href="${object.data.html_url}"> ${object.data.html_url}</a>`;
  console.log(profile.innerHTML);
  followers.textContent = `Followers: ${object.data.followers}`;
  following.textContent = `Following: ${object.data.following}`;
  bio.textContent = `Bio: ${object.data.bio}`;



  return card;


};
/*
<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>
*/
/* List of LS Instructors Github username's:
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
