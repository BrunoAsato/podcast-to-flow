import { ReactNode } from 'react';

import Link from 'next/link';

import { AppConfig } from '../utils/AppConfig';
type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => {
  return (
  <div className="antialiased w-full text-gray-700 px-1">
    {props.meta}
    <div className="max-w-screen-lg mx-auto">
      <div className="border-b border-gray-300">
        <div className="pt-16 pb-8">
          <div className="font-bold text-3xl text-gray-900">
            {AppConfig.title}
          </div>
          <div className="text-xl">{AppConfig.description}</div>
        </div>
        <div>
          <ul className="flex flex-wrap text-xl">
            <li className="mr-6">
              <Link href="/">
                <a className="text-gray-700 border-none hover:text-gray-900">
                  Episodios
                </a>
              </Link>
            </li>
            <li className="mr-6">
              <Link href="/sobre/">
                <a className="text-gray-700 border-none hover:text-gray-900">
                  Sobre mim
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="py-5 text-xl content">
        {props.children}
      </div>

      <div className="border-t border-gray-300 text-center py-8 text-sm">
        © Copyright {new Date().getFullYear()} {AppConfig.title}. Desenvolvido por Bruno Asato
      </div>
    </div>
  </div>
  )};

export { Main };
