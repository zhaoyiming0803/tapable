const {
  SyncWaterfullHook
} = require('../src/index');

const s = new SyncWaterfullHook();

s.tap('node', args => {
  console.log('node', args);
  return 'node ok';
});

s.tap('webpack', args => {
  console.log('webpack', args);
  return 'webpack ok';
});

s.tap('vue', args => {
  console.log('vue', args);
  return 'vue ok';
});

s.tap('react', args => {
  console.log('react', args);
  return 'react ok';
});

s.call(['zhaoyiming', 'zymfe']);
