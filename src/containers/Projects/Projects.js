import React, { Component } from 'react';
import Zoomy from 'react-zoomy';
import {
  ImageButton,
  Index,
} from './Projects.style';
import { Container, Relative, Flex } from 'theme/grid';
import { A } from 'theme/types';
import ParallaxImage from 'react-image-parallax2';

class Projects extends Component {
  render() {
    return (
      <Container>
        <Relative marginBottom="100px">
          <Index>
            <h1>01</h1>
          </Index>
          <h1>npm install --save <A href="">react-zoomy</A></h1>
        </Relative>
        <Flex justify={'center'}>
          <Zoomy
            imageUrl={require('assets/basketball3.png')}
            renderThumbnail={({ showImage }) =>
              <ImageButton onClick={showImage}>
                <img
                  src={require('assets/basketball3_thumbnail.png')}
                  alt="basketball"/>
              </ImageButton>
            }
            scale={[1.1, 1.1]}
            imageProps={{
              style: {
                width: '100vw',
                height: 'auto'
              }
            }}
          />
        </Flex>
      </Container>
    );
  }
}

export default Projects;