const {
  SyncHook
} = require('../src/index');

const s = new SyncHook();

s.tap('node', args => {
  console.log('node', args);
});

s.tap('webpack', args => {
  console.log('webpack', args);
});

s.call(['zhaoyiming', 'zhangsan']);