import dayjs from 'dayjs'

import { POST_FORMAT } from '../constants/datetime'

export const formatPostDay = (day: string) => {
    return dayjs(day).format(POST_FORMAT)
}