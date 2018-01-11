// export function increment(a) {
//   return a + 1;
// }

export default class Caluculator {
  constructor(initialvalue) {
      this.value = initialvalue

      this.increment = this.increment.bind(this)
  }

  increment() {
      return this.value + 1
  }
}
