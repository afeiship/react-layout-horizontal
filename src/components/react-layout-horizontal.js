import './style.scss';

import React,{Children, PropTypes, PureComponent, cloneElement} from 'react';

import {JUSTIFY} from './const';
import classNames from 'classnames';

export default class extends PureComponent{
  static propTypes = {
    className:PropTypes.string,
    justify: PropTypes.oneOf(JUSTIFY)
  };

  render(){
    const {children,className,justify,...props} = this.props;
    return (
      <section {...props}  className={classNames('react-layout-horizontal',`row-justify-${justify}`,this.props.className)}>{children}</section>
    );
  }
}
