import { create } from 'zustand';

type ModalType =
  | 'CREATE_TEAM'
  | 'TEAM_SETTING'
  | 'INVITE_TEAM'
  | 'EDIT_TEAM'
  | 'DELETE_TEAM'
  | 'DROPDOWN_TEAM_SELECT'
  | 'USER_SELECT'
  | 'PROJECT_SETTING'
  | null;

interface ModalState {
  modalType: ModalType;
  modalProps: any;
  openModal: (type: ModalType, props?: any) => void;
  closeModal: () => void;
}

const useModalStore = create<ModalState>((set) => ({
  modalType: null,
  modalProps: null,
  openModal: (type, props = null) =>
    set({ modalType: type, modalProps: props }),
  closeModal: () => set({ modalType: null, modalProps: null }),
}));

export default useModalStore;
