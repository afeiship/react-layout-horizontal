# react-layout-horizontal
> React component for layout[left/middle/right] horizontal.



## properties:
```javascript
/*===properties start===*/
static propTypes = {
  className: PropTypes.string,
  flex:PropTypes.bool
};

static defaultProps = {
};
/*===properties end===*/
```


## usage:
```jsx
import {
  ReactLayoutHorizontal,
  ReactLayoutItem,
} from './main';

class App extends React.Component{
  render(){
    return (
      <div className="hello-react-layout-lmr">
        <h1>Justify:flex-start</h1>
        <ReactLayoutHorizontal>
          <ReactLayoutItem className="left" style={{width:'100px'}}>left</ReactLayoutItem>
          <ReactLayoutItem className="middle" flex>middle</ReactLayoutItem>
          <ReactLayoutItem className="right"  style={{width:'200px'}}>right</ReactLayoutItem>
        </ReactLayoutHorizontal>


        <h1>Justify:space-between</h1>
        <ReactLayoutHorizontal justify='space-between'>
          <ReactLayoutItem className="left" style={{width:'100px'}}>left</ReactLayoutItem>
          <ReactLayoutItem className="right"  style={{width:'200px'}}>right</ReactLayoutItem>
        </ReactLayoutHorizontal>
    </div>
    );
  }
}

```



## resource:
+ http://www.cnblogs.com/Kummy/p/4966937.html
+ https://github.com/steven5538/vue-button
+ https://yarnpkg.com/en/docs/install
