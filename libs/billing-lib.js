export function calculateCost(storage) {
  // prettier-ignore
  const rate = storage <= 10 ?
    4 :
    storage <= 100 ?
    2 :
    1;

  // stripe expects amount in cents, so we convert to dollar
  return rate * storage * 100;
}