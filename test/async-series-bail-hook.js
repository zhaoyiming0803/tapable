const {
  AsyncSeriesBailHook
} = require('../src/index');

const s1 = new AsyncSeriesBailHook();

s1.tapAsync('node', (args, success, error) => {
  setTimeout(() => {
    console.log('node');
    success();
  }, 1000);
});

s1.tapAsync('webpack', (args, success, error) => {
  setTimeout(() => {
    console.log('webpack');
    error();
  }, 2000);
});

s1.tapAsync('vue', (args, success, error) => {
  setTimeout(() => {
    console.log('vue');
    success();
  }, 3000);
});


s1.callAsync(['zhaoyiming', 'zymfe'], () => {
  console.log('call async end');
});

const s2 = new AsyncSeriesBailHook();

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
      reject();
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
  console.log('call promise success');
}, () => {
  console.log('call promise error');
});