const SyncHook = require('./sync-hook');
const SyncBailHook = require('./sync-bail-hook');
const SyncWaterfallHook = require('./sync-waterfall-hook');
const SyncLoopHook = require('./sync-loop-hook');
const AsyncParalleHook = require('./async-paralle-hook');
const AsyncParalleBailHook = require('./async-paralle-bail-hook');
const AsyncSeriesHook = require('./async-series-hook');
const AsyncSeriesBailHook = require('./async-series-bail-hook');

module.exports = {
  SyncHook,
  SyncBailHook,
  SyncWaterfallHook,
  SyncLoopHook,
  AsyncParalleHook,
  AsyncParalleBailHook,
  AsyncSeriesHook,
  AsyncSeriesBailHook
};