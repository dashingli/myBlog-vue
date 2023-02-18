export default function getDate(time, trueOrfalse = false) {
  const date = new Date(+time);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  const hour = date.getHours().toString().padStart(2, "0");
  const minute = date.getMinutes().toString().padStart(2, "0");
  const second = date.getSeconds().toString().padStart(2, "0");
  if (!trueOrfalse) {
    return `${year}-${month}-${day}`;
  } else {
    return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
  }
}
