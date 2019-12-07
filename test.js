const data = "Bạn Ah được bẩy điểm";
console.log(data.match(/^(.*?(\bđược\b)[^$]*)$\p{L}/u));