import { computed, observable, autorun, reaction } from "mobx";

class IceCreamStore {
  @observable
  iceCreams = ["vanile"];
  @observable
  filter = "";
  @computed
  get filteredIceCreams() {
    let matchesFilter = new RegExp(this.filter, "i");
    return this.iceCreams.filter(
      iceCream => !this.filter || matchesFilter.test(iceCream)
    );
  }
  disposer = autorun(() => console.log(this.iceCreamsCount));
  disposer = reaction(
    () => this.iceCreams.length,
    () => console.log("reaction is working")
  );

  @computed
  get iceCreamsCount() {
    return this.iceCreams.length;
  }
  addIceCream(flavor) {
    this.iceCreams.push(flavor);
  }
  deleteIceCream(index) {
    // this.iceCreams.splice(index, 1);
    console.log(index);
  }
}

const store = new IceCreamStore();
export default store;
