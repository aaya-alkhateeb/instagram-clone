

const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "assets/images/avatar-vangogh.jpg",
        post: "assets/images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "assets/images/avatar-courbet.jpg",
        post: "assets/images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "assets/images/avatar-ducreux.jpg",
        post: "assets/images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const postsContainer = document.getElementById("posts-container");


renderPosts(postsContainer, posts);


function renderPosts(postsContainer, posts) {

    for (const post of posts) {

    postsContainer.innerHTML += `
        <div class="white-back post-card">
                <div class="post-header">
                    <img class="avatar" src="${post.avatar}"/>
                    <div class="post-header-info">
                        <p class="bold">${post.name}</p>
                        <p>${post.location}</p>
                    </div>
                </div>

                    <img class="post-image" src="${post.post}"/>

                    <div class="post-actions">
                        <i class="fa-regular fa-heart"></i>
                        <i class="fa-regular fa-comment"></i>
                        <i class="fa-regular fa-paper-plane"></i>
                    </div>

                    <div class="post-likes">
                        <p class="bold"><span>${post.likes}</span> Likes</p>
                    </div>

                    <div class="post-comments">
                        <p><span class="bold">${post.username}</span> ${post.comment}</p>
                    </div>

                </div>
            </div>`;

}

let heartIcons = document.querySelectorAll('.fa-heart');
            heartIcons.forEach(icon => {
                icon.addEventListener('click', toggleLike);
            });

}

function toggleLike(event) {

    const heartIcon = event.target;
    const postCard = heartIcon?.closest('.post-card');
    const likesElement = postCard?.querySelector('.post-likes p span');
    let likesCount = parseInt(likesElement?.textContent);

    if (heartIcon && likesCount && heartIcon.classList.contains('fa-regular')) {
        heartIcon.classList.remove('fa-regular');
        heartIcon.classList.add('fa-solid');
        heartIcon.style.color = '#FD1D1D';
        likesCount++;
    }
    else if (heartIcon && likesCount && heartIcon.classList.contains('fa-solid')) {
        heartIcon.classList.remove('fa-solid');
        heartIcon.classList.add('fa-regular');
        heartIcon.style.color = '';
        likesCount--;
    }else{
        return;
    }

    likesElement.textContent = likesCount;
}