class SyncBailHook {
  constructor () {
    this.tasks = [];
  }

  tap (eventName, task) {
    this.tasks.push(task);
  }

  call (...args) {
    const tasks = this.tasks;
    
    for (let i = 0; i < tasks.length; i += 1) {
      if (tasks[i](...args) !== undefined) break;
    }
  }

  $call (...args) {
    let res;
    let index = 0;
    const tasks = this.tasks;

    do {
      res = tasks[index++](...args);
    } while (res === undefined && index < tasks.length);
  }
}

module.exports = SyncBailHook;