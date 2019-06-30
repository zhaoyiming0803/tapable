const {
  SyncLoopHook
} = require('../src/index');

const s = new SyncLoopHook();
let count = 0;

s.tap('node', args => {
  console.log('node', args);
  return ++count === 3 ? undefined : 'continue';
});

s.tap('webpack', args => {
  console.log('webpack', args);
});

s.tap('vue', args => {
  console.log('vue', args);
});

s.$call(['zhaoyiming', 'zymfe']);
