import RadialScore from './RadialScore'

import { Day } from '../App'
import { dayNames } from '../utils/constants'

import styled from 'styled-components'


const Container = styled.div`
    display: flex;
    scroll-snap-type: x mandatory;
    overflow-x: scroll;
    scroll-behavior: smooth;
    position: relative;

    ::-webkit-scrollbar {
        display: none;
    }
`

const Item = styled.div`
    width: 100%;
    flex-shrink: 0;
    scroll-snap-align: start;
    padding: 10px 0;
`

type CarouselProps = {
    days: [string, Day][]
}

export default function Carousel({ days }: CarouselProps) {
	return (
		<Container>
			{
				days.map((day, index) => {
					return (
						<Item key={index}>
							{/* Convert timestamp to day index */}
							<RadialScore day={dayNames[new Date(+day[0]).getDay()]} score={day[1].sc} />
						</Item>
					)
				})
			}
		</Container>
	)
}