import * as api from '@lp-labs/iso-weekday-counter';
import { countWeekday } from '@lp-labs/iso-weekday-counter';
console.log(countWeekday('2024-01-01', '2024-01-31', 1));
// @ts-expect-error invalid argument must be rejected by declarations
api.countWeekday(20240101, '2024-01-02', 1);
