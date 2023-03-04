export enum LEVELS {
    peak = 'peak',
    strong = 'strong',
    primed = 'primed',
    baseline = 'baseline',
    compromised = 'compromised',
    fatigued = 'fatigued',
    drained = 'drained'
}

export const levelRanges = {
	[LEVELS.peak]: 100,
	[LEVELS.strong]: 84,
	[LEVELS.primed]: 70,
	[LEVELS.baseline]: 60,
	[LEVELS.compromised]: 40,
	[LEVELS.fatigued]: 30,
	[LEVELS.drained]: 17
}