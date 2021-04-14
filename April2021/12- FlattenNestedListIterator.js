class NestedIterator {
  constructor(nestedList) {
    this.arr = [];
    this.flat(nestedList);
  }

  hasNext() {
    return !!this.arr.length;
  }
  next() {
    return this.arr.shift();
  }
  flat(list) {
    for (let ele of list)
      if (ele.isInteger()) this.arr.push(ele.getInteger());
      else this.flat(ele.getList());
  }
}
