import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import {api} from '../../services/api';
import { Header, RepoInfo, Issues } from './styles';
import logo from '../../assets/logo.svg';

interface RepositoryParams {
  repository: string;
}

export const Repo: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  React.useEffect(() => {
    api
    .get(`repos/${params.repository}`)
    .then(response => console.log(response.data))

    api
    .get(`repos/${params.repository}/issues`)
    .then(response => console.log(response.data))
  }, [params.repository]);

  return (
    <>
      <Header>
        <img src={logo} alt='GitCollection' />
        <Link to='/'>
          <FiChevronLeft />
          Voltar
        </Link>
      </Header>

      <RepoInfo>
        <header>
          <img src='' alt='Luiz Saulo' />
          <div>
            <strong>luizsaulo/filmaria</strong>
            <p>Primeiro projeto desenvolvido em Reactjs</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>2330</strong>
            <span>Stars</span>
          </li>
          <li>
          <strong>2</strong>
            <span>Forks</span>
          </li>
          <li>
          <strong>0</strong>
            <span>Issues Abertas</span>
          </li>
        </ul>
      </RepoInfo>

      <Issues>
        <Link to='/'>
          <div>
            <strong>Issue tal</strong>
            <p>descrição do issue</p>
          </div>

          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  )
};