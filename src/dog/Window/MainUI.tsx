import { Head } from './Head';
import { Foot } from './Foot';
import { Lateral } from './Lateral';
import { Content } from './Content';
import * as React from 'react';
import * as ReactDOM from 'react-dom';




export class MainUI extends React.Component<any, any> {
  public static instance;

  public static init(): MainUI {
    var global = (window as any).global
    MainUI.instance = ReactDOM.render(<MainUI />, document.getElementById('Dog3D'));
    global.mainUI = MainUI.instance;
    return MainUI.instance;
  }


  render() {
    return (
      <div>
        <Head ref="head" />
        <Foot ref="foot" />
        <Lateral ref="lateral" />
        <Content ref="content" />
      </div>
    )
  }
}


