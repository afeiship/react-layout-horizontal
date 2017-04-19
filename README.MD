# react-layout-lmr
> React component for layout[left/middle/right].


## resource:
+ http://www.cnblogs.com/Kummy/p/4966937.html
+ https://github.com/steven5538/vue-button
+ https://yarnpkg.com/en/docs/install


## props:
```javascript
static propTypes = {
  className:PropTypes.string,
};
```
## usage:
```jsx
import ReactLayoutLmr from 'react-layout-lmr';

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
```
