import React, { useState, useEffect, useContext } from 'react';
import { getVideoById, getVideoComments } from '../APIConsumer';
import { Player } from 'video-react';
import { useParams } from 'react-router-dom';
import Comment from './Comment';
import { MemoizedCommentLine } from './CommentLine';
import { UserContext } from '../UserContext';
import { Container } from 'react-bootstrap';
import parseJSON from 'date-fns/parseJSON';

export default function VideoDetail() {
  const { id } = useParams('id');
  const [video, setVideo] = useState(null);
  const [comments, setComments] = useState(null);
  const [commentPosted, setCommentPosted] = useState(null);
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);
  useEffect(() => {
    getVideoById(id, setVideo);
    getVideoComments(id, setComments);
  }, []);
  return (
    <div>
      <Player playsInline src={video?.url} autoPlay width={'100%'} />
      <Container fluid="md" style={{ marginTop: '5px' }}>
        <span className="title">{video?.description}</span>
        <span className="date">
          {parseJSON(video?.uploadedAt).toDateString()}
        </span>
        <Comment
          videoId={id}
          userId={loggedInUser?.userId}
          setCommentPosted={setCommentPosted}
        />
        {loggedInUser != null && commentPosted != null && (
          <MemoizedCommentLine
            comment={{
              userId: loggedInUser?.id,
              videoId: id,
              date: new Date(),
              body: commentPosted.body,
            }}
          />
        )}

        {comments?.map((comment) => (
          <div key={comment?.id}>
            <MemoizedCommentLine comment={comment} />
          </div>
        ))}
      </Container>
    </div>
  );
}
