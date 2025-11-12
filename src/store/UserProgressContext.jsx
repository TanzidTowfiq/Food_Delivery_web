import { createContext, useState } from 'react';

const UserProgressContext = createContext({
  progress: '',
  showCart: () => {},
  hideCart: () => {},
  showCheckout: () => {},
  hideCheckout: () => {},
});

export function UserProgressContextProvider({ children }) {
  const [userprogress, setUserProgress] = useState('');

  function showCart() {
    setUserProgress('cart');
  }
  function hideCart() {
    setUserProgress('');
  }
  function showCheckout() {
    setUserProgress('checkout');
  }
  function hideCheckout() {
    setUserProgress('');
  }
  const userprogressCtx = {
    progress: userprogress,
    showCart: showCart,
    hideCart: hideCart,
    showCheckout: showCheckout,
    hideCheckout: hideCheckout,
  };

  return <UserProgressContext.Provider value={userprogressCtx}>{children}</UserProgressContext.Provider>;
}

export default UserProgressContext;
