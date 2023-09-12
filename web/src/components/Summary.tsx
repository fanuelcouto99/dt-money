import Image from 'next/image';
import { ArrowUpCircle, ArrowDownCircle } from 'lucide-react';
import imgLogoMoney from '../assets/money.svg';

export function Summary() {
    return (
        <div className="w-full max-w-6xl mx-auto px-6 grid grid-cols-3 gap-8 -mt-20">
            <div>
                <header>
                    <div className='flex justify-between items-center'>
                        <span>Entradas</span>
                        <ArrowUpCircle className='stroke-green-300' />
                    </div>

                    <strong>R$ 17.400,00</strong>
                </header>
            </div>

            <div>
                <header>
                    <div>
                        <span>Saídas</span>
                        <ArrowDownCircle className='stroke-red-300' />
                    </div>

                    <strong>R$ 1.259,00</strong>
                </header>
            </div>

            <div>
                <header>
                    <div>
                        <span>Total</span>
                        <Image src={imgLogoMoney} alt='' width={28} height={28} />
                    </div>

                    <strong>R$ 16.141,00</strong>
                </header>
            </div>
        </div>
    );
};