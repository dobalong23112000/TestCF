//A
// A1;
function adjacentElementsProduct(inputArray) {
  let max = 0;
  for (let i = 0; i < inputArray.length - 1; i++) {
    if (max < inputArray[i] * inputArray[i + 1]) {
      max = inputArray[i] * inputArray[i + 1];
    }
  }
  return max;
}
console.log(adjacentElementsProduct([2, 3, 7, -5, -2, 4]));

//A2
// function alternatingSums(a) {
//   let newarray = [];
//   let sumeven = a.reduce(
//     (total, value, index) => (index % 2 == 0 ? total + value : total + 0),
//     0
//   );
//   let sumodd = a.reduce(
//     (total, value, index) => (index % 2 != 0 ? total + value : total + 0),
//     0
//   );
//   newarray.push(sumeven, sumodd);
//   return newarray;
// }
// console.log(alternatingSums([60, 40, 55, 75, 64]));

//B
// let $input = document.querySelector("#input");
// let $domain = document.querySelector("#domain");
// let $btn = $domain.getElementsByTagName("button");
// let $result = document.querySelector("#result");
// let url, shortdomain;
// $input.onchange = (e) => {
//   url = e.target.value;
// };
// for (let i = 0; i < $btn.length; i++) {
//   $btn[i].addEventListener("click", function (e) {
//     let $shortdomain = e.target;
//     if ($domain.querySelector(".active")) {
//       $domain.querySelector(".active").classList.remove("active");
//     }
//     $shortdomain.classList.add("active");
//     shortdomain = $shortdomain.innerHTML;
//   });
// }
// let $btnEnter = document.querySelector("#btnEnter");
// $btnEnter.onclick = async (e) => {
//   let shortlink;
//   if (!url || !shortdomain) {
//     alert("Moi nhap ");
//   } else {
//     try {
//       let getJsonShortlink = await fetch(
//         `https://api.shrtco.de/v2/shorten?url=${url}`
//       );
//       let getShortLink = await getJsonShortlink.json();
//       if (shortdomain == "shrtco.de") {
//         shortlink = getShortLink.result.short_link;
//       }
//       if (shortdomain == "9qr.de") {
//         shortlink = getShortLink.result.short_link2;
//       }
//       if (shortdomain == "shiny.link") {
//         shortlink = getShortLink.result.short_link3;
//       }
//       $result.style.display = "block";
//       $result.getElementsByTagName("a")[0].innerHTML = shortdomain;
//       $result.href = shortdomain;
//       $input.value = "";
//     } catch (e) {
//       alert("Nhap lai link");
//     }
//   }
// };
