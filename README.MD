# react-layout-horizontal
> React component for layout[left/middle/right] horizontal.



## properties:
```javascript
//export const JUSTIFY = ['start', 'end', 'center', 'around', 'between'];

//react-layout-horizontal:
static propTypes = {
  className:PropTypes.string,
  justify: PropTypes.oneOf(JUSTIFY),
  align: PropTypes.oneOf(ALIGN),
};

static defaultProps = {
  justify:'start',
  align:'center'
}

//react-layout-item
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
        <ReactLayoutHorizontal justify='between'>
          <ReactLayoutItem className="left" style={{width:'100px'}}>left</ReactLayoutItem>
          <ReactLayoutItem className="right"  style={{width:'200px'}}>right</ReactLayoutItem>
        </ReactLayoutHorizontal>



        <ReactLayoutHorizontal className="test13">
          <ReactLayoutItem flex>
            <span>测试1</span>
            <em>测试1小字</em>
          </ReactLayoutItem>

          <ReactLayoutItem flex>
            <span>测试2</span>
            <em>测试2小字</em>
          </ReactLayoutItem>

          <ReactLayoutItem flex>
            <span>测试3</span>
            <em>测试3小字</em>
          </ReactLayoutItem>

          <ReactLayoutItem flex>
            <span>测试4</span>
            <em>测试4小字</em>
          </ReactLayoutItem>
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
