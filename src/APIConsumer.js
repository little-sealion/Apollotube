const baseUrl = 'https://my-json-server.typicode.com/fattymiller/youtube-test';

async function getAllVideos(setGetResult) {
  try {
    const res = await fetch(`${baseUrl}/videos`);

    if (!res.ok) {
      const message = `An error has occured: ${res.status} - ${res.statusText}`;
      throw new Error(message);
    }

    const videos = await res.json();
    setGetResult(videos);
  } catch (err) {
    console.log(err.message);
    setGetResult(null);
  }
}

async function getVideoById(id, setGetResult) {
  try {
    const res = await fetch(`${baseUrl}/videos/${id}`);
    if (!res.ok) {
      const message = `An error has occured: ${res.status} - ${res.statusText}`;
      throw new Error(message);
    }
    const video = await res.json();
    setGetResult(video);
  } catch (err) {
    console.log(err.message);
    setGetResult(null);
  }
}

async function getUserById(id, setGetResult) {
  try {
    const res = await fetch(`${baseUrl}/users/${id}`);
    if (!res.ok) {
      const message = `An error has occured: ${res.status} - ${res.statusText}`;
      throw new Error(message);
    }
    const user = await res.json();
    setGetResult(user);
  } catch (err) {
    console.log(err.message);
    setGetResult(null);
  }
}

async function getVideoComments(id, setGetResult) {
  try {
    const res = await fetch(`${baseUrl}/videos/${id}/comments`);

    if (!res.ok) {
      const message = `An error has occured: ${res.status} - ${res.statusText}`;
      throw new Error(message);
    }

    const comments = await res.json();
    setGetResult(comments);
  } catch (err) {
    console.log(err.message);
    setGetResult(null);
  }
}

async function postVideoComment(postData, setCommentPosted) {
  try {
    const res = await fetch(`${baseUrl}/videos/${postData.videoId}/comments`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    });

    if (!res.ok) {
      const message = `An error has occured: ${res.status} - ${res.statusText}`;
      throw new Error(message);
    }
    const result = await res.json();
    setCommentPosted(result);
  } catch (err) {
    console.log(err.message);
  }
}

async function getProfile(setLoggedInUser) {
  try {
    const res = await fetch(`${baseUrl}/profile`);

    if (!res.ok) {
      const message = `An error has occured: ${res.status} - ${res.statusText}`;
      throw new Error(message);
    }

    const profile = await res.json();
    setLoggedInUser(profile);
  } catch (err) {
    console.log(err.message);
    setLoggedInUser(null);
  }
}

export {
  getAllVideos,
  getVideoById,
  getVideoComments,
  postVideoComment,
  getUserById,
  getProfile,
};
