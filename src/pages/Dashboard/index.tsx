import React from 'react'
import { FiChevronRight } from 'react-icons/fi';

import { Title, Form, Repos } from './styles';
import logo from '../../assets/logo.svg';

export const Dashboard: React.FC = () => {
  return (
    <>
    <img src={logo} alt="GitCollection" />
    <Title>Catálogo de repoistórios do GitHub</Title>  

    <Form>
      <input placeholder='username/repository_name' />
      <button type='submit'>Buscar</button>
    </Form>  

    <Repos>
      <a href='/repositories'>
        <img 
          src='https://avatars.githubusercontent.com/u/91629397?s=400&u=986bac27fe0728f29d922ab8f6d95a42f1dcbb2a&v=4' 
          alt='Repositório' 
        />
        <div>
          <strong>luizsaulo/git-collection</strong>
          <p>Repositório do projeto GitCollection</p>
        </div>
        <FiChevronRight size={20} />
      </a>
    </Repos>
    </>
  )
};

