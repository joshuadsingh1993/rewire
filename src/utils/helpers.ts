import { levelRanges, LEVELS } from './constants'

/**
 * Gets the level of the athlete from his score
 * @param {number} score Athlete performance score
 * @returns {string} The score level
 * @example getLevelfromScore(99) // returns 'peak'
 */
export const getLevelFromScore = (score: number) => {
	// Score cannot be less than 0 or more than 100
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

	// Finally returns default level
	return LEVELS.peak
}