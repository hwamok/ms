import axios from 'axios';

const API_KEY = 'un9DwGe5%2FptZYV03a12XvsX7IEr4GdAJQw4vTa%2BNGUnrPc14DxYzyWTSUP2e8sirqgirX2zBmq2fV3pbB3DHvQ%3D%3D';
const ROOT_URL = 'http://openapi.airkorea.or.kr/openapi/services/rest/ArpltnInforInqireSvc';

export const FETCH_AIR = 'FETCH_AIR';


export function selectCity(city){
  return {
      type: 'CITY_SELECTED',
      payload: city
  };
}

export function fetchAir(city) {
  // const url = `${ROOT_URL}/getMsrstnAcctoRltmMesureDnsty?stationName=${city}&dataTerm=month&pageNo=1&numOfRows=10&ServiceKey=${API_KEY}&ver=1.3&_returnType=json`;
  const url = `/getMsrstnAcctoRltmMesureDnsty?stationName=${city}&dataTerm=month&pageNo=1&numOfRows=10&ServiceKey=${API_KEY}&ver=1.3&_returnType=json`;
  const request = axios.get(url);

  return {
    type: 'FETCH_AIR',
    payload: request
  }
}

// 
export function setBgcolor(color){
  return {
      type: 'SET_BGCOLOR',
      payload: color
  };
}