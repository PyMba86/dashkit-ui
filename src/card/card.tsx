import * as classNames from 'classnames';
import * as React from 'react';
import Accordion from './accordion';
import Collapse from './collapse';
import Header from './header';
import Footer from './footer';
import Body from './body';
import { CardProps, CardState } from './types';
import { Provider } from './context';

class Card extends React.PureComponent<CardProps, CardState> {
  static Header: typeof Header;
  static Footer: typeof Footer;
  static Body: typeof Body;
  static Accordion: typeof Accordion;
  static Collapse: typeof Collapse;
  static defaultProps = {
    prefixCls: 'dk-card',
    visible: true,
  };

  static getDerivedStateFromProps(nextProps: CardProps) {
    if ('visible' in nextProps) {
      return {
        visible: nextProps.visible,
      }
    }
    return null;
  }

  constructor(props: CardProps) {
    super(props);
    this.state = {
      visible: !!props.visible,
    };
  }

  render() {
    const {
      className,
      prefixCls,
      children,
      collapse,
      visible: visibleProp,
      onCollapse,
      ...attributes
    } = this.props;
    const { visible } = this.state;
    const cardClassName = classNames(
      prefixCls,
      className,
    );
    console.log(visible);
    return (
      <div {...attributes} className={cardClassName}>
        <Provider
          value={{
            visible,
            collapse,
            handleHeaderClick: this.handleHeaderClick
          }}
        >{children}</Provider>
      </div>
    );
  }

  handleHeaderClick = () => {
    const { visible } = this.state;
    const { index, onCollapse } = this.props;
    console.log('call handleHeaderClick', index, visible);
    if (typeof onCollapse === 'function') {
      onCollapse(index);
      return;
    }
    this.setState({
      visible: !visible,
    });
  }
}

export default Card;