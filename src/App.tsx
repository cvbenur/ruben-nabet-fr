import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ReactNode } from "react";
import { I18nextProvider, useTranslation } from "react-i18next";

export default function App() {
  return (
    <>
      <Providers>
      </Providers>
    </>
  );
}

const Providers = ({ children }: { children: ReactNode }) => {
  const { i18n } = useTranslation();

  return (
    <>
      <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
    </>
  );
};
