import Image from "next/image";
import logoImg from '../assets/logo.svg';

export function Header() {
    return (
        <div className="bg-gray-900 pt-10 pb-[7.5rem]">
            <div className="w-full max-w-6xl mx-auto px-6 flex justify-between items-center">
                <Image src={logoImg} alt="" />
                <button className="h-14 bg-green-500 text-white font-bold px-5 rounded-md hover:bg-green-700 transition-all">
                    Nova transação
                </button>
            </div>
        </div>
    );
};