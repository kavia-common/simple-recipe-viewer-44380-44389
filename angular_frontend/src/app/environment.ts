export const ENV = {
  NG_APP_API_BASE: (typeof process !== 'undefined' && process.env && process.env['NG_APP_API_BASE']) || ''
};
