// Array
const base = [
  {
    id: 1,
    name: 'Adam Smith',
    job: 'Web Developer',
    img: 'img/leeelsig.bmp',
    text: 'text1'
  },
  
  {
    id: 2,
    name: 'John Jonson',
    job: 'Artist',
    img: 'img/cfxkelqt.bmp',
    text: 'text2'
  },
  
  {
    id: 3,
    name: 'Frank Castle',
    job: 'Cleaner',
    img: 'img/g59a2hnz.bmp',
    text: 'text3'
  },
  
  {
    id: 4,
    name: 'Pretty Woman',
    job: 'Gamedeveloper',
    img: 'img/3ba7p1k6.bmp',
    text: 'text4'
  }
];

const titleName = document.getElementById("title--name");
const titleJob =  document.getElementById("title--job");
const titleText = document.getElementById("title--text");
const titleImg =  document.getElementById("title--img");
const btnNext = document.getElementById ("btn--next");
const btnPrev = document.getElementById ("btn--prev");
const btnRnd = document.getElementById ("btn--rnd");



let people = 0;
function peopleinf() { 
  const item = base[people];
  titleJob.textContent = item.job; 
  titleName.textContent = item.name; 
  titleText.textContent = item.text; 
  titleImg.src = item.img; 
}
peopleinf()
btnRnd.addEventListener('click', function(){
  people = getRandomInt(base.length );
  peopleinf()
});

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}


btnPrev.addEventListener('click', function(){
  people--;
  if(people == -1 ){
    people = base.length-1;
  }
  peopleinf()
});
btnNext.addEventListener('click', function(){
  people++;
  if(people == base.length ){
    people = 0;
  }
  peopleinf();
});



