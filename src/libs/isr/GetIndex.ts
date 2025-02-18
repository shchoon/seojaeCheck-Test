export default function GetIndex(): number {
  // const day = new Date().getDate();

  // if (day === 1) {
  //   return 14;
  // } else {
  //   return day % 15;
  // }

  return new Date().getMinutes() % 15;
}
