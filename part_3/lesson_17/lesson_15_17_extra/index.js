const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";
const COMMENTS_URL = "https://jsonplaceholder.typicode.com/comments";

/*
<div id="post" class="post">
   <h1 class="post__title">Название Поста</h1>
   <p class="post__text">Текст Поста</p>
   <b class="post__comments-text">Комментарии</b>
   <div class="post__comments">
       <div class="post-comment">
           <span class="post-comment__author">
               maxim@gmail.com
           </span>
           <span class="post-comment__text">
               laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo
               necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium
           </span>
       </div>
   </div>
</div>
*/

function createComment(author, text) {
  const comment = document.createElement("div");
  comment.className = "post-comment";

  const commentAuthor = document.createElement("span");
  commentAuthor.className = "post-comment__author";
  commentAuthor.innerText = author;

  const commentText = document.createElement("span");
  commentText.className = "post-comment__text";
  commentText.innerText = text;

  comment.append(commentAuthor, commentText);

  return comment;
}

function createPost(titleText, text, comments) {
  const post = document.createElement("div");
  post.id = "post";
  post.className = "post";

  const postTitle = document.createElement("h1");
  postTitle.className = "post__title";
  postTitle.innerText = titleText;

  const postText = document.createElement("p");
  postText.className = "post__text";
  postText.innerText = text;

  const commentsText = document.createElement("b");
  commentsText.className = "post__comments-text";
  commentsText.innerText = "Комментарии";

  const commentsBlock = document.createElement("div");
  commentsBlock.className = "post__comments";

  comments.forEach((comment) => {
    const commentItem = createComment(comment.email, comment.body);
    commentsBlock.append(commentItem);
  });

  post.append(postTitle, postText, commentsText, commentsBlock);

  return post;
}

function renderPost(postId) {
  fetch(`${POSTS_URL}/${postId}`)
    .then((response) => response.json())
    .then((post) => {
      fetch(`${COMMENTS_URL}?postId=${post.id}`)
        .then((response) => response.json())
        .then((comments) => {
          const postElement = createPost(post.title, post.body, comments);
          document.body.append(postElement);
        })
        .catch((error) => {
          console.error(error);
        });
    })
    .catch((error) => {
      console.error(error);
    });
}

renderPost(1);
