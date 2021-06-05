const view = document.getElementById('view');

let min = 1;
let max = 15;
let array =[];
const array2 = ['B','I','N','G','O'];
const bingo = [];
for(i=0;i<5;i++){
    array=[];
    array.push(array2[i]);
    // nums.textContent = array2[i];
    // view.appendChild(nums);
    while(array.length<6){ 
        const random = Math.floor(Math.random() * (max + 1 - min) ) + min;
        array.push(random);
        let set =new Set(array);
        array = Array.from(set);
    };
    bingo.push(array);
    min += 15;
    max += 15;
};

console.log(bingo);
//真ん中の数をfreeにする
bingo[2][3]= 'free';
console.log(bingo[2]);

//映る
// nums.textContent = bingo[2][1];
// view.appendChild(nums);

//映らない
console.log(bingo[2].length);
for(i=0; bingo[2].length<i; i++){
    const nums = document.createElement('td');
    const tr = document.createElement('tr');
    console.log(i);
nums.textContent= bingo[2][i];
tr.appendChild(nums);
view.appendChild(tr);   
}

//tdに入れて画面表示
const test = function(){
     for(let b = 0;bingo.length<b ;b++){
        const tr = document.createElement('tr');
        view.appendChild(tr);
        console.log(b);        // for(let c = 0; c<5; c++){
        // const nums = document.createElement('td');        
        // tr.appendChild(nums); 
        // nums.textContent = bingo[b][c];
        // } 
     }
};

test();