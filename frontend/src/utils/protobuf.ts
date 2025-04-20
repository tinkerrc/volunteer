import { Interval } from '@/proto/google/type/interval_pb';
export function intervalToString(interval: Interval): string {
    const start_timestamp = interval.startTime!
    const end_timestamp = interval.endTime!
    const start = new Date(Number(start_timestamp.seconds) * 1000 + start_timestamp.nanos / 1e6);
    const end = new Date(Number(end_timestamp.seconds) * 1000 + end_timestamp.nanos / 1e6);
    return `${start} - ${end}`
}