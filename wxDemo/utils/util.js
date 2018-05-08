
// const formatTime = date => {
//   if (date == "" || date == null || date == undefined) {
//     return '--'
//   }
//   const year = date.getFullYear()
//   const month = date.getMonth() + 1
//   const day = date.getDate()
//   const hour = date.getHours()
//   const minute = date.getMinutes()
//   const second = date.getSeconds()
//   return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
// }

// const formatNumber = n => {
//   n = n.toString()
//   return n[1] ? n : '0' + n
// }

// function transformEmptyString(str) {
//   if (a == "" || a == null || a == undefined) {
//     return '--';
//   } else {
//     return str;
//   }
// }

// function transformEmptySource(str) {
//   if (a == "" || a == null || a == undefined) {
//     return '/images/timg.jpeg';
//   } else {
//     return str;
//   }
// }


// module.exports = {
//   formatTime: formatTime,
//   transformEmptyString: transformEmptyString,
//   transformEmptySource: transformEmptySource
// }