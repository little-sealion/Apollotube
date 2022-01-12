import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { postVideoComment } from '../APIConsumer';

export default function (props) {
  const { userId, videoId, setCommentPosted, setNewPosts, newPosts } = props;
  const [comment, setComment] = useState('');

  //{"userId":1,"videoId":1,"date":"2022-01-11","body":"This video is awesome by Tess"}
  const postData = {
    userId,
    videoId,
    date: new Date().toJSON(),
    body: comment,
  };

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        postVideoComment(postData, setCommentPosted);
        setComment('');
      }}
    >
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Col sm="11">
          <Form.Control
            type="text"
            placeholder="Leave a comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </Col>
        <Col sm="1">
          <Button
            variant="primary"
            type="submit"
            disabled={comment == '' ? true : false}
          >
            Submit
          </Button>
        </Col>
      </Form.Group>
    </Form>
  );
}
