import operate from '../components/logic/operate';

describe('operate', () => {
  it('should perform addition correctly', () => {
    const result = operate('2', '3', '+');
    expect(result).toEqual('5');
  });

  it('should perform subtraction correctly', () => {
    const result = operate('5', '3', '-');
    expect(result).toEqual('2');
  });

  it('should perform multiplication correctly', () => {
    const result = operate('2', '3', 'x');
    expect(result).toEqual('6');
  });

  it('should perform division correctly', () => {
    const result = operate('6', '3', '÷');
    expect(result).toEqual('2');
  });

  it('should handle division by zero', () => {
    const result = operate('6', '0', '÷');
    expect(result).toEqual("Can't divide by 0.");
  });

  it('should perform modulo operation correctly', () => {
    const result = operate('7', '4', '%');
    expect(result).toEqual('3');
  });

  it('should handle modulo operation with divisor as zero', () => {
    const result = operate('7', '0', '%');
    expect(result).toEqual("Can't find modulo as can't divide by 0.");
  });

  it('should throw an error for an unknown operation', () => {
    expect(() => {
      operate('2', '3', '^');
    }).toThrow("Unknown operation '^'");
  });
});
