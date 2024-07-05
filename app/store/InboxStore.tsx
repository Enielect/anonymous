import { create } from "zustand";

interface InboxState {
  inboxModalActive: boolean;
  deleteModalActive: boolean;
  setInboxModalActive: () => void;
  setDeleteModalActive: () => void;
}

const useInboxStore = create<InboxState>((set) => ({
  inboxModalActive: false,
  deleteModalActive: false,
  setInboxModalActive: () =>
    set((state: InboxState) => ({ inboxModalActive: !state.inboxModalActive })),
  setDeleteModalActive: () =>
    set((state: InboxState) => ({
      deleteModalActive: !state.deleteModalActive,
    })),
}));

export default useInboxStore;
