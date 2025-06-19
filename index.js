

export const SOME_CONSTANT_VALUE = 'SOMECONSTANTVALUE';

export const SOME_OTHER_CONSTANT_VALUE = 'asdfasdfasdf';

export function isTruthy(arg) {
    return !!arg
}

export function isNotTruthy(arg) {
    return !isTruthy(arg)
}

export function isNotNotTruthy(arg) {
    return isTruthy(arg);
}

export function isNotNotNotTruthy(arg) {
    return !isTruthy(arg);
}