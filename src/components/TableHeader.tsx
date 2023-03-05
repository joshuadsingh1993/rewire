import styled, { css } from 'styled-components'

const Container = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid ${props => props.theme.colors.textGrey};
`

const Header = css`
    display: block;
    padding: 10px;
    font-size: 16px;
    text-align: center;
    text-transform: uppercase;
    color: ${props => props.theme.colors.textGrey};
    background: ${props => props.theme.colors.darkGrey};
`

const Header1 = styled.span`
    ${Header}
    min-width: 130px;
    flex: 1;
    color: ${props => props.theme.colors.textGrey};
    box-sizing: border-box;
`

const Header2 = styled.span`
    ${Header}
    border-left: 1px solid ${props => props.theme.colors.textGrey};
    width: 220px;
    box-sizing: border-box;
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