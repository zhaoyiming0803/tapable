class AsyncSeriesWaterfallHook {
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
    const [first, ...others] = this.tasks;
    const len = others.length;
    let index = 0;

    const next = (error, data) => {
      if (index < len) {
        if (error === null) {
          others[index++](data, next);
        } else {
          finallyCallback();
        }
      } else {
        finallyCallback();
      }
    }

    first(...args, next);
  }

  callPromise (...args) {
    const tasks = this.tasks;
    const len = tasks.length;
    let index = 0;

    const next = (...args) => {
      if (index < len) {
        return tasks[index++](...args).then(res => next(res));
      }
    }

    return next(...args);
  }
}

module.exports = AsyncSeriesWaterfallHook;