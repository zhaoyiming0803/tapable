const SyncHook = require('./sync-hook');
const SyncBailHook = require('./sync-bail-hook');
const SyncWaterfullHook = require('./sync-waterfull-hook');
const SyncLoopHook = require('./sync-loop-hook');
const AsyncParalleHook = require('./async-paralle-hook');
const AsyncParalleBailHook = require('./async-paralle-bail-hook');

module.exports = {
  SyncHook,
  SyncBailHook,
  SyncWaterfullHook,
  SyncLoopHook,
  AsyncParalleHook,
  AsyncParalleBailHook
};