import { PluginFunc } from 'dayjs';

// https://github.com/iamkun/dayjs/issues/1605
// https://github.com/aric-notes/dayjs-notes/blob/main/src/plugins/my-plugin.js

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
    const isCustomFormat = Boolean(formatStr && formatStr in CUSTOM_FORMATS);
    if (isCustomFormat) {
      return oldFormat.call(this, CUSTOM_FORMATS[formatStr!], ...args);
    }
    return oldFormat.call(this, formatStr, ...args);
  };
};

export default customFormatsPlugin;
