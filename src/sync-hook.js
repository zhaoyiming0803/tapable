class SyncHook {
  constructor () {
    this.tasks = [];
  }

  tap (eventName, task) {
    this.tasks.push(task);
  }

  call (...args) {
    this.tasks.forEach(task => task(...args));
  }
}

module.exports = SyncHook;