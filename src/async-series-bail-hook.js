class AsyncSeriesBailHook {
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
    const finallyCallback = args.pop();
    const tasks = this.tasks;
    const len = tasks.length;
    let index = 0;

    const next = () => {
      tasks[index++](...args, () => {
        if (index < len) {
          next();
        } else {
          finallyCallback();
        }
      }, () => {
        finallyCallback();
      });
    }
    next();
  }

  callPromise (...args) {
    const tasks = this.tasks;
    const len = tasks.length;
    let index = 0;

    const next = () => {
      if (index < len) {
        return tasks[index++](...args).then(res => next());
      }
    }
    return next();
  }
}

module.exports = AsyncSeriesBailHook;