class SmallestIntegerFinder {
  findSmallestInt(args) {
    console.log(args)
    return Math.min(...args)
  }
}


let sif = new SmallestIntegerFinder();
console.log(sif.findSmallestInt([78,56,232,12,8]))