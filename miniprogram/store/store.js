// store.js
const store = {
  state: {
    selectedItem: null,
  },
  setSelectedItem(item) {
    this.state.selectedItem = item;
  },
  getSelectedItem() {
    return this.state.selectedItem;
  },
};

module.exports = store;
