import styled, { css } from 'styled-components'

const Container = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid ${props => props.theme.colors.textGrey};
`

const Header = css`
    display: block;
    padding: 15px;
    font-size: 20px;
    text-transform: uppercase;
    color: ${props => props.theme.colors.textGrey};
`

const Header1 = styled.span`
    ${Header}
    flex: 1;
    color: ${props => props.theme.colors.textGrey};
`

const Header2 = styled.span`
    ${Header}
    border-left: 1px solid ${props => props.theme.colors.textGrey};
    width: 180px;
`

type TableHeaderProps = {
    header1: string,
    header2: string,
}

export default function TableHeader({ header1, header2 }: TableHeaderProps) {
	return (
		<Container>
			<Header1>{header1}</Header1>
			<Header2>{header2}</Header2>
		</Container>
	)
}