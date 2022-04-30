// asynchronous requst to for the upvote button using a fetch request
async function upvoteClickHandler(event) {
    event.preventDefault();
    console.log('button clicked');
    
    // get the id of the post by getting the URL string and making it an array and splitting it on the '/'
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    const response = await fetch('/api/posts/upvote',{
        method: 'PUT',
        body: JSON.stringify({
            post_id: id
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if(response.ok){
        document.location.reload();
    } else {
        alert(response.statusText);
    }
  }
  
  document.querySelector('.upvote-btn').addEventListener('click', upvoteClickHandler);