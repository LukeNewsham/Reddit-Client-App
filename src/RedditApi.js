export default function redditApi(search, setPosts) {
    fetch("https://www.reddit.com./r/" + search + ".json").then(res => {
       if (res.status !== 200) {
        console.log('Error: Link not found!');
        return
      }
      res.json().then(data => {
        if (data !== null) {
          let posts = data.data.children;
          let postsObjects = posts.map((post) => {
            return {data: post, favorited: ''}
          })
          setPosts(postsObjects);
        }
      })
    })
}

