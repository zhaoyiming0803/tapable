class SyncWaterfallHook {
  constructor () {
    this.tasks = [];
  }

  tap (eventName, task) {
    this.tasks.push(task);
  }

  call (...args) {
    const [first, ...others] = this.tasks;
    others.reduce((a, b) => b(a), first(...args));
  }

  $call (...args) {
    const tasks = this.tasks;
    const [first, ...others] = this.tasks;
    let res = first(...args);

    for (let i = 0; i < others.length; i += 1) {
      res = others[i](res);
    }
  }
}

module.exports = SyncWaterfallHook;