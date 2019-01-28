import * as React from 'react';
import * as classNames from 'classnames';
import { createPortal } from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import Panel from './panel';
import Icon from '../icon';

export type ModalProps = {
  prefixCls?: string;
  visible?: boolean;
  disabled?: boolean;
  title?: string;
  okText?: string;
  cancelText?: string;
  onConfirm?: VoidFunction;
  onCancel?: VoidFunction;
  onClose?: VoidFunction;
};

export type ModalState = {
  visible: boolean;
};

class Modal extends React.Component<ModalProps, ModalState> {
  static defaultProps = {
    prefixCls: 'dk-modal',
  };

  static getDerivedStateFromProps(nextProps: ModalProps) {
    const state: Partial<ModalProps> = {};
    if ('visible' in nextProps) {
      state.visible = !!nextProps.visible;
    }
    return state;
  }

  constructor(props: ModalProps) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  render() {
    if (!this.state.visible) {
      return null;
    }

    const { prefixCls, visible, ...attibutes } = this.props;

    const node = (
      <div className={`${prefixCls}`}>
        <div className={`${prefixCls}-mask`} onClick={this.closeModal} />
        <Panel
          {...attibutes}
          prefixCls={prefixCls}
          visible={visible}
        />
      </div>
    );
    return createPortal(node, document.body);
  }

  closeModal = () => {
    const { onClose } = this.props;
    this.setState({
      visible: false
    });
    if (typeof onClose === 'function') {
      onClose();
    }
  }
}

export default Modal;