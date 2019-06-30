const {
  AsyncSeriesWaterfallHook
} = require('../src/index');

const s1 = new AsyncSeriesWaterfallHook();

s1.tapAsync('node', (args, cb) => {
  setTimeout(() => {
    cb(null, 'node ^_^');
  }, 1000);
});

s1.tapAsync('webpack', (data, cb) => {
  setTimeout(() => {
    console.log(data);
    cb(null, 'webpack ^_^');
  }, 2000);
});

s1.tapAsync('vue', (data, cb) => {
  setTimeout(() => {
    console.log(data);
    cb(null, 'vue');
  }, 3000);
});


// s1.callAsync(['zhaoyiming', 'zymfe'], () => {
//   console.log('call async end');
// });

const s2 = new AsyncSeriesWaterfallHook();

s2.tapPromise('node', args => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('node');
      resolve('node');
    }, 4000);
  });
});

s2.tapPromise('webpack', data => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(data + '^_^');
      resolve('webpack');
    }, 5000);
  });
});

s2.tapPromise('vue', data => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(data + '^_^');
      resolve('vue');
    }, 6000);
  });
});

s2.callPromise('zhaoyiming').then(() => {
  console.log('call promise success');
}, () => {
  console.log('call promise error');
});