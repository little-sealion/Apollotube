import React, { useState, useEffect } from 'react';
import { Player } from 'video-react';
import { Link } from 'react-router-dom';
import { getAllVideos } from '../APIConsumer';
import { Row, Card } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
export default function VideoList() {
  const [videos, setVideos] = useState(null);
  useEffect(() => {
    getAllVideos(setVideos);
  }, []);
  return (
    <Container fluid="md" style={{ marginTop: '5px' }}>
      <Row className="justify-content-center">
        {videos?.map((video) => (
          <Card key={video.id} style={{ width: '24rem', border: 'none' }}>
            <Link to={`/videos/${video.id}`}>
              <Player playsInline src={video.url} />
            </Link>
            <Card.Body>
              <Card.Title>{video.title}</Card.Title>
              <Card.Text>{`${video.description.substring(
                0,
                80
              )}...`}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </Row>
    </Container>
  );
}
