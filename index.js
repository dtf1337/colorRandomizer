const colorBtn = document.querySelector('.colorBtn');
const bodyBcg = document.querySelector('body');
const hex = document.querySelector('.hex');
const hexNumbers = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']

// colorBtn.addEventListener('click', () => {
//   var x = Math.floor(Math.random() * 256);
//   var y = Math.floor(Math.random() * 256);
//   var z = Math.floor(Math.random() * 256);
//   var bgColor = "RGB(" + x + "," + y + "," + z + ")";
//   bodyBcg.style.backgroundColor = bgColor;
//   hex.innerHTML = bgColor;
  
// })
colorBtn.addEventListener('click', getHex);

function getHex(){
  let hexCol ='#';
  for(let i = 0; i<6; i++){
    let random = Math.floor(Math.random()*hexNumbers.length)
    hexCol += hexNumbers[random];
  }
  bodyBcg.style.backgroundColor = hexCol;
  hex.innerHTML = hexCol;
}