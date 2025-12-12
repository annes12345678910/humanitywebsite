const queryurl = window.location.search;
const pars = new URLSearchParams(queryurl);
console.log(pars.get("page"))