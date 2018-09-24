import './style.scss';

import * as classNames from 'classnames';
import * as React from 'react';

export type IconProps = {
  prefixCls?: string;
  type: string;
  className?: string;
  onClick?: React.MouseEventHandler<any>;
};

class Icon extends React.PureComponent<IconProps> {


  static defaultProps = {
    prefixCls: 'dk-icon',
  };
  render() {
    const { className, type, prefixCls, ...attribute } = this.props;
    const iconClassName = classNames(
      prefixCls,
      {
        [`${prefixCls}-${type}`]: true,
      },
      className,
    )
    return <i {...attribute} className={iconClassName} />;
  }
}

Icon.defaultProps = {
  prefixCls: 'dashkit-icon',
};

export default Icon;
