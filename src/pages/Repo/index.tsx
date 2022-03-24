import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';

import { Header, RepoInfo } from './styles';
import logo from '../../assets/logo.svg';

interface RepositoryParams {
  repository: string;
}

export const Repo: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

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
    </>
  )
};