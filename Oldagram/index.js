const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];

const feedUl = document.getElementById("feed");
let postHtml = "";

for (let i in posts) {
  const curr = posts[i];
  postHtml += `
  <div class="container">    
    <div class="user-info white-space">
        <img src="${curr.avatar}" class="avatar">        
        <div>
            <h2>${curr.name}</h2>
            <h3>${curr.location}</h3>
        </div>
    </div>

    
    <img src="${curr.post}">

    <div id="buttons">

        <img src="images/icon-heart.png">
        <img src="images/icon-comment.png">
        <img src="images/icon-dm.png">
    </div>

    <h3 class="likes">${curr.likes} likes</h3>
    <p><strong>${curr.username}</strong> ${curr.comment}</p>
  </div>  
  `;
}

feedUl.innerHTML = postHtml;
