import './dev.scss';
import ReactLayoutLmr from './main';


class App extends React.Component{
  render(){
    return (
      <div className="hello-react-layout-lmr">
        <ReactLayoutLmr>
          <div className="left" width="100px">left</div>
          <div className="middle">middle</div>
          <div className="right" width="50px">right</div>
        </ReactLayoutLmr>
    </div>
    );
  }
}


ReactDOM.render(
    <App />,
    document.getElementById('app')
);
