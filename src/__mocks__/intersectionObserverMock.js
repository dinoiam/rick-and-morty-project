global.IntersectionObserver = class IntersectionObserver {
  constructor(func) {
    this.func = func;
  }
  observe(element) {
    this.func([{ isIntersecting: true, target: element }]);
  }

  disconnect() {
    return null;
  }

  unobserve() {
    return null;
  }
};
