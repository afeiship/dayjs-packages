import dayjs from 'dayjs';
import customFormats from '../src';

// load plugin
dayjs.extend(customFormats);

describe('api.basic', () => {
  test('01/Dayjs with std formats', () => {
    const date = dayjs('2021-01-01 12:00:00');
    expect(date.format('YYYY-MM-DD HH:mm:ss')).toBe('2021-01-01 12:00:00');
    expect(date.format('YYYY-MM-DD')).toBe('2021-01-01');
    expect(date.format('HH:mm:ss')).toBe('12:00:00');
  });

  test('02/Dayjs with custom formats', () => {
    const date = dayjs('2021-01-01 12:00:00');
    expect(date.format('date')).toBe('2021-01-01');
    expect(date.format('time')).toBe('12:00:00');
    expect(date.format('datetime')).toBe('2021-01-01 12:00:00');
    expect(date.format('month')).toBe('2021-01');
    expect(date.format('dbdt')).toBe('20210101_120000');
  })
});
