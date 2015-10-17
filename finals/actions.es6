export const GET_FINAL = 'polomundial.com.ar/finals/GET_FINAL';
export function getFinal() {
  return {
    type: GET_FINAL,
    payload: fetch('/tortugas-final.json').then(r => r.json())
  }
}
