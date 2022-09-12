import { formatDistanceToNow, parseISO } from 'date-fns'
import React from 'react'

export const TimeAgo = ({ timestamp }) => {
  let timeago = ''

  if (timestamp) {
    const date = parseISO(timestamp)
    const timePeriod = formatDistanceToNow(date)
    timeago = `${timePeriod}`
  }
  return (
    <span title={timestamp}>
      &nbsp; <i>{timeago}</i>
    </span>
  )
}
