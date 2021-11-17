import React, {ReactElement} from "react";
import { MicIcon, PlayIcon } from '../shared/icons';

interface Props {
  video: {
      id: string,
      titulo: string,
      url: string,
      descricao: string,
      thumb_url?: string
  }
};

const Card = (props: Props): ReactElement => {
  const { video } = props;
  return ( { video } && 
    <a href={video.url} className="hover:border-none">
      <div className="group hover:bg-gradient-to-tl hover:from-purple-800 hover:to-purple-500 bg-gradient-to-tl from-gray-800 to-gray-500 p-5 shadow-lg bg-opacity-75 text-color w-full overflow-hidden flex flex-col md:flex-row lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg lg:rounded-lg">
          <div className="lg:w-1/2 w-full md:h-2/5">
              <div className="h-64 bg-contain bg-no-repeat bg-left-top lg:rounded-lg lg:w-full" style={{backgroundImage: 
              "url('" + video.thumb_url + "')" }} ></div>
          </div>
          <div className="py-12 px-6 max-w-xl lg:max-w-5xl lg:w-1/2">
            <MicIcon fontSize={8} />
            <h1 className="text-xl font-bold text-white">{video.titulo}</h1>
            <div className="mt-4 mb-10">
            </div>
            <h3 className="text-xs uppercase text-white">Descrição:</h3>
            <h2 className="tracking-wide text-gray-300">
              {video.descricao || <span> Sem descrição </span>}
            </h2>
              <div className="items-end w-full grid justify-items-end">
              <PlayIcon fontSize={50} />
              </div>
        </div>
      </div>
    </a>
  );
}

export default Card;


<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
</svg>