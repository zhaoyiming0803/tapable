const {
  AsyncParalleHook
} = require('../src/index');

const s1 = new AsyncParalleHook();

s1.tapAsync('node', (args, cb) => {
  setTimeout(() => {
    console.log('node', args);
    cb();
  }, 1000);
});

s1.tapAsync('webpack', (args, cb) => {
  setTimeout(() => {
    console.log('webpack', args);
    cb();
  }, 2000);
});


s1.callAsync(['zhaoyiming', 'zymfe'], () => {
  console.log('call async end');
});

const s2 = new AsyncParalleHook();

s2.tapPromise('node', args => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('node', args);
      resolve();
    }, 3000);
  });
});

s2.tapPromise('webpack', args => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('webpack', args);
      resolve();
    }, 4000);
  });
});

s2.callPromise('zhaoyiming').then(() => {
  console.log('call promise end');
})