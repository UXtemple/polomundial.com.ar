export const GET_FINAL = 'polomundial.com.ar/finals/GET_FINAL';
export function getFinal() {
  return {
    type: GET_FINAL,
    payload: fetch('https://uxtemple.iriscouch.com/polomundialcomar/a2f39e516be708510456656463000424').then(r => r.json())
  }
}
