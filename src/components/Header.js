import { Navbar, Container } from 'react-bootstrap';
import generateAvatar from '../generateAvatar.js';
import { Image } from 'react-bootstrap';
import { getProfile } from '../APIConsumer';
import { useState, useEffect, useContext } from 'react';
import { UserContext } from '../UserContext';

export default function Header() {
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);
  useEffect(() => {
    getProfile(setLoggedInUser);
  }, []);

  return (
    <Navbar bg="dark" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand href="/" style={{ alignContent: 'center' }}>
          <img
            alt=""
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Round_Landmark_Icon_Road.svg/1200px-Round_Landmark_Icon_Road.svg.png"
            width="40"
            height="40"
            className="d-inline-block align-top"
          />
          <span className="title">Apollotube</span>
        </Navbar.Brand>
        <Navbar.Text>
          <Image
            src={generateAvatar(
              loggedInUser == null ? '' : loggedInUser.name[0]
            )}
            alt="user avatar"
            roundedCircle
          />
          {loggedInUser?.name}
        </Navbar.Text>
      </Container>
    </Navbar>
  );
}
