chrome.contextMenus.create({
  id: "MassDataHackPOC",
  title: "MassDataHackPOC",
  contexts: ["selection"]
});
let boop = [];
function gis(z, d) {
  const now = new Date();
  const time = now.getTime();
  const date = now.toLocaleString();
  const bingbong = String.fromCharCode(z);
  boop.push(z, d);
  const selectedText = time + date + bingbong;
  const yup = selectedText.split("").reduce((acc, char) => acc + char.charCodeAt(), 0).toString();
  const x = yup.split("").map(Number);
  const sum = (arr) => {
    let total = 0;
    for (let v = 0; v <= arr.length; v++) {
      total += (arr[v] * arr[v]);
    };
    console.log({ url: `https://${(total * (arr.length * arr.length))}.com`});
    return total * (arr.length * arr.length);
  };
  const result = sum(x) * sum(x);
  const change = (result * 0).toString().replace(/0/g, '');
  document.writeln(`${change}`);
};

async function bang(l) {
  for (let j = 0; j <= 149186;j++) {
    await gis(j, l);
  };
};

async function beepboop(){
  for (let i = 0; i <= 45; i++) {
    await bang(i);
  };
};

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId === "MassData") {

    beepboop();
  };
});
