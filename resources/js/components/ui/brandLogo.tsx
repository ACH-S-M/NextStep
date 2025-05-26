import React from "react";
import { Home } from 'lucide-react';

export default function NavbarAtas(){
    return <>
        <header className="w-full border-b-2 border-white h-[200-px] bg-black p-5 mb-3 sticky top-0 flex  items-center justify-between">
                <h1 className="text-3xl font-bold">NextStep</h1>
                <div className="beranda flex gap-2">
                    <Home></Home>
                <h1>Beranda </h1></div>
        </header>

    </>
}
