import Image from 'next/image';
import { ArrowUpCircle, ArrowDownCircle } from 'lucide-react';
import imgLogoMoney from '../assets/money.svg';

export function Summary() {
    return (
        <div className="w-full max-w-6xl mx-auto px-6 grid grid-cols-3 gap-8 -mt-20">
            <div className='bg-gray-600 rounded-md p-8'>
                <header>
                    <div className='flex justify-between items-center text-gray-300'>
                        <span>Entradas</span>
                        <ArrowUpCircle className='stroke-green-300' />
                    </div>

                    <strong className='block mt-4 text-[2rem]'>R$ 17.400,00</strong>
                </header>
            </div>

            <div className='bg-gray-600 rounded-md p-8'>
                <header>
                    <div className='flex justify-between items-center text-gray-300'>
                        <span>Saídas</span>
                        <ArrowDownCircle className='stroke-red-300' />
                    </div>

                    <strong className='block mt-4 text-[2rem]'>R$ 1.259,00</strong>
                </header>
            </div>

            <div className='bg-green-700 rounded-md p-8'>
                <header>
                    <div className='flex justify-between items-center text-gray-300'>
                        <span>Total</span>
                        <Image src={imgLogoMoney} alt='' width={28} height={28} />
                    </div>

                    <strong className='block mt-4 text-[2rem]'>R$ 16.141,00</strong>
                </header>
            </div>
        </div>
    );
};