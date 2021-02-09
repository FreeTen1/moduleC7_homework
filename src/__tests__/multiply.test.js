import {multiply} from "../multiply_func";


xdescribe('test multiply', () => {
  it('multiply 1 * 1 to equal 1', () => {
    expect(multiply(1, 1)).toBe(1);
  })
  it('multiply 1 * 4 to equal 4', () => {
    expect(multiply(1, 4)).toBe(4);
  })
})

