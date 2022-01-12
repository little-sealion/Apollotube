### Task
Using ReactJS, write a simple video player where people can watch videos and leave comments.

Heads up: Data is served from a read-only data store, so no information will be persisted between requests.

To submit your work, commit and push everything to a public repo (such as GitHub) and send us the URL in an email.

### URLs
 #### Base URL for this test
 https://my-json-server.typicode.com/fattymiller/youtube-test/

 - GET /profile
    > The profile of the currently logged in user
 - GET /users
    > Details on all users registered on the platform
 - GET /users/[id]
    > Profile information for user with [id]
 - GET /users/[id]/videos
    > A collection of all videos uploaded by a User
 - GET /users/[id]/comments
    > A collection of all comments posted by a user
 - GET /videos
    > A collection of all videos that have been uploaded
 - GET /videos/[id]
    > Details on the uploaded video including a link to a video file to play
 - GET /videos/[id]/comments
    > A collection of all comments uploaded to video with [id]
 - POST /videos/[id]/comments
    > A URL that a user can post to when leaving a comment against a video.

    > **Note** this URL is read-only, no data will actually be persisted.

### Example request code
```
fetch('https://my-json-server.typicode.com/fattymiller/youtube-test/users/2/videos')
  .then(response => response.json())
  .then(json => console.log(json))
```

> Expected response
```
[
  {
    description: "Started out trying to be the next Beatles.\nGot my Johnny Walkers out instead."
    id: 3
    size: 12492.8
    title: "Johnny Walker Beatles Time"
    uploadedAt: "2019-04-07T12:16:47+10:00"
    url: "https://s3-ap-southeast-2.amazonaws.com/coding-test-asset/walker.mp4"
    userId: 2
  }
]
```

### Data Dictionary
#### Users
 - id (number)
 - name (string)
 - type (string): Either 'guest' or 'uploader'
#### Videos
 - id (number)
 - userId (number): References the uploader record
 - title (string)
 - description (string): In markdown format
 - uploadedAt (datetime)
 - url (string)
 - size (number)
#### Comments
 - id (number)
 - userId (number): References the guest who wrote the comment
 - videoId (number): References the video the comment was made against
 - date (datetime)
 - body (string)
#### Profile
 - id (number): Your user ID
 - name (string)
 - memberSince (datetime)
 - watched (array): Which videos you have watched, and how far through you made it
 - subscriptions (array): Which uploaders you have subscribed to
