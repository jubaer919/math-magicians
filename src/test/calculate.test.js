import calculate from '../components/logic/calculate';

describe('calculate', () => {
  it('should return an object with the next number set to the button name if the button name is a number', () => {
    const obj = {
      total: null,
      next: null,
      operation: null,
    };

    const result = calculate(obj, '1');

    expect(result).toEqual({
      total: null,
      next: '1',
      operation: null,
    });
  });

  it('should return an object with the next number set to the button name if the button name is a decimal number', () => {
    const obj = {
      total: null,
      next: null,
      operation: null,
    };

    const result = calculate(obj, '1.5');

    expect(result).toEqual({
      total: null,
      next: '1.5',
      operation: null,
    });
  });

  it('should return an object with the next number set to the button name if the button name is +/-', () => {
    const obj = {
      total: null,
      next: '5',
      operation: null,
    };

    const result = calculate(obj, '+/-');

    expect(result).toEqual({
      total: null,
      next: '-5',
      operation: null,
    });
  });

  it('should return an object with the total set to the result of the operation if the button name is `= (2 ms)', () => {
    const obj = {
      total: '10',
      next: '5',
      operation: '+',
    };

    const result = calculate(obj, '=');

    expect(result).toEqual({
      total: '15',
      next: null,
      operation: null,
    });
  });

  it('should return an object with the total set to null and the next number set to null if the button name is AC', () => {
    const obj = {
      total: '10',
      next: '5',
      operation: '+',
    };

    const result = calculate(obj, 'AC');

    expect(result).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });
});
