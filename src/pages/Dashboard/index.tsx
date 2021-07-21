/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import { Title, Form, Repos, Error } from './styles'
import logo from '../../assets/logo.svg'
import { api } from '../../services/api'

import { FiChevronRight as ArrowRight } from 'react-icons/fi'
interface IGitHubRepository {
	full_name: string
	description: string
	owner: {
		login: string
		avatar_url: string
	}
}

const Dashboard: React.FC = () => {
	const formEl = React.useRef<HTMLFormElement | null>(null)
	const [repos, setRepos] = React.useState<IGitHubRepository[]>(() => {
		const storageRepos = localStorage.getItem('@GitCollection:repositories')

		if (storageRepos) {
			return JSON.parse(storageRepos)
		}

		return []
	})

	const [newRepo, setNewRepo] = React.useState('')
	const [inputError, setInputError] = React.useState('')

	const handleInputChange = (
		event: React.ChangeEvent<HTMLInputElement>,
	): void => {
		setNewRepo(event.target.value)
	}

	const handleAddRepo = async (
		event: React.ChangeEvent<HTMLFormElement>,
	): Promise<void> => {
		event?.preventDefault()
		if (!newRepo) {
			setInputError('informe o username/repositorio')

			return
		}

		try {
			const repoAlreadyExists = repos.find(repo => repo.full_name === newRepo)
			if (!repoAlreadyExists) {
				const { data } = await api.get<IGitHubRepository>(`/repos/${newRepo}`)
				setRepos([...repos, data])
			}
			setNewRepo('')
			formEl.current?.reset()
			formEl.current?.focus()
		} catch (error) {
			setInputError('repositório não encontrado no github')
		}
	}

	React.useEffect(() => {
		localStorage.setItem('@GitCollection:repositories', JSON.stringify(repos))
	}, [repos])

	React.useEffect(() => {
		if (!newRepo && inputError) {
			setInputError('')
		}
	}, [inputError, newRepo])

	return (
		<>
			<img src={logo} alt="GitCollection" />
			<Title>Catálogo de Repositorios do GitHub</Title>
			<Form
				ref={formEl}
				hasError={Boolean(inputError)}
				onSubmit={handleAddRepo}
			>
				<input
					placeholder="username/repository_name"
					onChange={handleInputChange}
				/>
				<button>Buscar</button>
			</Form>
			{inputError && <Error>{inputError}</Error>}
			<Repos>
				{repos.map(repository => (
					<Link
						to={`/repositories/${repository.full_name}`}
						key={repository.full_name}
					>
						<img
							src={repository.owner.avatar_url}
							alt={repository.owner.login}
						/>
						<div>
							<strong>{repository.full_name}</strong>
							<p>{repository.description}</p>
						</div>
						<ArrowRight color="#cbcbd6" size={20} />
					</Link>
				))}
			</Repos>
		</>
	)
}

export default Dashboard
