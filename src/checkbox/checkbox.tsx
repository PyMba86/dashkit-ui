import * as React from 'react';
import * as PropTypes from 'prop-types';
import * as classNames from 'classnames';

export type CheckboxProps = {
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
  checked?: boolean;
  label?: string;
  disabled?: boolean;
  indeterminate?: boolean;
  defaultChecked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export interface CheckboxState {
  checked?: boolean;
}
class Checkbox extends React.PureComponent<CheckboxProps, CheckboxState> {
  static Group: any;
  static elementType = 'Checkbox';
  static contextTypes = {
    groupHook: PropTypes.object,
  };
  static defaultProps = {
    disabled: false,
    prefixCls: 'dk-checkbox',
    indeterminate: false,
  };

  constructor(props: CheckboxProps) {
    super(props);

    const checked = 'defaultChecked' in props ? props.defaultChecked : !!props.checked;
    this.state = {
      checked,
    };
  }

  render() {
    const { children, className, style, prefixCls, label, disabled, indeterminate } = this.props;
    const checked = this.getChecked();
    const checkboxClassName = classNames(
      prefixCls,
      {
        [`${prefixCls}-checked`]: checked,
        [`${prefixCls}-disabled`]: disabled,
        [`${prefixCls}-indeterminate`]: indeterminate,
      },
      className,
    );
    return (
      <label className={checkboxClassName} style={style}>
        <input
          className={`${prefixCls}-input`}
          type="checkbox"
          disabled={disabled}
          onChange={this.handleChange}
          checked={!!checked}
        />
        <i className={`${prefixCls}-indicator`} />
        <span>{children || label}</span>
      </label>
    );
  }

  getChecked = () => {
    if ('checked' in this.props) {
      return this.props.checked;
    }
    return this.state.checked;
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { onChange } = this.props;
    const { checked } = event.target;
    const { groupHook } = this.context;

    if (groupHook) {
      const length = groupHook.state.options.length + (checked ? 1 : -1);
      if (groupHook.props.min !== undefined && length < groupHook.props.min) {
        return;
      }

      if (groupHook.props.max !== undefined && length > groupHook.props.max) {
        return;
      }
    }

    this.setState({
      checked,
    });

    if (typeof onChange === 'function') {
      onChange(event);
    }
  }
}

export default Checkbox;