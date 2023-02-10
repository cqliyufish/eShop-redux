import { createContext, useState, useEffect } from "react";
import { onAuthStateChangedListener } from "utils/firebase/auth";
import { createUserDocumentFromAuth } from "utils/firebase/database";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user); //get user ref
      }
      setCurrentUser(user);
    });
    return unsubscribe; //do clear
  }, []);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
