import { useState } from 'react';

const useModal = (): { showModal: boolean, toggleModal: () => void } => {
  const [showModal, setShow] = useState<boolean>(false);
  const toggleModal = () => {
    setShow(!showModal);
  }
  return { showModal, toggleModal }
}

export default useModal;
