import { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { LEVELS } from '../utils/constants'
import { getLevelFromScore } from '../utils/helpers'

const ringWidth = 10;
const size = 80;

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
    stroke-dasharray: ${size * 2.75};
    stroke-dashoffset: ${size * 2.75};
    transform-origin: 50% 50%;
    transform: rotate(-90deg);
    will-change: stroke-dashoffset;
  }
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
  score: number;
}

export default function RadialScore({ score }: RadialScoreProps) {
  const circleRef = useRef<SVGCircleElement>(null)

  const circleOffset = (percentage: number) => `${((100 - percentage) / 100) * size * 2.75}`

  useEffect(() => {
    if (circleRef.current) {
      const circleSpinning = [{ strokeDashoffset: circleOffset(score) }]

      const circleTiming = {
        duration: 500,
        fill: 'forwards',
        easing: 'ease-in-out'
      }

      circleRef.current.animate(circleSpinning, circleTiming as KeyframeAnimationOptions)
    }
  }, [])

  return (
    <Container>
      <RadialContainer>
        <Radial>
          <BackgroundCircle />
          <Svg score={score}>
            <circle ref={circleRef} cx={size / 2} cy={size / 2} r={size / 2 - ringWidth / 2} />
          </Svg>
          <Score>{score}</Score>
        </Radial>
      </RadialContainer>
      <Level>{getLevelFromScore(score)}</Level>
    </Container>
  )
}