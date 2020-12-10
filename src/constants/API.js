const fullYear = new Date().getFullYear();
const month = new Date().getMonth() < 10 ? `0${new Date().getMonth()}` : new Date().getMonth();
const day = new Date().getDate() - 7 < 10 ? `0${new Date().getDate() - 7}` : new Date().getDate();
const lastWeek = `${fullYear}-${month}-${day}`;

export const API = `https://api.github.com/search/repositories?q=created:>${lastWeek}&sort=stars&order=desc`;
