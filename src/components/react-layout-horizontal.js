import './style.scss';

import React,{Children, PropTypes, PureComponent, cloneElement} from 'react';

import classNames from 'classnames';
import objectAssign from 'object-assign';

export default class extends PureComponent{
  static propTypes = {
    className:PropTypes.string,
    justify:PropTypes.string,
  };

  render(){
    const {children,className,justify,...props} = this.props;
    return (
      <section {...props} data-justify={justify}  className={classNames('react-layout-horizontal',this.props.className)}>{children}</section>
    );
  }
}
