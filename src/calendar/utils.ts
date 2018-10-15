import { parse } from 'date-fns';
import { DateProps } from './types';

const token = /d{1,4}|M{1,4}|yy(?:yy)?|S{1,3}|Do|ZZ|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g;
const twoDigits = /\d\d?/;
const threeDigits = /\d{3}/;
const fourDigits = /\d{4}/;
const word = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i;
const literal = /\[([^]*?)\]/gm;
const noop = function () {
};
const amPm = ['am', 'pm'];

function shorten(arr: string[], sLen: number) {
  var newArr = [];
  for (var i = 0, len = arr.length; i < len; i++) {
    newArr.push(arr[i].substr(0, sLen));
  }
  return newArr;
}

function DoFn(D: number) {
  return D + ['th', 'st', 'nd', 'rd'][D % 10 > 3 ? 0 : (D - D % 10 !== 10) * D % 10];
}

const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
export const weekdayValues = {
  short: shorten(weekdays, 3),
  long: weekdays,
};

export const monthValues = {
  short: shorten(months, 3),
  long: months,
};

export function toDate(dirtyDate: DateProps) {
  if (arguments.length < 1) {
    throw new TypeError(
      '1 argument required, but only ' + arguments.length + ' present',
    );
  }

  if (dirtyDate instanceof Date) {
    return new Date(dirtyDate.getTime());
  } else if (typeof dirtyDate === 'number') {
    return new Date(dirtyDate);
  } else if (typeof dirtyDate === 'string') {
    return new Date(dirtyDate);
  }

  return new Date(NaN);
}

function pad(val: number, len = 2) {
  let newVal = String(val);
  while (newVal.length < len) {
    newVal = '0' + val;
  }
  return newVal;
}

const formatFlags: any = {
  D: function(date: Date) {
    return date.getDay();
  },
  DD: function(date: Date) {
    return pad(date.getDay());
  },
  Do: function(date: Date) {
    return DoFn(date.getDate());
  },
  d: function(date: Date) {
    return date.getDate();
  },
  dd: function(date: Date) {
    return pad(date.getDate());
  },
  M: function(date: Date) {
    return date.getMonth() + 1;
  },
  MM: function(date: Date) {
    return pad(date.getMonth() + 1);
  },
  yy: function(date: Date) {
    return String(date.getFullYear()).substr(2);
  },
  yyyy: function(date: Date) {
    console.log('yyyy', date)
    return date.getFullYear();
  },
  h: function(date: Date) {
    return date.getHours() % 12 || 12;
  },
  hh: function(date: Date) {
    return pad(date.getHours() % 12 || 12);
  },
  H: function(date: Date) {
    return date.getHours();
  },
  HH: function(date: Date) {
    return pad(date.getHours());
  },
  m: function(date: Date) {
    return date.getMinutes();
  },
  mm: function(date: Date) {
    return pad(date.getMinutes());
  },
  s: function(date: Date) {
    return date.getSeconds();
  },
  ss: function(date: Date) {
    return pad(date.getSeconds());
  },
  S: function(date: Date) {
    return Math.round(date.getMilliseconds() / 100);
  },
  SS: function(date: Date) {
    return pad(Math.round(date.getMilliseconds() / 10), 2);
  },
  SSS: function(date: Date) {
    return pad(date.getMilliseconds(), 3);
  },
  a: function (date: Date) {
    return date.getHours() < 12 ? amPm[0] : amPm[1];
  },
  A: function (date: Date) {
    return date.getHours() < 12 ? amPm[0].toUpperCase() : amPm[1].toUpperCase();
  },
  ZZ: function(date: Date) {
    var o = date.getTimezoneOffset();
    return (o > 0 ? '-' : '+') + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4);
  }
};

