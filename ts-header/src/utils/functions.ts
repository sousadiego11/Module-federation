export const makeObjects = (numbers: number[]) => console.log(numbers.map((n) => ({ 'Number': n }))) 

const defaultTest = () => console.log('Default exported')

export default defaultTest
