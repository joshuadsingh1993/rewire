import TableRow from './components/TableRow'
import styled from 'styled-components'

const Container = styled.div`
    background: #323232;
	max-width: 460px;
	margin: 50px auto;
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
			{
				Object.entries(data).map((athlete, index) => (
					<TableRow name={athlete[0]} score={athlete[1]['1677658893169'].sc} />
				))
			}
		</Container>
	)
}