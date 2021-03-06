import * as React from 'react';
import * as classNames from 'classnames';
import { PickerChildProps } from './typings';
import { addYears, isSameYear } from './utils';
import { rangeNumber } from '../utils/number';
import Icon from '../icon';

export type YearProps = PickerChildProps;

class Year extends React.PureComponent<YearProps> {
  constructor(props: YearProps) {
    super(props);
  }

  public render() {
    const { prefixCls, current, value, hideLeftIcon, hideRightIcon } = this.props;
    const startYear = Math.floor(current.getFullYear() / 10) * 10;
    const years = rangeNumber(11, -1).map(i => startYear + i);

    return (
      <div className={`${prefixCls}-ym`}>
        <div className={`${prefixCls}-header`}>
          <div className={`${prefixCls}-config`}>
            <Icon
              className={`${prefixCls}-config-icon`}
              type="chevrons-left"
              onClick={this.handlePrevRange}
              disabled={hideLeftIcon}
            />
            <div className={`${prefixCls}-select`}>
              <span>
                {years[1]} ~ {years[years.length - 2]}
              </span>
            </div>
            <Icon
              className={`${prefixCls}-config-icon`}
              type="chevrons-right"
              onClick={this.handleNextRange}
              disabled={hideRightIcon}
            />
          </div>
        </div>
        <div className={`${prefixCls}-list`}>
          {years.map((year, i) => (
            <div
              key={year}
              className={classNames({
                [`${prefixCls}-ym-item`]: true,
                [`${prefixCls}-ym-item-other`]: i === 0 || i === years.length - 1,
                [`${prefixCls}-ym-item-active`]: value && isSameYear(year.toString(), value),
              })}
              onClick={this.handleYearClick.bind(this, year)}
            >
              <span>{year}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  public handleYearClick = (year: number) => {
    const { current, onChange, disabled, type, value } = this.props;

    if (disabled) {
      return;
    }
    const date = new Date(current.getTime());
    const isYear = type === 'year';
    date.setFullYear(year);
    onChange(date, isYear);
    if (!isYear) {
      this.props.onModeChange('month');
    }
  };

  public handleYear = (year: number) => {
    const { current, onChange, disabled } = this.props;
    if (disabled) {
      return;
    }
    onChange(addYears(current, year));
  };

  public handlePrevRange = () => {
    this.handleYear(-10);
  };

  public handleNextRange = () => {
    this.handleYear(10);
  };
}

export default Year;
