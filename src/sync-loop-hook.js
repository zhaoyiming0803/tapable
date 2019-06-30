class SyncLoopHook {
  constructor () {
    this.tasks = [];
  }

  tap (eventName, task) {
    this.tasks.push(task);
  }

  call (...args) {
    const tasks = this.tasks;
    this.tasks.forEach(task => {
      let res = task(...args);
      while (res !== undefined) {
        res = task(...args);
      }
    });
  }

  $call (...args) {
    const next = (task, ...args) => {
      if (task(...args) !== undefined) {
        next(task, ...args);
      }
    }
    
    const tasks = this.tasks;
    for (let i = 0; i < tasks.length; i += 1) {
      next(tasks[i], ...args);
    }
  }
}

module.exports = SyncLoopHook;