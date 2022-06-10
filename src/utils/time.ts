import {
  formatDistance,
  fromUnixTime,
  formatRelative,
  formatISO,
  format,
} from "date-fns";

/**
 * Returns a text representation of the provided epoch
 * @param epoch Unix epoch
 * @returns text
 */
export const formatTimeText = (epoch: number): string =>
  formatISO(fromUnixTime(epoch));

/**
 * Returns a human readable distance between the start and end epochs
 * @param epochStart Unix epoch
 * @param epochEnd Unix epoch
 * @returns text
 */
export const formatTimeDistance = (
  epochStart: number,
  epochEnd: number
): string =>
  formatDistance(fromUnixTime(epochStart), fromUnixTime(epochEnd), {
    addSuffix: true,
  });

/**
 * Returns a human readable text from the epoch to now
 * @param epoch Unix epoch
 * @returns text
 */
export const formatTimeRelativeToNow = (epoch: number): string =>
  formatRelative(fromUnixTime(epoch), new Date());

export const formatLabelText = (epoch: number): string =>
  format(fromUnixTime(epoch), "EE, LLL dd hh:mm a");