export function formatDate(dirtyDate: DateProps, fmt: string) {
  if (arguments.length < 2) {
    throw new TypeError(
      '1 argument required, but only ' + arguments.length + ' present',
    );
  }
  const date = toDate(dirtyDate);

  if (isNaN(date)) {
    throw new Error('Invalid Date in format function');
  }

  console.log(date)

  const literals: any = [];

  // Make literals inactive by replacing them with ??
  fmt = fmt.replace(literal, function ($0, $1) {
    literals.push($1);
    return '??';
  });
  // Apply formatting rules
  fmt = fmt.replace(token, function($0) {
    console.log('$0', $0)
    return $0 in formatFlags
      ? formatFlags[$0](date)
      : $0.slice(1, $0.length - 1);
  });
  // Inline literal values back into the formatted value
  return fmt.replace(/\?\?/g, function() {
    return literals.shift();
  });
};

const parseFlags: any = {
  d: [twoDigits, function (d, v) {
    d.day = v;
  }],
  M: [twoDigits, function (d, v) {
    d.month = v - 1;
  }],
  h: [twoDigits, function (d, v) {
    d.hour = v;
  }],
  m: [twoDigits, function (d, v) {
    d.minute = v;
  }],
  s: [twoDigits, function (d, v) {
    d.second = v;
  }],
  yy: [twoDigits, function (d, v) {
    var da = new Date(), cent = +('' + da.getFullYear()).substr(0, 2);
    d.year = '' + (v > 68 ? cent - 1 : cent) + v;
  }],
  yyyy: [fourDigits, function (d, v) {
    d.year = v;
  }],
  S: [/\d/, function (d, v) {
    d.millisecond = v * 100;
  }],
  SS: [/\d{2}/, function (d, v) {
    d.millisecond = v * 10;
  }],
  SSS: [threeDigits, function (d, v) {
    d.millisecond = v;
  }],
  D: [twoDigits, noop],
  ddd: [word, noop],
  a: [word, function (d, v, i18n) {
    var val = v.toLowerCase();
    if (val === i18n.amPm[0]) {
      d.isPm = false;
    } else if (val === i18n.amPm[1]) {
      d.isPm = true;
    }
  }],
  ZZ: [/[\+\-]\d\d:?\d\d/, function (d, v) {
    var parts = (v + '').match(/([\+\-]|\d\d)/gi), minutes;

    if (parts) {
      minutes = +(parts[1] * 60) + parseInt(parts[2], 10);
      d.timezoneOffset = parts[0] === '+' ? minutes : -minutes;
    }
  }]
};
parseFlags.DD = parseFlags.D;
parseFlags.Do = parseFlags.dd = parseFlags.d;
parseFlags.mm = parseFlags.m;
parseFlags.hh = parseFlags.H = parseFlags.HH = parseFlags.h;
parseFlags.MM = parseFlags.M;
parseFlags.ss = parseFlags.s;
parseFlags.A = parseFlags.a;

export function addDays(dirtyDate: DateProps, amount: number) {
  amount = Number(amount);
  const date = toDate(dirtyDate);
  date.setDate(date.getDate() + amount);
  return date;
}

export function addMonths(dirtyDate: DateProps, amount: number) {
  amount = Number(amount);
  const date = toDate(dirtyDate);
  const desiredMonth = date.getMonth() + amount;
  const dateWithDesiredMonth = new Date(0);
  dateWithDesiredMonth.setFullYear(date.getFullYear(), desiredMonth, 1);
  dateWithDesiredMonth.setHours(0, 0, 0, 0);
  const daysInMonth = getTotalDaysOfMouth(dateWithDesiredMonth);
  date.setMonth(desiredMonth, Math.min(daysInMonth, date.getDate()));
  return date;
}

export function addYears(dirtyDate: DateProps, amount: number) {
  amount = Number(amount);
  return addMonths(dirtyDate, amount * 12);
}

export function endOfWeek(dirtyDate: DateProps) {
  const date = toDate(dirtyDate);
  const day = date.getDay();
  const diff = 6 - day;

  date.setDate(date.getDate() + diff);
  date.setHours(23, 59, 59, 999);
  return date;
}

export function endOfMonth(dirtyDate: DateProps) {
  const date = toDate(dirtyDate);
  const month = date.getMonth();
  date.setFullYear(date.getFullYear(), month + 1, 0);
  date.setHours(23, 59, 59, 999);
  return date;
}

