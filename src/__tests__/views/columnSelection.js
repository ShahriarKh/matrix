import { Matrix, MatrixColumnSelectionView } from '../..';

describe('Selection column view', () => {
  it('should correctly remap coordinates', () => {
    const m = Matrix.ones(5, 8);
    const msv = new MatrixColumnSelectionView(m, [1, 2]);

    expect(m.get(0, 2)).toBe(1);
    msv.set(0, 1, 5);
    expect(msv.get(0, 1)).toBe(5);
    expect(m.get(0, 2)).toBe(5);
  });

  it('should throw when wrong arguments or range', () => {
    const m = Matrix.ones(2, 2);
    expect(() => new MatrixColumnSelectionView(m, [1, 1, 2])).toThrow(
      'column indices are out of range',
    );
    expect(() => new MatrixColumnSelectionView(m, 1)).toThrow(
      'column indices must be an array',
    );
  });
});
