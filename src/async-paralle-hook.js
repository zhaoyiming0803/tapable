class AsyncParalleHook {
  constructor () {
    this.tasks = [];
  }

  tapAsync (eventName, task) {
    this.tasks.push(task);
  }

  tapPromise (eventName, task) {
    this.tasks.push(task);
  }

  callAsync (...args) {
    let count = 0;
    const tasks = this.tasks;  
    const len = tasks.length; 
    const finallCallback = args.pop();

    tasks.forEach(task => {
      task(...args, () => {
        if (++count === len) finallCallback();
      });
    });
  }

  callPromise (...args) {
    const tasks = this.tasks.map(task => task(...args));
    return Promise.all(tasks);
  }
}

module.exports = AsyncParalleHook;