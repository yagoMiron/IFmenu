import React, { createContext, ReactNode, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

type UserType = {
  authTime: number;
  exp: number;
  name: string;
  email: string;
  photoURL: string;
  theme: string;
  setAuthTime: (newState: number) => void;
  setExp: (newState: number) => void;
  setName: (newState: string) => void;
  setEmail: (newState: string) => void;
  setPhotoURL: (newState: string) => void;
  setTheme: (newState: string) => void;
  isSessionValid: () => Promise<boolean>;
};

const initialValue: UserType = {
  authTime: 0,
  exp: 0,
  name: "",
  email: "",
  photoURL: "",
  theme: "dark",
  setAuthTime: () => {},
  setExp: () => {},
  setName: () => {},
  setEmail: () => {},
  setPhotoURL: () => {},
  setTheme: () => {},
  isSessionValid: async () => false,
};

export const UserContext = createContext(initialValue);

type UserContextProps = {
  children: ReactNode;
};

export const UserContextProvider = ({ children }: UserContextProps) => {
  const [authTime, setAuthTime] = useState<number>(0);
  const [exp, setExp] = useState<number>(0);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [photoURL, setPhotoURL] = useState<string>("");
  const [theme, setTheme] = useState<string>("dark")

  // Carrega dados do AsyncStorage ao iniciar
  useEffect(() => {
    const loadData = async () => {
      const keys = ["authTime", "exp", "name", "email", "photoURL", "theme"];
      const values = await AsyncStorage.multiGet(keys);
      values.forEach(([key, value]) => {
        if (value !== null) {
          switch (key) {
            case "authTime":
              setAuthTime(Number(value));
              break;
            case "exp":
              setExp(Number(value));
              break;
            case "name":
              setName(value);
              break;
            case "email":
              setEmail(value);
              break;
            case "photoURL":
              setPhotoURL(value);
              break;
          }
        }
      });
    };
    loadData();
  }, []);

  // Salva dados no AsyncStorage sempre que mudar
  useEffect(() => {
    AsyncStorage.setItem("authTime", authTime.toString());
    AsyncStorage.setItem("exp", exp.toString());
    AsyncStorage.setItem("name", name);
    AsyncStorage.setItem("email", email);
    AsyncStorage.setItem("photoURL", photoURL);
    AsyncStorage.setItem("theme", theme)
  }, [authTime, exp, name, email, photoURL, theme]);

  return (
    <UserContext.Provider
      value={{
        authTime,
        exp,
        name,
        email,
        photoURL,
        theme,
        setAuthTime,
        setExp,
        setName,
        setEmail,
        setPhotoURL,
        setTheme,
        isSessionValid: async () => {
          const timestamp = new Date().getTime();
          const expAtual = await AsyncStorage.getItem("exp");
          const diff = Number(expAtual) - timestamp;
          return diff > 0;
        },
      }}
    >
      {children}
    </UserContext.Provider>
  );
};