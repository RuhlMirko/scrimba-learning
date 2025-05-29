import { tweetsData as SEED_TWEETS } from "./data.js";
import { v4 as uuidv4 } from "https://jspm.dev/uuid";

const STORAGE_KEY = "tweetsData";
let tweetsData;

try {
  // null -> first run OR someone cleared the key
  tweetsData =
    JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? SEED_TWEETS.slice();

  // If this is the first run, persist the seed so re-load won’t reset it
  if (!localStorage.getItem(STORAGE_KEY)) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tweetsData));
  }
} catch (err) {
  console.warn("Corrupt data in localStorage — starting fresh.", err);
  tweetsData = SEED_TWEETS.slice();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tweetsData));
}

document.addEventListener("click", function (e) {
  if (e.target.dataset.like) {
    handleLikeClick(e.target.dataset.like);
  } else if (e.target.dataset.retweet) {
    handleRetweetClick(e.target.dataset.retweet);
  } else if (e.target.dataset.reply) {
    handleReplyClick(e.target.dataset.reply);
  } else if (e.target.dataset.delete) {
    deleteTweet(e.target.dataset.delete);
  } else if (e.target.dataset.replymsg) {
    addReply(e.target.dataset.replymsg);
  } else if (e.target.id === "tweet-btn") {
    handleTweetBtnClick();
  }
});

function handleTweetBtnClick() {
  const tweetInput = document.getElementById("tweet-input");

  if (tweetInput.value) {
    tweetsData.unshift({
      handle: `@Scrimba`,
      profilePic: `images/scrimbalogo.png`,
      likes: 0,
      retweets: 0,
      tweetText: tweetInput.value,
      replies: [],
      isLiked: false,
      isRetweeted: false,
      isMine: true,
      uuid: uuidv4(),
    });
    saveTweets();
    render();
    tweetInput.value = "";
  }
}

function saveTweets() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tweetsData));
}
function deleteTweet(uuid) {
  tweetsData = tweetsData.filter((t) => t.uuid !== uuid);
  saveTweets();
  render();
}

function handleLikeClick(tweetId) {
  const targetTweetObj = tweetsData.filter(function (tweet) {
    return tweet.uuid === tweetId;
  })[0];

  if (targetTweetObj.isLiked) {
    targetTweetObj.likes--;
  } else {
    targetTweetObj.likes++;
  }
  targetTweetObj.isLiked = !targetTweetObj.isLiked;
  render();
}

function handleRetweetClick(tweetId) {
  const targetTweetObj = tweetsData.filter(function (tweet) {
    return tweet.uuid === tweetId;
  })[0];

  if (targetTweetObj.isRetweeted) {
    targetTweetObj.retweets--;
  } else {
    targetTweetObj.retweets++;
  }
  targetTweetObj.isRetweeted = !targetTweetObj.isRetweeted;
  render();
}

function handleReplyClick(replyId) {
  document.getElementById(`replies-${replyId}`).classList.toggle("hidden");
}

function addReply(id) {
  const userReplyMsg = document.getElementById(`replymsg-${id}`).value;
  if (userReplyMsg) {
    const targetTweetObj = tweetsData.filter(function (tweet) {
      return tweet.uuid === id;
    })[0];

    const newReply = {
      handle: "@Scrimba",
      profilePic: `images/scrimbalogo.png`,
      tweetText: userReplyMsg,
    };
    // {handle: '@TomCruise ✅', profilePic: 'images/tcruise.png', tweetText: 'Yes! Sign me up! 😎🛩'}
    targetTweetObj.replies.push(newReply);
    console.log(targetTweetObj);
    handleReplyClick(id);
    render();
  }
}

function getFeedHtml() {
  let feedHtml = ``;

  tweetsData.forEach(function (tweet) {
    let likeIconClass = "";

    if (tweet.isLiked) {
      likeIconClass = "liked";
    }

    let retweetIconClass = "";

    if (tweet.isRetweeted) {
      retweetIconClass = "retweeted";
    }

    let repliesHtml = "";

    if (tweet.replies.length > 0) {
      tweet.replies.forEach(function (reply) {
        repliesHtml += `
        <div class="tweet-reply">
            <div class="tweet-inner">
                <img src="${reply.profilePic}" class="profile-pic">
                    <div>
                        <p class="handle">${reply.handle}</p>
                        <p class="tweet-text">${reply.tweetText}</p>
                    </div>
                </div>
        </div>
        `;
      });
    }

    feedHtml += `
    <div class="tweet">
        <div class="tweet-inner">
            <img src="${tweet.profilePic}" class="profile-pic">
            <div>
                <p class="handle">${tweet.handle}</p>
                <p class="tweet-text">${tweet.tweetText}</p>
                <div class="tweet-details">
                    <span class="tweet-detail">
                        <i class="fa-regular fa-comment-dots"
                        data-reply="${tweet.uuid}"
                        ></i>
                        ${tweet.replies.length}
                    </span>
                    <span class="tweet-detail">
                        <i class="fa-solid fa-heart ${likeIconClass}"
                        data-like="${tweet.uuid}"
                        ></i>
                        ${tweet.likes}
                    </span>
                    <span class="tweet-detail">
                        <i class="fa-solid fa-retweet ${retweetIconClass}"
                        data-retweet="${tweet.uuid}"
                        ></i>
                        ${tweet.retweets}
                    </span>`;
    if (tweet.isMine) {
      feedHtml += `
                        <span class="tweet-detail">            
                            <i class="fa-solid fa-trash" 
                            data-delete="${tweet.uuid}"
                            ></i>
                        </span>
                        `;
    }
    feedHtml += `
                </div>   
            </div>
            
                        
        </div>
        
        <div class="hidden" id="replies-${tweet.uuid}">
            ${repliesHtml}
        </div>
        <div class='reply-box'>
            <textarea id='replymsg-${tweet.uuid}'></textarea>
            <button data-replymsg="${tweet.uuid}">Reply</button>
        </div>
    </div>
    `;
  });
  return feedHtml;
}

function render() {
  document.getElementById("feed").innerHTML = getFeedHtml();
}

render();
