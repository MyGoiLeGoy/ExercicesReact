import { Store } from "@tanstack/react-store";

interface CatState {
  count: number;
}

export const catStore = new Store<CatState>({
  count: 0,
});

export const catStoreActions = {
  addCat: () => {
    catStore.setState((state) => ({
      count: state.count + 1
    }));
  },
};