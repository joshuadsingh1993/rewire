import { LEVELS } from '../utils/constants'
import { getLevelFromScore } from '../utils/helpers'

import { useEffect, useRef } from 'react'
import styled from 'styled-components'

// ringWidth is the thickness of the ring. size is the diameter of the ring.
const ringWidth = 10
const size = 80

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
const RadialContainer = styled.div`
    position: relative;
    padding: ${ringWidth}px;
    position: relative;
    width: fit-content;

    :after {
      content: '';
      position: absolute;
      inset: 0;
      background: ${props => props.theme.colors.white};
      opacity: 0.05;
      border-radius: 50%;
    }
`
const Radial = styled.div`
    height: ${size}px;
    width: ${size}px;
    position: relative;
`

const BackgroundCircle = styled.div`
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: 1;
    border-radius: 50%;
    border: ${ringWidth}px solid ${props => props.theme.colors.backRing};
    box-sizing: border-box;
`

const Score = styled.span`
    font-size: 26px;
    display: block;
    position: absolute;
    z-index: 2;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: ${props => props.theme.colors.white};
`

const Svg = styled.svg<{ score: number }>`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 2;

  circle {
    fill: none;
    stroke: ${props => props.theme.colors[LEVELS[getLevelFromScore(props.score)]]};
    stroke-width: ${ringWidth}px;
    /* 2.75 is the ratio between the size of the ring and it's circumference */
    stroke-dasharray: ${size * 2.75};
    stroke-dashoffset: ${size * 2.75};
    transform-origin: 50% 50%;
    transform: rotate(-90deg);
    will-change: stroke-dashoffset;
  }
`
const Day = styled.span`
    font-size: 12px;
    letter-spacing: 1px;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 10px;
    display: inline-block;
    color: ${props => props.theme.colors.white};
`

const Level = styled.span`
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 500;
    text-align: center;
    margin-top: 10px;
    display: inline-block;
    color: ${props => props.theme.colors.textGrey};
`

type RadialScoreProps = {
  day: string,
  score: number;
}

export default function RadialScore({ day, score }: RadialScoreProps) {
	const circleRef = useRef<SVGCircleElement>(null)

	/**
   * Calculates the length of the circumference for the ring
   * @param {number} percentage The score of the athlete
   * @returns {number} The offset / circumference of the ring
   */
	const circleOffset = (percentage: number) => `${((100 - percentage) / 100) * size * 2.75}`

	useEffect(() => {
		if (circleRef.current) {
			const circleRange = [{ strokeDashoffset: circleOffset(score) }]

			const circleTiming = {
				duration: 500,
				fill: 'forwards',
				easing: 'ease-in-out'
			}

			// Animates the strokeDashoffset
			circleRef.current.animate(circleRange, circleTiming as KeyframeAnimationOptions)
		}
	}, [])

	return (
		<Container>
			<Day>{day}</Day>
			<RadialContainer>
				<Radial>
					<BackgroundCircle />
					<Svg score={score}>
						{/* cx - circle x coordinate | cy - circle y coordinate | r - radius */}
						<circle ref={circleRef} cx={size / 2} cy={size / 2} r={size / 2 - ringWidth / 2} />
					</Svg>
					<Score>{score}</Score>
				</Radial>
			</RadialContainer>
			<Level>{getLevelFromScore(score)}</Level>
		</Container>
	)
}