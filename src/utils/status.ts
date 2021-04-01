import { colors } from '@root/styles/colors';

/**
 * Returns the color corresponding to the state of a character
 *
 * @param status - The first input string
 * @returns The corresponding color of the status
 *
 */
export function getColorFromStatus(status: string): string {
  switch (status.toLowerCase()) {
    case 'alive':
      return colors.status_alive;
    case 'dead':
      return colors.status_dead;
    default:
      return colors.status_unknown;
  }
}
