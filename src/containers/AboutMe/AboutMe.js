import React, { Component } from 'react';
import { Container, Flex } from 'theme/grid';
import { Title, VideoContainer } from './AboutMe.style';
import ReactPlayer from 'react-player';
import { H2, P } from 'theme/types';

class AboutMe extends Component {
  render() {
    return (
      <Container>
        <Title>AboutMe</Title>
        <H2 align="right">Whaa? Do you play sport? Hell yeah I do.</H2>
        <Flex>
          <P align="right">Check out this crazy basketball montage that didn't take me nearly one hour to make it.</P>
          <VideoContainer>
            <ReactPlayer
              width="100%"
              controls
              url={require('assets/basketball.mp4')}/>
          </VideoContainer>

        </Flex>
      </Container>
    );
  }
}

export default AboutMe;