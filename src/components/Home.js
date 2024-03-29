import React, { Component } from 'react';
import Services from './Services';
import './home.css';
import banner1 from '../assets/banner1.webp';
import banner4 from '../assets/banner4.webp'
import banner2 from '../assets/banner2.webp';
import banner3 from '../assets/banner3.gif';

import Carousel from 'react-bootstrap/Carousel'

import  {Roll,LightSpeed,Rotate,Slide} from 'react-reveal'
export class Home extends Component {
    render() {
        return (
          <div id="body">
            <Carousel fade id="carousl">
              <Carousel.Item class="carosltext">
                <img
                  className="d-block w-100 "
                  class="images"
                  src="https://source.unsplash.com/random/600x900/?city"
                  alt="First slide"
                />

                <Carousel.Caption>
                  <h3 className="h3">Welcome to Marriage Photography</h3>
                  <p className="p">
                    {" "}
                    Abstract photography is truly a way to express your creative
                    vision, to open your eyes to things you've never noticed
                    before and to make the unseen seen
                  </p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  class="images"
                  src="https://source.unsplash.com/random/600x900/?nature"
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <LightSpeed left>
                    <h3 className="h3">Welcome to Abstract Photography</h3>
                  </LightSpeed>
                  <p className="p">
                    Abstract photography is truly a way to express your creative
                    vision, to open your eyes to things you've never noticed
                    before and to make the unseen seen.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  class="images"
                  src="https://source.unsplash.com/random/600x900/?water"
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <Slide Right>
                    <h3 className="h3">Welcome to Videography</h3>
                  </Slide>
                  <p className="p">
                    Abstract photography is truly a way to express your creative
                    vision, to open your eyes to things you've never noticed
                    before and to make the unseen seen.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  class="images"
                  src="https://source.unsplash.com/random/600x900/?sunset"
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <Rotate left>
                    <h3 className="h33">Welcome to Adventure Photography</h3>
                  </Rotate>
                  <p className="p">
                    Abstract photography is truly a way to express your creative
                    vision, to open your eyes to things you've never noticed
                    before and to make the unseen seen.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>

            <Services />
          </div>
        );
    }
}

export default Home