import React, { ReactElement } from 'react';
import Card from './Card';

type IGradeProps = {
    videos: [{
        id: string,
        titulo: string,
        descricao: string,
        url: string,
        thumb_url?: string
    }],
    qtdElementos: number
  };
  
const Grade = (props: IGradeProps): ReactElement => {
    const { videos, qtdElementos } = props;
    return(
        <div className={`grid grid-cols-${qtdElementos} gap-4 py-4`}>
            {videos.map(video => <Card key={video.id} video={video} />)}
        </div>
    )
};

export default Grade;