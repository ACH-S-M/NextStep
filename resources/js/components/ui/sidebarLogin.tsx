import React from "react";
import { Link,usePage } from "@inertiajs/react";
import { type SharedData } from '@/types';
export default function SideLoginBar(){
    const { auth } = usePage<SharedData>().props;
    return <>
                <aside className="flex bg-black h-[300px] p-2 fixed ml-7 lg:w-[370px]">
                    <nav className="flex flex-col items-center w-full border-1 border-white justify-center gap-4">
                        {auth.user ? (
                            <Link
                                href={route('dashboard')}  // ini ternary operator kalo misalkan udah ada authentikasi nya bakal ke dashboard
                                className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <>
                                <div className="p-3.5">
                                    <p className="text-center font-bold ">Selamat datang kembali!</p>
                                    <p className="text-center">Login untuk mendapatkan profil kamu dan tersambung dengan orang lain </p>
                                </div>
                                <Link
                                    href={route('login')}
                                    className="bg-black border-2 border-white w-1/2 p-2.5 text-center rounded-md "
                                >
                                    Login
                                </Link>
                                <Link
                                    href={route('register')}
                                    className="w-1/2 p-2.5 align-middle  text-center inline-block rounded-sm bg-white text-black font-bold"
                                >
                                    Daftar
                                </Link>
                            </>
                        )}
                    </nav>
                </aside>
    </>
}
