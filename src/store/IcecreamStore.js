class IceCreamStore {
  iceCreams = [{ flavor: "vanila", color: "white" }];

  addIceCream(flavor, color) {
    this.iceCreams.push({ flavor, color });
  }
}

const store = new IceCreamStore();
export default store;
