import React, { useEffect, useState } from 'react';
import { Image, Stack } from 'react-bootstrap';
import { getUserById } from '../APIConsumer';
import generateAvatar from '../generateAvatar';
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict';

function CommentLine(props) {
  const { userId, videoId, date, body } = props.comment;
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUserById(userId, setUser);
  }, []);
  let distance = formatDistanceToNowStrict(Date.parse(date)) + ' ago';

  return (
    <div>
      <Stack direction="horizontal" gap={3}>
        <Image
          src={generateAvatar(user == null ? '' : user.name[0])}
          alt="user avatar"
          roundedCircle
        />
        <Stack gap={0}>
          <Stack direction="horizontal" gap={2}>
            <span className="name">{user == null ? '' : user.name}</span>
            <span className=" date">{distance}</span>
          </Stack>

          <div> {body}</div>
        </Stack>
      </Stack>
    </div>
  );
}

export const MemoizedCommentLine = React.memo(CommentLine);
