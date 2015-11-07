export const GET_FINAL = 'polomundial.com.ar/finals/GET_FINAL';
export function getFinal(tournamentId) {
  return {
    type: GET_FINAL,
    payload: fetch(`https://db.uxtemple.com/polomundialcomar/final-${tournamentId}`).then(r => r.json()),
    meta: {
      tournamentId
    }
  }
}
