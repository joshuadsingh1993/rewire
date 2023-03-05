import TableRow from './components/TableRow'
import styled from 'styled-components'
import TableHeader from './components/TableHeader'

const Container = styled.div`
	max-width: 460px;
	margin: 50px auto;
	border-radius: 40px;
	overflow: hidden;
`

type Day = {
	ac: boolean,
	cs: number,
	es: number,
	ps: number,
	sc: number
}

type Athlete = {
	[name: string]: Record<string, Day>
}

type AppProps = {
	data: Athlete
}

export default function App({ data }: AppProps) {
	return (
		<Container>
			<TableHeader header1="Athlete" header2="Score" />
			{
				Object.entries(data).map((athlete, index) => {

					return (
						<TableRow light={!(index % 2)} key={index} name={athlete[0]} score={athlete[1]['1677658893169'].sc} />
					)
				})
			}
		</Container>
	)
}