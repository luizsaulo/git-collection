import React from 'react'
import { FiChevronRight } from 'react-icons/fi';

import { api } from '../../services/api';
import { Title, Form, Repos, Error } from './styles';
import logo from '../../assets/logo.svg';

interface GithubRepository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  }
}

export const Dashboard: React.FC = () => {
  const [repos, setRepos] = React.useState<GithubRepository[]>([]);
  const [newRepo, setNewRepo] = React.useState('');
  const [inputError, setInputError] = React.useState('');

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>): void {
    setNewRepo(event.target.value);
  }

  async function handleAddRepo(
    event: React.FormEvent<HTMLFormElement>,
    ): Promise<void> {
      event.preventDefault();

      if (!newRepo) {
        setInputError('Informe o username/repositório');
        return;
      }

      //agora escrevemos o que o método irá fazer, que é adicionar o repositório consumindo a api
      const response = await api.get<GithubRepository>(`repos/${newRepo}`);

      const repository = response.data;

      setRepos([...repos, repository]);
      setNewRepo('');
    }

  return (
    <>
    <img src={logo} alt="GitCollection" />
    <Title>Catálogo de repoistórios do GitHub</Title>  

    <Form hasError={Boolean(inputError)} onSubmit={handleAddRepo}>
      <input 
        placeholder='username/repository_name' 
        onChange={handleInputChange} 
      />
      <button type='submit'>Buscar</button>
    </Form>  

    {inputError && <Error>{inputError}</Error>}

    <Repos>
      {repos.map(repository => (
        <a href='/repositories' key={repository.full_name}>
        <img 
          src={repository.owner.avatar_url} 
          alt={repository.owner.login} 
        />
        <div>
          <strong>{repository.full_name}</strong>
          <p>{repository.description}</p>
        </div>
        <FiChevronRight size={20} />
      </a>
      ))}
    </Repos>
    </>
  )
};

