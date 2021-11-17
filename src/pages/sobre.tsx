import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';
import { LinkedInIcon, CoffeeIcon} from '../components/shared/icons';

const Sobre = () => (
  <Main meta={<Meta />}>
    <p className="text-base md:text-lg">
      Vidrado em tecnologia e estudioso de novas metodologias, tenho 28 anos e busco novas oportunidades de parcerias e novos projetos que agreguem na vida dos usuários!
    </p>
    <ul className="p-2 grid grid-rows gap-4 py-4">
      <li>
        <LinkedInIcon />
        LinkedInd: <a href="http://linkedin.com/in/brunoasato">Bruno Asato</a>
      </li>
      <li>
        <CoffeeIcon />
        Qualquer dúvida, podemos sentar para tomar um café e conversar mais!!
      </li>
    </ul>
  </Main>
);

export default Sobre;
