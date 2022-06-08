import React, { useState } from "react";

export const useModalClose = () => {
  const [modal, setModal] = useState(false);
  const handleModalClose = () => {
    setModal(!modal);
  };

  return {
    modal,
    handleModalClose,
  };
};
