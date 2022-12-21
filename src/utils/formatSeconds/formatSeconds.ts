export const formatSeconds = (rawSeconds: number): string => {
    rawSeconds = rawSeconds < 0 ? 0 : rawSeconds;

    const minutes = Math.floor(rawSeconds / 60);
    const seconds = rawSeconds % 60;

    const minutesStr = (minutes <= 9 ? '0' : '') + minutes;
    const secondsStr = (seconds <= 9 ? '0' : '') + seconds;

    return `${minutesStr}:${secondsStr}`;
}