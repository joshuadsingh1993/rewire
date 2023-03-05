import styled from 'styled-components'
import RadialScore from './RadialScore'

const Container = styled.div<{ light?: boolean}>`
    display: flex;
    align-items: center;
    border: 1px solid ${props => props.theme.colors.textGrey};
    background: ${props => props.light ? props.theme.colors.grey : props.theme.colors.darkGrey};
`

const Name = styled.span`
    display: block;
    padding: 15px;
    flex: 1;
    font-size: 20px;
    font-weight: 500;
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
    light?: boolean
}

export default function TableRow({ name, score, light }: TableRowProps) {
	return (
		<Container light={light}>
			<Name>{name}</Name>
			<RadialContainer>
				<RadialScore score={score} />
			</RadialContainer>
		</Container>
	)
}