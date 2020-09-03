import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/16058480?s=460&u=1cb397f631583fb16bc9c31af81f8279ba767dbe&v=4"
            alt="Carlos"
          />

          <div>
            <strong>rocketseat/unform</strong>
            <p>
              Easy peasy highly scalable ReactJS & React Native forms! rocket
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/16058480?s=460&u=1cb397f631583fb16bc9c31af81f8279ba767dbe&v=4"
            alt="Carlos"
          />

          <div>
            <strong>rocketseat/unform</strong>
            <p>
              Easy peasy highly scalable ReactJS & React Native forms! rocket
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/16058480?s=460&u=1cb397f631583fb16bc9c31af81f8279ba767dbe&v=4"
            alt="Carlos"
          />

          <div>
            <strong>rocketseat/unform</strong>
            <p>
              Easy peasy highly scalable ReactJS & React Native forms! rocket
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
