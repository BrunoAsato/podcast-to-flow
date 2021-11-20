import React, { ReactElement } from 'react';
import Card from './Card';


type videoType = {
    id: string,
    titulo: string,
    descricao: string,
    url: string,
    thumb_url?: string
}[];

type IGradeProps = {
    videos: videoType,
    qtdElementos: number
  };
  
const Grade = (props: IGradeProps): ReactElement => {
    return(
        <div className={`grid grid-cols-${props.qtdElementos} gap-1 py-1`}>
            {props.videos.map(video => <Card key={video.id} video={video} />)}
        </div>
    )
};

export default Grade;