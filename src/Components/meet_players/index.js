import React, { Component } from 'react';
import Stripes from '../../Resources/images/stripes.png';
import { Reveal } from 'react-reveal';
import HomeCards from './cards';
import { Tag } from '../ui/misc';

export default class MeetPlayers extends Component {
  state = {
    show: false
  };

  render() {
    return (
      <Reveal
        fraction={0.7}
        onReveal={() => {
          this.setState({ show: true });
        }}
      >
        <div
          className="home_meetplayers"
          style={{
            background: `#ffffff url(${Stripes})`
          }}
        >
          <div className="container">
            <div className="home_meetplayers_wrapper">
              <div className="home_card_wrapper">
                <HomeCards show={this.state.show} />
              </div>
              <div className="home_text_wrapper">
                <div>
                  <Tag
                    bck="#0e1732"
                    size="100px"
                    color="#ffffff"
                    add={{
                      display: 'inline-block',
                      marginBottom: '20px'
                    }}
                  >
                    Meet

                  </Tag>
                </div>
                <div>
                  <Tag
                    bck="#0e1732"
                    size="100px"
                    color="#ffffff"
                    add={{
                      display: 'inline-block',
                      marginBottom: '20px'
                    }}
                  >
                    The
                  </Tag>
                </div>
                <div>
                  <Tag
                    bck="#0e1732"
                    size="100px"
                    color="#ffffff"
                    add={{
                      display: 'inline-block',
                      marginBottom: '20px'
                    }}
                  >
                    Players
                  </Tag>
                </div>
                <div>
                  <Tag
                    bck="#ffffff"
                    size="27px"
                    color="#e1732"
                    link={true}
                    linkto="/the_team"
                    add={{
                      display: 'inline-block',
                      marginBottom: '27px',
                      border: '1px solid #0e1732'
                    }}
                  >
                    Meet them here
                  </Tag>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    );
  }
}
