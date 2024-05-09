import { PluginFunc } from 'dayjs';

const CUSTOM_FORMATS = {
  date: 'YYYY-MM-DD',
  time: 'hh:mm:ss',
  datetime: 'YYYY-MM-DD HH:mm:ss',
  month: 'YYYY-MM',
  dbdt: 'YYYYMMDD_hhmmss',
};

const customFormatsPlugin: PluginFunc = (option, dayjsClass, dayjsFactory) => {
  const oldFormat = dayjsClass.prototype.format;
  dayjsClass.prototype.format = function(formatStr, ...args) {
    const isCustomFormat = Object.keys(CUSTOM_FORMATS).includes(formatStr!);
    if (formatStr && isCustomFormat) {
      return oldFormat.call(this, CUSTOM_FORMATS[formatStr], ...args);
    }
    return oldFormat.call(this, formatStr, ...args);
  };
};

export default customFormatsPlugin;
