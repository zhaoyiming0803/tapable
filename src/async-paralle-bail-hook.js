class AsyncParalleBailHook {
  constructor () {
    this.tasks = [];
  }

  tapAsync (eventName, task) {
    this.tasks.push(task);
  }

  tapPromise (eventName, task) {
    this.tasks.push(task);
  }

  callAsync (args, success, error) {
    const tasks = this.tasks;
    const len = tasks.length;
    const res = [];
    let count = 0;

    tasks.forEach(task => {
      task(args, field => {
        res.push(field);
        if (++count === len && success) success(res);
      }, field => {
        if (error) error(field);
      });
    });
  }

  callPromise (...args) {
    const tasks = this.tasks.map(task => task(...args));
    return Promise.all(tasks);
  }
}

module.exports = AsyncParalleBailHook;