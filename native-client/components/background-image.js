import React, {Component} from 'react';
import { Image } from 'react-native';

class BackgroundImage extends Component {

  render() {
      return (
          <Image source={require('../public/background.jpeg')}>
                  {/* {this.props.children} */}
          </Image>
      )
  }
}

export default BackgroundImage;
