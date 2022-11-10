// holidays/united-states/federal-reserve/is-us-federal-reserve-holiday.ts

import { isWeekend } from '../../../date-fns';

export default function (date: Date): boolean {
  return isWeekend(date);
}
