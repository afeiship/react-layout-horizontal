import './style.scss';

import {ALIGN, JUSTIFY} from './const';
import React,{Children, PureComponent, cloneElement} from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class extends PureComponent{
  static propTypes = {
    className:PropTypes.string,
    justify: PropTypes.oneOf(JUSTIFY),
    align: PropTypes.oneOf(ALIGN),
  };

  static defaultProps = {
    justify:'start',
    align:'center'
  }

  render(){
    const {className,justify,align,...props} = this.props;
    return (
      <section {...props}  className={classNames(
        'react-layout-horizontal',
        `row-justify-${justify}`,
        `row-${align}`,
        className)} />
    );
  }
}
