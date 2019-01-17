import * as React from 'react';
import * as classNames from 'classnames';
import { isEqual } from 'lodash';
import { CheckboxProps } from './types';
import { CheckboxProvider, createConsumer } from './context';

export type CheckboxGroupProps = {
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
  defaultValue?: string[];
  value?: string[];
  min?: number;
  max?: number;
  onChange?: (options: string[]) => void;
};

export type CheckboxGroupState = {
  options: string[];
};

class CheckboxGroup extends React.PureComponent<CheckboxGroupProps, CheckboxGroupState> {
  static defaultProps = {
    prefixCls: 'dk-checkbox',
    value: [],
  };
  static getDerivedStateFromProps(nextProps: CheckboxGroupProps, prevState: CheckboxGroupState) {
    if (!isEqual(nextProps.value, prevState.options)) {
      return {
        options: nextProps.value
      }
    }
    return null;
  }

  constructor(props: CheckboxGroupProps) {
    super(props);

    const options = props.defaultValue || props.value || [];
    this.state = {
      options,
    };
  }

  render() {
    const { className, style, prefixCls, children, min, max } = this.props;
    const { options } = this.state;
    const groupClassName = classNames(
      {
        [`${prefixCls}-group`]: true,
      },
      className,
    );

    return (
      <div className={groupClassName} style={style}>
        <CheckboxProvider
          value={{
            onRawChange: this.handleRawChange,
            options,
            min,
            max,
          }}
        >{children}</CheckboxProvider>
      </div>
    );
  }

  checkMin = () => {
    const { min } = this.props;
    if (min !== undefined && length < min) {
      return true;
    }
    return false;
  }

  checkMax = () => {
    const { max } = this.props;
    if (max !== undefined && length > max) {
      return true;
    }
    return false;
  }

  getOptions = () => {
    if ('value' in this.props && this.props.value instanceof Array) {
      return this.props.value;
    }
    return this.state.options;
  }

  handleRawChange = (checked: boolean, label: string) => {
    const options = this.getOptions();
    const { onChange } = this.props;
    const newOptions = !!checked
      ? Array.from(new Set([...options, label]))
      : options.filter(option => option !== label);

    this.setState({
      options: newOptions,
    });

    if (typeof onChange === 'function') {
      onChange(newOptions);
    }
  }
}

export default CheckboxGroup;
