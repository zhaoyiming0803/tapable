const {
  AsyncParalleBailHook
} = require('../src/index');

const s1 = new AsyncParalleBailHook();

s1.tapAsync('node', (args, success, error) => {
  setTimeout(() => {
    if (2 > 1) {
      console.log('node');
      success('node');
    } else {
      error('node');
    }
  }, 1000);
});

s1.tapAsync('webpack', (args, success, error) => {
  setTimeout(() => {
    console.log('webpack');
    if (2 > 3) {
      success('webpack');
    } else {
      error('webpack');
    }
  }, 2000);
});

s1.tapAsync('vue', (args, success, error) => {
  setTimeout(() => {
    if (2 > 1) {
      console.log('vue');
      success('vue');
    } else {
      error('vue');
    }
  }, 3000);
});


s1.callAsync(['zhaoyiming', 'zymfe'], res => {
  console.log('call async success: ', res);
}, res => {
  console.log('call async error: ', res);
});

const s2 = new AsyncParalleBailHook();

s2.tapPromise('node', args => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('node');
      resolve('node');
    }, 4000);
  });
});

s2.tapPromise('webpack', args => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('webpack');
      reject('webpack');
    }, 5000);
  });
});

s2.tapPromise('vue', args => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('vue');
      resolve('vue');
    }, 6000);
  });
});

s2.callPromise('zhaoyiming').then(res => {
  console.log('call promise success: ', res);
}, res => {
  console.log('call promise error: ', res);
});