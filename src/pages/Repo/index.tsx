import React from 'react'
import {
	FiChevronLeft as BackIcon,
	FiChevronRight as ForwardIcon,
} from 'react-icons/fi'
import { api } from '../../services/api'
import { Link, useRouteMatch } from 'react-router-dom'
import { Header, RepoInfo, Issues } from './styles'
import logo from '../../assets/logo.svg'

interface IRepositoryParams {
	repository: string
}
interface IGitHubRepository {
	full_name: string
	description: string
	forks_count: number
	open_issues_count: number
	stargazers_count: number
	owner: {
		login: string
		avatar_url: string
	}
}

interface IGitHubIssue {
	id: number
	title: string
	html_url: string
	user: {
		login: string
	}
}

const Repo: React.FC = () => {
	const { params } = useRouteMatch<IRepositoryParams>()
	const [repository, setRepository] = React.useState<IGitHubRepository | null>(
		null,
	)
	const [issues, setIssues] = React.useState<IGitHubIssue[]>([])

	React.useEffect(() => {
		api
			.get(`repos/${params.repository}`)
			.then(({ data }) => setRepository(data))

		api
			.get(`repos/${params.repository}/issues`)
			.then(({ data }) => setIssues(data))
	}, [params.repository])

	return (
		<>
			<Header>
				<img src={logo} alt="GitCollection" />
				<Link to="/">
					<BackIcon />
					Voltar
				</Link>
			</Header>

			{repository && (
				<RepoInfo>
					<header>
						<img
							src={repository.owner.avatar_url}
							alt={repository.owner.login}
						/>
						<div>
							<strong>{repository.full_name}</strong>
							<p>{repository.description}</p>
						</div>
					</header>
					<ul>
						<li>
							<strong>{repository.stargazers_count}</strong>
							<span>Stars</span>
						</li>
						<li>
							<strong>{repository.forks_count}</strong>
							<span>Forks</span>
						</li>
						<li>
							<strong>{repository.open_issues_count}</strong>
							<span>Issues Abertas</span>
						</li>
					</ul>
				</RepoInfo>
			)}

			<Issues>
				{issues.map(issue => (
					<a key={issue.id} href={issue.html_url}>
						<div>
							<strong>{issue.title}</strong>
							<p>{issue.user.login}</p>
						</div>

						<ForwardIcon size={20}></ForwardIcon>
					</a>
				))}
			</Issues>
		</>
	)
}

export default Repo
