import { useState, useEffect } from 'react';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';
import Grade from '../components/episodios/Grade';
import { data } from '../data';

const Index = () => {
  const [qtdEpisodios, setQtdEpisodios] = useState(4);
  const [modalState, setModalState] = useState(false);
  const [dados, setDados] = useState(data);
  const ultimo_id: number = Math.max.apply(null, dados.map(registro => parseInt(registro.id)));
  const [id, setId] = useState(ultimo_id);
  
  useEffect(() => {
    setId(id + 1);
  }, [dados]);

  useEffect(() => {
    const modal: any = document.querySelector('#main-modal') || '';
    if (modalState) {
      modal.classList.remove('fadeOut');
      modal.classList.add('fadeIn');
      modal.style.display = 'flex';
    } else {
      modal.classList.remove('fadeIn');
      modal.classList.add('fadeOut');
      setTimeout(() => {
        modal.style.display = 'none';
      }, 500);
    }
  }, [modalState]);

  const validate_form = (): void => {
    let id_field: any = id.toString();
    const titulo: any = document.querySelector('#titulo') || '';
    const url: any = document.querySelector('#url') || '';
    let id_texto:string = id_field;

    if (id_field !== null && titulo.value !== null && titulo.value !== '' && url.value !== null && url.value !== '') {
      let novoDados: any = [...dados, {"id": id_texto, "titulo": titulo.value, "url": url.value, "thumb_url": `http://i3.ytimg.com/vi/${url.value.split('?v=')[1].split('&')[0]}/maxresdefault.jpg`}];
      setDados(novoDados);
      titulo.value = '';
      url.value = '';

    } else {
      alert("É necessário preencher todos os campos com *");
    }
  }

  return (
    <Main
      meta={
        <Meta/>
      }
    >
      
    <span>Estão sendo mostrados 
      {' '}
      <input 
        className="border-blue-500 w-24 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline shadow showdow-md bg-white rounded-lg h-18"
        type="number" 
        min="1"
        max="4"
        value={qtdEpisodios} 
        onChange={(e: any)=>(!isNaN(e.target.value)?setQtdEpisodios(e.target.value):alert('O valor do campo deve ser númerico'))}/>
      {' '} itens por linha
    </span>
    <div>
    <button  onClick={() => setModalState(true)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Novo Podcast
    </button>  
    </div>
    <Grade videos={dados} qtdElementos={qtdEpisodios} />

    <div className="main-modal fixed w-full inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster bg-opacity-70" style={{display: 'none'}} id="main-modal">
      <div className="border border-blue-500 modal-container bg-white w-4/12 md:max-w-11/12 mx-auto rounded-xl shadow-lg z-50 overflow-y-auto">
        <div className="modal-content py-4 text-left px-6">
          <div className="flex justify-between items-center pb-3">
            <p className="text-2xl font-bold text-gray-500">Add Episódio</p>
            <div className="modal-close cursor-pointer z-50" onClick={() => setModalState(false)}>
              <svg className="fill-current text-gray-500" xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                viewBox="0 0 18 18">
                <path
                  d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z">
                </path>
              </svg>
            </div>
          </div>
          
          <div className="my-5 mr-5 ml-5 flex justify-center">
            <form action="{{url_for('default.add_caretaker', apartment_id = apartment.id)}}" method="POST" id="add_episodio" className="w-full">
                <div className="">

                <div className="">
                        <label htmlFor="id" className="text-md text-gray-600">ID</label>
                    </div>
                    <div className="">
                        <input type="number" id="id" autoComplete="off" name="id" className="h-3 p-6 w-full border-2 border-gray-300 mb-5 rounded-md" placeholder="ID" disabled value={id}  />
                    </div>
                    <div className="">
                        <label htmlFor="titulo" className="text-md text-gray-600">Nome *</label>
                    </div>
                    <div className="">
                        <input type="text" id="titulo" autoComplete="off" name="titulo" className="h-3 p-6 w-full border-2 border-gray-300 mb-5 rounded-md" placeholder="Título vídeo" required />
                    </div>
                    <div className="">
                        <label htmlFor="url" className="text-md text-gray-600">URL *</label>
                    </div>
                    <div className="">
                        <input type="text" id="url" autoComplete="off" name="url" className="h-3 p-6 w-full border-2 border-gray-300 mb-5 rounded-md" placeholder="https://youtube.com/" required />
                    </div>
                </div>
            </form>
          </div>
          
          <div className="flex justify-end pt-2 space-x-14">
            <button
              className="px-4 bg-gray-200 p-3 rounded text-black hover:bg-gray-300 font-semibold" onClick={() => setModalState(false)}>Cancelar</button>
            <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button" onClick={() => validate_form()}>Confirmar</button>
          </div>
        </div>
      </div>
    </div>
    </Main>
  );
};

export default Index;
