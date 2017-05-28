import React, {PureComponent} from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class extends PureComponent {
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    flex:PropTypes.bool
  };
  /*===properties end===*/

  render() {
    const {className, children,flex,...props} = this.props;
    return (
      <div {...props} className={classNames('react-layout-item',{
        'flex-col':flex
      } ,className)}>{children}</div>
    );
  }
}
