export function formatNum(num){
  if(num<10000){
    return num
  }else if(num/10000<10000){
    return parseInt(num/10000)+'万'
  }else{
    return parseInt(num/10000/10000)+'亿'
  }
}

export function formatDate(time, fmt) {
  let date = new Date(time);

  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + '';
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
    }
  }
  return fmt;
};

function padLeftZero(str) {
  return ('00' + str).substr(str.length);
};

export function formatMonthDay(time) {
  return formatDate(time, "MM月dd日");
}

export function formatMinuteSecond(time) {
  return formatDate(time, "mm:ss");
}

export function formateLyric(lyric){
  if(!lyric) return false
  const list=lyric.split('\n')
  const timeExp=/\[(\d{2}):(\d{2})\.(\d{2,3})\]/
  const arr=[]
  for(let item of list){
    if(!item) continue
    const result=timeExp.exec(item)
    const time=result[1]*60*1000+result[2]*1000+result[3]*1
    const content=item.replace(timeExp,'').trim()
    arr.push({
      time,
      content
    })
  }
  return arr
}