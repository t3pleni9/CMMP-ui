import React, {Component} from 'react'
import HomeService from './Home/HomeService'

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
          <h1>{HomeService.getTitle()}</h1>
          <div className="media-body">
            {HomeService.getMaincontent()}
          </div>
        </div>
    );
  }
}


export default Home