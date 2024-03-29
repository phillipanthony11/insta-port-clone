import React from "react";

import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";

function Header() {
  const { data: session } = useSession();
  const [open, setOpen] = useRecoilState(modalState);
  const router = useRouter();

  return (
    <div className="shadow border-b bg-white sticky top-0 z-50">
      <div className="flex justify-between max-w-6xl mx-4 lg:mx-auto">
        <div
          onClick={() => router.push("/")}
          className="relative hidden lg:inline-grid w-24 cursor-pointer"
        >
          <picture>
            <img
              src="https://links.papareact.com/ocw"
              alt="logo"
              layout="fill"
              objectfit="contain"
            />
          </picture>
        </div>
        <div
          onClick={() => router.push("/")}
          className="relative lg:hidden w-10 flex-shrink-0 cursor-pointer"
        >
          <picture>
            <img
              src="https://links.papareact.com/jjm"
              alt="logo"
              layout="fill"
              objectfit="contain"
            />
          </picture>
        </div>
        <div className="max-w-xs">
          <div className="relative mt-2 p-4 rounded-md">
            <div className="absolute inset-y-0 pl-2 flex items-center pointer-events-none">
              <SearchIcon className="h-6 w-6 text-gray-500" />
            </div>
            <input
              className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>
        <div className="flex items-center justify-end space-x-4">
          <HomeIcon onClick={() => router.push("/")} className="Btns" />
          <MenuIcon className="h-6 md:hidden cursor-pointer" />

          {session ? (
            <>
              <div className="relative Btns">
                <PaperAirplaneIcon className="Btns rotate-45" />
                <div className="absolute -top-1 -right-2 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white">
                  3
                </div>
              </div>
              <PlusCircleIcon onClick={() => setOpen(true)} className="Btns" />
              <UserGroupIcon className="Btns" />
              <HeartIcon className="Btns" />
              <picture>
                <img
                  onClick={signOut}
                  src={session?.user?.image}
                  alt="profile pic"
                  className="h-10 w-10 rounded-full cursor-pointer"
                />
              </picture>
            </>
          ) : (
            <button onClick={signIn}>Sign In</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
