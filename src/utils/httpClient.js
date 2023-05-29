//const API = "https://api.themoviedb.org/3";
const API = "https://www.thecocktaildb.com/api/json/v1/1";
export function get(path) {
  let pathm = API + path;
  return fetch( pathm, {
    // headers: {
    //   Authorization:
    //     "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NzUzN2ZmMTlmMzgxZGQ3YjY3ZWVlMWVhOGI4MTY0YSIsInN1YiI6IjVlM2ExNmU1MGMyNzEwMDAxODc1NTI4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nOpZ_nBtA93tbzr6-rxD0760tssAAaSppyjRv9anArs",
    //   "Content-Type": "application/json;charset=utf-8",
    // },
  }).then((result) => result.json());
}
