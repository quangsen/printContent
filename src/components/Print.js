import React, { Component } from 'react';
import ReactDOMServer from "react-dom/server";

class Mama extends Component {
  render() {
    return (
      <div className="Mama">
        <p>troi dong dep qua di</p>
        <b>toi thich may thich gio</b>
        <h1>Hanh phuc khi co em</h1>
      </div>
    );
  }
}

class Print extends Component {
  render() {
    return (
      <div className="App">
        reactjs
        <button onClick={this.handle} >Click</button>
      </div>
    );
  }

  // _renderInfoWindow = (place) => {
  //   return React.renderToString(
  //     <div>
  //       <h4>toi biet roi</h4>
  //       <p>Ban hieu khong</p>
  //       {/* <button className="btn btn-danger btn-block" onClick={this.props.addList.bind(this, place)}>I want to go here !! </button> */}
  //     </div>
  //   );
  // }

  handle = () => {
    // let template = String(require('../template.html'))
    // console.log(template); return;
    //

    let htmlString = ReactDOMServer.renderToStaticMarkup(
      <Mama />
);
   
    // console.log(htmlkaka)
    // return;


    const tata = this.props.contentPrint;
    let data = this.props.data;
    console.log(tata);

    let qz = require('qz-tray');
    let sha256 = require('js-sha256');
    let Q = require('q');

    qz.api.setSha256Type(function (data) {
      return sha256(data);
    });
    qz.api.setPromiseType(Q.Promise);

    qz.websocket.connect().then(function (name) {
      return qz.printers.find('Microsoft Print to PDF')               // Pass the printer name into the next Promise
    }).then(function (printer) {
      console.log(printer)
      var config = qz.configs.create(printer);

      qz.printers.getDefault().then(function (data) {
        config.setPrinter(printer);
      }).catch(err => console.log(err));

      var data = [
        {
          type: 'html',
          data: htmlString,
          format: 'plain', // or 'plain' if the data is raw HTML
        }
      ];

      return qz.print(config, data).catch(function (e) { console.error(e); });

    }).catch(function (e) { console.error(e); });

  }
}

export default Print