export function startOfDay(dirtyDate: DateProps) {
  const date = toDate(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
}

export function startOfMonth(dirtyDate: DateProps) {
  const date = toDate(dirtyDate);
  date.setDate(1);
  date.setHours(0, 0, 0, 0);
  return date;
}

export function startOfWeek(dirtyDate: DateProps) {
  const date = toDate(dirtyDate);
  const day = date.getDay();
  const diff = day;

  date.setDate(date.getDate() - diff);
  date.setHours(0, 0, 0, 0);
  return date;
}

export function isDate(dirtyDate: DateProps) {
  if (dirtyDate === null || dirtyDate === undefined) {
    return false;
  }
  if (isNaN(new Date(dirtyDate).getTime())) {
    return false;
  }
  if (Array.isArray(dirtyDate)) {
    // deal with `new Date([ new Date() ]) -> new Date()`
    return false;
  }
  return true;
}

export function isSameDay(dirtyDateLeft: DateProps, dirtyDateRight: DateProps) {
  if (arguments.length < 2) {
    throw new TypeError(
      '2 arguments required, but only ' + arguments.length + ' present',
    );
  }

  const dateLeftStartOfDay = startOfDay(dirtyDateLeft);
  const dateRightStartOfDay = startOfDay(dirtyDateRight);

  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();
}

export function isSameWeek(
  dirtyDateLeft: DateProps,
  dirtyDateRight: DateProps,
) {
  if (arguments.length < 2) {
    throw new TypeError(
      '2 arguments required, but only ' + arguments.length + ' present',
    );
  }

  const dateLeftStartOfWeek = startOfWeek(dirtyDateLeft);
  const dateRightStartOfWeek = startOfWeek(dirtyDateRight);

  return dateLeftStartOfWeek.getTime() === dateRightStartOfWeek.getTime();
}

export function isSameMonth(
  dirtyDateLeft: DateProps,
  dirtyDateRight: DateProps,
) {
  if (arguments.length < 2) {
    throw new TypeError(
      '2 arguments required, but only ' + arguments.length + ' present',
    );
  }

  const dateLeft = toDate(dirtyDateLeft);
  const dateRight = toDate(dirtyDateRight);
  return (
    dateLeft.getFullYear() === dateRight.getFullYear() &&
    dateLeft.getMonth() === dateRight.getMonth()
  );
}

export function getTotalDaysOfMouth(dirtyDate: DateProps) {
  const date = toDate(dirtyDate);
  const year = date.getFullYear();
  const monthIndex = date.getMonth();
  const lastDayOfMonth = new Date(0);
  lastDayOfMonth.setFullYear(year, monthIndex + 1, 0);
  lastDayOfMonth.setHours(0, 0, 0, 0);
  return lastDayOfMonth.getDate();
}

export function prevMonth(dirtyDate: DateProps) {
  return addMonths(dirtyDate, -1);
}

export function nextMonth(dirtyDate: DateProps) {
  return addMonths(dirtyDate, 1);
}

export function prevYear(dirtyDate: DateProps) {
  return addMonths(dirtyDate, -12);
}

export function nextYear(dirtyDate: DateProps) {
  return addMonths(dirtyDate, 12);
}

export function getDaysOfMonth(dirtyDate: DateProps) {
  const date = toDate(dirtyDate);
  const end = endOfWeek(endOfMonth(date));
  let current = startOfWeek(startOfMonth(date));
  current.setHours(date.getHours());
  current.setMinutes(date.getMinutes());
  current.setSeconds(date.getSeconds());

  const days = [];

  while (current.getTime() < end.getTime()) {
    days.push(current);
    current = addDays(current, 1);
  }

  return days;
}

export function toDateWithFormat(dirtyDate: DateProps, fmt: string) {
  if (typeof dirtyDate === 'string') {
    return parse(dirtyDate, fmt, new Date());
  }
  return toDate(dirtyDate);
}

