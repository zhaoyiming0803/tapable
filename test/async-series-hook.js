const {
  AsyncSeriesHook
} = require('../src/index');

const s1 = new AsyncSeriesHook();

s1.tapAsync('node', (args, cb) => {
  setTimeout(() => {
    console.log('node');
    cb();
  }, 1000);
});

s1.tapAsync('webpack', (args, cb) => {
  setTimeout(() => {
    console.log('webpack');
    cb();
  }, 2000);
});

s1.tapAsync('vue', (args, cb) => {
  setTimeout(() => {
    console.log('vue');
    cb();
  }, 3000);
});


s1.callAsync(['zhaoyiming', 'zymfe'], () => {
  console.log('call async end');
});

const s2 = new AsyncSeriesHook();

s2.tapPromise('node', args => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('node');
      resolve();
    }, 4000);
  });
});

s2.tapPromise('webpack', args => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('webpack');
      resolve();
    }, 5000);
  });
});

s2.tapPromise('vue', args => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('vue');
      resolve();
    }, 6000);
  });
});

s2.callPromise('zhaoyiming').then(res => {
  console.log('call promise end');
});