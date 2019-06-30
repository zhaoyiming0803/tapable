class AsyncSeriesHook {
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
    const tasks = this.tasks;
    const len = tasks.length;
    const finallyCallback = args.pop();
    let index = 0;

    const next = () => {
      if (index === len) return finallyCallback();
      tasks[index++](...args, next);
    }
    next();
  }

  callPromise (...args) {
    const tasks = this.tasks;
    const len = tasks.length;
    let index = 0;

    const next = () => {
      if (index < len) {
        return tasks[index++](...args).then(() => next());
      }
    }
    return next();
  }
}

module.exports = AsyncSeriesHook;