import React, { Component } from 'react';
import logo from './logo.svg';
import Print from './components/Print';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ''
    }
  }

  render() {
    // let data = (
    //   <div>
    //     Day la van ban dep ok
    //     <b>ban thay sao</b>
    //     <h1>haha ok</h1>
    //   </div>
    // )
    // console.log('momo',data)
   
    return (
      <div>
      
        {/* <div id='kim'>
          <p>Day la noi dung toi muon in</p>
          <p>ok khong cac ban</p>
        </div>
        <div>khong in</div> */}
        <Print 
          contentPrint={this.state.content} 
          // data={data}
        />
        {/* {this.state.content} */}
      </div>
    );
  }

  // componentDidMount() {
  //   let kim = document.getElementById('kim').innerHTML;
  //   this.setState({
  //     content: kim
  //   })
  //   console.log(kim);
  // }
}

export default App