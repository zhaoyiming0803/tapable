const {
  SyncBailHook
} = require('../src/index');

const s = new SyncBailHook();

s.tap('node', args => {
  console.log('node', args);
  return 'stop';
});

s.tap('webpack', args => {
  console.log('webpack', args);
});

s.call(['zhaoyiming', 'zhangsan']);