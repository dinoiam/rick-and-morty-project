import { getColorFromStatus } from '@root/utils/status';
import { colors } from '@root/styles/colors';

describe('status', () => {
  describe('getColorFromStatus', () => {
    test('it returns color.alive', () => {
      expect(getColorFromStatus('Alive')).toBe(colors.status_alive);
    });
    test('it returns color.status_dead', () => {
      expect(getColorFromStatus('DEAD')).toBe(colors.status_dead);
    });
    test('it returns color.status_unknown', () => {
      expect(getColorFromStatus('UnKnOWn')).toBe(colors.status_unknown);
    });
  });
});
