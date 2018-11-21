import * as React from 'react';
import * as classNames from 'classnames';
import { createConsumer } from './context';
import Icon from '../icon';

export type MenuItemProps = {
  prefixCls?: string;
  className?: string;
  index: string;
  disabled?: boolean;
  icon?: string;
  rootContext: any;
};

class MenuItem extends React.Component<MenuItemProps> {
  static defaultProps = {
    prefixCls: 'dk-menu',
    disabled: false,
  };

  render() {
    const { children, prefixCls, className, index, disabled, rootContext, icon, ...attributes } = this.props;
    const rootState = rootContext.getState();
    const itemClassName = classNames({
      [`${prefixCls}-item`]: true,
      [`${prefixCls}-item-active`]: rootState.activeIndex === index,
      [`${prefixCls}-item-disabled`]: disabled,
    }, className);
    const iconNode = icon && typeof icon === 'string'
      ? <Icon type={icon} className={`${prefixCls}-icon`} />
      : null;

    return (
      <li className={itemClassName}
        onClick={disabled ? undefined : this.handleClick}
        {...attributes}
      >
        {iconNode}
        {children}
      </li>
    );
  }

  handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const { rootContext, index } = this.props;
    rootContext.selectItem(index);
  }
}

export default createConsumer(MenuItem);