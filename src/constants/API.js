import moment from "moment";

const lastWeek = moment().subtract(7, "d").format("YYYY-MM-DD");
export const API = `https://api.github.com/search/repositories?q=created:>${lastWeek}&sort=stars&order=desc`;
