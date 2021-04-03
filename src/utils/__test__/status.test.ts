import { getColorFromStatus } from '@utils/status';
import { colors } from '@src/styles/colors';

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
