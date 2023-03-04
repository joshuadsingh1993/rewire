import { levelRanges, LEVELS } from './constants'

export const getLevelFromScore = (score: number) => {
	if (score > 100 || score < 0) {
		throw Error('Score out of range. Please input a score from 0 - 100.')
	}

	if (score <= levelRanges.peak && score > levelRanges.strong) {
		return LEVELS.peak
	}

	if (score <= levelRanges.strong && score > levelRanges.primed) {
		return LEVELS.strong
	}

	if (score <= levelRanges.primed && score > levelRanges.baseline) {
		return LEVELS.primed
	}

	if (score <= levelRanges.baseline && score > levelRanges.compromised) {
		return LEVELS.baseline
	}

	if (score <= levelRanges.compromised && score > levelRanges.fatigued) {
		return LEVELS.compromised
	}

	if (score <= levelRanges.fatigued && score > levelRanges.drained) {
		return LEVELS.fatigued
	}

	if (score <= levelRanges.drained && score >= 0) {
		return LEVELS.drained
	}

	// default
	return LEVELS.peak
}