import { v4 as uuidv4 } from "uuid";
function data() {
  return [
    {
      name: "Snowstalgia",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/10/0e5bb63f838ff92eeac142aae944e9f678df13c9-150x150.jpg",
      artist: "invention",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10305",
      id: uuidv4(),
      color: ["#D4B5C4", "#8C273B"],
      active: true,
    },
    {
      name: "Peaches",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/11/8a0c857ddad531279d0757f5362380a6837b1b69-150x150.jpg",
      artist: "Philanthrope, The Field Tapes",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=11246",
      id: uuidv4(),
      color: ["#D4B5C4", "#8C273B"],
      active: false,
    },
    {
      name: "5 am",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/10/23fdd99adc3e16abcb67b004ea3e748ebf433a49-150x150.jpg",
      artist: "Loop Schrauber, TRIBEZ.",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10309",
      id: uuidv4(),
      color: ["#D4B5C4", "#8C273B"],
      active: false,
    },
    {
      name: "Bandwidth",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/10/737bb830d34592344eb4a2a1d2c006cdbfc811d9-1024x1024.jpg",
      artist: "Gustav Gustav, Dave Kellner",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10319",
      id: uuidv4(),
      color: ["#D4B5C4", "#8C273B"],
      active: false,
    },
    {
      name: "Tuesday",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/10/0e5bb63f838ff92eeac142aae944e9f678df13c9-150x150.jpg",
      artist: "Comodo",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10323",
      id: uuidv4(),
      color: ["#D4B5C4", "#8C273B"],
      active: false,
    },
    {
      name: "Yesterdays",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/10/d2898bc0ef36b5d67d6793062d588d208a90421c-1024x1024.jpg",
      artist: "xander",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10333",
      id: uuidv4(),
      color: ["#D4B5C4", "#8C273B"],
      active: false,
    },
  ];
}

export default data;
