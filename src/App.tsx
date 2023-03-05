import TableRow from './components/TableRow'
import styled from 'styled-components'
import TableHeader from './components/TableHeader'

const Title = styled.h1`
	max-width: 460px;
	margin: 50px auto 0px auto;
	color: ${props => props.theme.colors.grey};
`

const Paragraph = styled.p`
	max-width: 460px;
	margin: 10px auto 0px auto;
	color: ${props => props.theme.colors.grey};
`

const Container = styled.div`
	max-width: 460px;
	margin: 30px auto 50px auto;
	border-radius: 40px;
	overflow: hidden;
`

export type Day = {
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
		<>
			<Title>Level up your game! 🎉</Title>
			<Paragraph>👉 Scroll horizontally to check your athlete&apos;s performance on different days!</Paragraph>
			<Paragraph>👉 Refresh the page to see the ring animation 💪</Paragraph>
			<Container>
				<TableHeader header1="Athlete" header2="Score" />
				{
					Object.entries(data).map((athlete, index) => {
						return (
							<TableRow light={!(index % 2)} key={index} name={athlete[0]} days={Object.entries(athlete[1])} />
						)
					})
				}
			</Container>
		</>
	)
}