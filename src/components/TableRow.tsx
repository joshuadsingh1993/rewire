import styled from 'styled-components'
import RadialScore from './RadialScore'

const Container = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid ${props => props.theme.colors.textGrey};
`

const Name = styled.span`
    display: block;
    padding: 15px;
    flex: 1;
    font-size: 20px;
    text-transform: uppercase;
    color: ${props => props.theme.colors.white};
    min-width: 130px;
    box-sizing: border-box;
`

const RadialContainer = styled.div`
    padding: 15px;
    width: 220px;
    border-left: 1px solid ${props => props.theme.colors.textGrey};
    box-sizing: border-box;
`

type TableRowProps = {
    name: string,
    score: number,
}

export default function TableRow({ name, score }: TableRowProps) {
	return (
		<Container>
			<Name>{name}</Name>
			<RadialContainer>
				<RadialScore score={score} />
			</RadialContainer>
		</Container>
	)
}