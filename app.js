// {
//     // 1-masala
//     function boo(n){
//         if(n <= 2006) return `Yoshingiz 18 dan katta`
//         else return `Yoshingiz 18 dan kichik`
//     }

//     console.log(boo(1999));
// }

// {
//     //2-masala
//     function boo(n){
//         if(n >= 0) return `Kiritilgan ${n} soni musbat`
//         else return `Kiritilgan ${n} soni manfiy`
//     }

//     console.log(boo(4));
// }

// {
//     //3-masala
//     function boo(a, b, c){
//         let musbat = 0
//         if(a >= 0) musbat++
//         if(b >= 0) musbat++
//         if(c >= 0) musbat++
//         return musbat
//     }

//     console.log(boo(2, -6, 9));
// }

// {
//     //4-masala
//     function boo(n){
//         if(n % 2 == 0) return `${n} soni juft son`
//         else return `${n} soni toq son`
//     }

//     console.log(boo(3));
//     console.log(boo(6));
// }

// {
//     //5-masala
//     function boo(n){
//         if(n % 2 == 0) return n/2
//         else return n*2
//     }

//     console.log(boo(7));
//     console.log(boo(6));
// }

// {
//     //6-masala
//     function boo(n){
//         if(n > 0) return n+1
//         else if(n == 0) return n = 10
//         else return n - 2
//     }

//     console.log(boo(-4));
// }

// {
//     //7-masala
//     function boo(a, b){
//         if(a > b) return `Kattasi ${a}, Kichigi ${b}`
//         else return `Kattasi ${b}, Kichigi ${a}`
//     }

//     console.log(boo(23, 14));
// }

// {
//     //8-masala
//     function boo(n){
//         if(n >= 0 && n % 2 == 0) return n + 1
//         else return n
//     }

//     console.log(boo(8));
//     console.log(boo(7));
//     console.log(boo(-6));
// }

// {
//     //9-masala
//     function boo(a, b){
//         if(a > b) return a * 10
//         else return b * 10
//     }

//     console.log(boo(5, 8));
// }

// {
//     //10-masala
//     function boo(a, b, c){
//         let toq = 0
//         let juft = 0
//         if(a % 2 == 0) juft++
//         else  toq++
//         if(b % 2 == 0)  juft++
//         else  toq++
//         if(c % 2 == 0)  juft++
//         else  toq++

//         return `Kiritilgan sonlardan ${juft} tasi juft va ${toq} tasi toq `
//     }

//     console.log(boo(7, 8, 3));
// }















let header__collection = document.querySelector('.header__collection')
function showBAR() {
    header__collection.style.left = '0%'
}
function hideBAR() {
    header__collection.style.left = '-100%'
}

let top__card = document.querySelectorAll('.top__card-item')
let btn__more = document.querySelectorAll('.btn__more')
let topcard = document.querySelector('.top__card')

btn__more.forEach((btn) => {
    // tepaga 
    top__card.forEach((item) => {
        item.addEventListener('mouseenter',()=>{
            item.style.transform = "translateY(-15px)";
            item.style.transition = '.5s'
        })
        item.addEventListener('mouseleave',()=>{
            item.style.transform = "translateY(0px)";
            item.style.transition = '.5s'
        })
    })
    topcard.addEventListener('mouseenter',() =>{
        btn.style.display = 'block'
    })
    topcard.addEventListener('mouseleave',() =>{
        btn.style.display = 'none'
    })
})


let cards = document.querySelectorAll('.card');

cards.forEach(function(card) {
  
  card.addEventListener('mouseenter', function() {
    let overlay = card.querySelector('.oyna'); 
    overlay.style.display = 'block'; 
  });

  card.addEventListener('mouseleave', function() {
    let overlay = card.querySelector('.oyna'); 
    overlay.style.display = 'none'; 
  });
});





