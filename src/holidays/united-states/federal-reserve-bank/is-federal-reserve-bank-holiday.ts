// holidays/united-states/federal-reserve-bank/is-federal-reserve-bank-holiday.ts

import { isWeekend } from '../../../date-fns';

export default function (date: Date): boolean {
  return isWeekend(date);
}
