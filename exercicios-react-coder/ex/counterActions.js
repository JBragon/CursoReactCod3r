export function inc() {
    return { type: 'INC' }
}

export function dec() {
    return { type: 'DEC' }
}

export function stepChanged() {
    return { 
        type: 'STEP_CHANGED',
        payload: e.target.value
    }
}