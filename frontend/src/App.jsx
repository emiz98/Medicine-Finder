import { CheckIcon } from "@heroicons/react/24/outline";
import Header from "./components/Header";
import Footer from "./components/user/Footer";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import PharmacyLogin from "./components/PharmaLogin";
import Login from "./components/Login";

const App = () => {
  const [loginModal, setLoginModal] = useState(false);
  const [signUpModal, setSignUpModal] = useState(false);

  return (
    <div className="">
      <Header setLoginModal={setSignUpModal} />
      <main className="px-10 md:px-40 flex flex-col items-center justify-center">
        <div className="flex items-center justify-center gap-x-10 h-[70vh] mt-2 w-full">
          <img
            className="hidden lg:inline-flex h-full lg:h-4/5 object-contain"
            src="/assets/main.png"
            alt="main"
          />
          <div>
            <img
              className="w-40 object-contain"
              src="/assets/logo.png"
              alt="logo"
            />
            <h1 className="font-apple mt-2 mb-5 text-6xl lg:text-7xl font-bold text-primary">
              Find Medicine Online
            </h1>
            <div className="flex items-center gap-x-2">
              <CheckIcon
                className="w-7 object-contain bg-primary 
              text-white rounded-full p-1"
              />
              <span className="font-medium text-gray-700">
                Find for drugs availability.
              </span>
            </div>
            <div className="flex items-center gap-x-2 mt-2">
              <CheckIcon
                className="w-7 object-contain bg-primary 
              text-white rounded-full p-1"
              />
              <span className="font-medium text-gray-700">
                Notify drugs availability.
              </span>
            </div>
          </div>
        </div>
      </main>
      <Footer setLoginModal={setLoginModal} />

      <AnimatePresence>
        {loginModal && <PharmacyLogin setLoginModal={setLoginModal} />}
        {signUpModal && <Login setLoginModal={setSignUpModal} />}
      </AnimatePresence>
    </div>
  );
};

export default App;
