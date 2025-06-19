

export const SOME_CONSTANT_VALUE = 'SOMECONSTANTVALUE';

export function isTruthy(arg) {
    return !!arg
}

export function isNotTruthy(arg) {
    return !isTruthy(arg)
}

export function isNotNotTruthy(arg) {
    return isTruthy(arg);
}