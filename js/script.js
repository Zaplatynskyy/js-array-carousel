const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

// ciclo for per inserire le immagini grandi
for (let i = 0; i < items.length; i++) {
    const mainImages = document.querySelector('.main_images');

    mainImages.innerHTML += `
                            <div class="main_img">
                            <img src="${items[i]}" alt="">
                            
                            <div class="text">
                                <h2>${title[i]}</h2>
                                <p>${text[i]}</p>
                            </div>
                            </div>
                            `
}

// ciclo for per inserire le immagini piccole
for (let i = 0; i < items.length; i++) {
    const thumbnails = document.querySelector('.thumbnails');

    thumbnails.innerHTML += `
                            <div class="thumbnail">
                                <img src="${items[i]}" alt="">
                            </div>
                            `
}

// seconda soluzione milestone 3

const buttonUp = document.querySelector('.up');
const buttonDown = document.querySelector('.down');
const mainImgArray = document.getElementsByClassName('main_img');
const thumbnailArray = document.getElementsByClassName('thumbnail');
let num = 0;

mainImgArray[num].classList.add('active');
thumbnailArray[num].classList.add('active');

// al click del pottone verso il basso scorri verso l'immagine in basso
buttonDown.addEventListener("click",
    function() {
        // rimozione classe active da entrambe le colonne
        mainImgArray[num].classList.remove('active');
        thumbnailArray[num].classList.remove('active');      

        num++;

        if(num != title.length) {
            // se non è in ultima posizione, assegna active al successivo elemento
            mainImgArray[num].classList.add('active');
            thumbnailArray[num].classList.add('active');

        } else {
            // altrimenti se in ultima posizione, assegna active al primo elemento
            num = 0;
            mainImgArray[0].classList.add('active');
            thumbnailArray[0].classList.add('active');
        }
    }
);

// al click del pottone verso l'alto scorri verso l'immagine in alto
buttonUp.addEventListener("click",
    function() {
        //rimozione classe active da entrambe le colonne
        mainImgArray[num].classList.remove('active');
        thumbnailArray[num].classList.remove('active');
        
        if(num != 0) {
            //se non è in prima posizione, assegna active al precedente elemento
            num--;
            mainImgArray[num].classList.add('active');
            thumbnailArray[num].classList.add('active');
        } else {
            //altrimenti se in prima posizione, assegna active all'ultimo elemento
            num = title.length - 1;
            mainImgArray[num].classList.add('active');
            thumbnailArray[num].classList.add('active');
        }
    }
);


// prima soluzione milestone 3

// document.querySelector('.main_img').classList.add('active');

// document.querySelector('.layover').classList.add('active');

// bottoni freccia su e giu inseriti dinamicamente per farli stare alla fine (altrimenti mi scompaiono sotto le immagini a causa del position)
// document.querySelector('.thumbnails').innerHTML += `
//                         <div class="btn up">
//                         <i class="fas fa-chevron-up"></i>
//                         </div>
//                         <div class="btn down">
//                         <i class="fas fa-chevron-down"></i>
//                         </div>
//                         `
// ;

// const buttonUp = document.querySelector('.up');
// const buttonDown = document.querySelector('.down');

// // al click del pottone verso il basso scorri verso l'immagine in basso
// buttonDown.addEventListener("click",
//     function() {
//         const mainImgArray = document.getElementsByClassName('main_img');
//         const layoverArray = document.getElementsByClassName('layover');
//         let num;

//         // ciclo for per individuare la posizione dell'active
//         for (let i = 0; i < title.length; i++) {
//             let main_img = mainImgArray[i].className;

//             if (main_img == 'main_img active') {
//                 num = i;
//             }
//         }

//         // rimozione classe active da entrambe le colonne
//         mainImgArray[num].classList.remove('active');
//         layoverArray[num].classList.remove('active');
        

//         if(num != (title.length - 1)) {
//             // se non è in ultima posizione, assegna active al successivo elemento
//             mainImgArray[num + 1].classList.add('active');
//             layoverArray[num + 1].classList.add('active');
//         } else {
//             // altrimenti se in ultima posizione, assegna active al primo elemento
//             mainImgArray[0].classList.add('active');
//             layoverArray[0].classList.add('active');
//         }
//     }
// )

// // al click del pottone verso l'alto scorri verso l'immagine in alto
// buttonUp.addEventListener("click",
//     function() {
//         const mainImgArray = document.getElementsByClassName('main_img');
//         const layoverArray = document.getElementsByClassName('layover');
//         let num;

//         // ciclo for per individuare la posizione dell'active
//         for (let i = 0; i < title.length; i++) {
//             let main_img = mainImgArray[i].className;

//             if (main_img == 'main_img active') {
//                 num = i;
//             }
//         }

//         // rimozione classe active da entrambe le colonne
//         mainImgArray[num].classList.remove('active');
//         layoverArray[num].classList.remove('active');
        
//         if(num != 0) {
//             // se non è in prima posizione, assegna active al precedente elemento
//             mainImgArray[num - 1].classList.add('active');
//             layoverArray[num - 1].classList.add('active');
//         } else {
//             // altrimenti se in prima posizione, assegna active all'ultimo elemento
//             mainImgArray[title.length - 1].classList.add('active');
//             layoverArray[title.length - 1].classList.add('active');
//         }
//     }
// )

// Consegna: Dati tre array contenenti:
// una lista ordinata di 5 immagini,
// una lista ordinata dei relativi 5 luoghi e
// una lista di 5 news, creare un carosello come nella foto allegata.
// MILESTONE 1 Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo l'immagine grande a sinistra e le thumbnails sulla destra in modo da poter stilare lo slider; avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull'aspetto logico.
// MILESTONE 2 Adesso rimuoviamo tutto il markup statico e inseriamo le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal. Al termine di questa fase ci ritroveremo con lo stesso slider, ma costruito dinamicamente attraverso JavaScript.
// MILESTONE 3 Al click dell'utente sulle frecce verso l'alto o verso il basso, l'immagine attiva diventa visibile in formato grande a sinistra e nel suo angolo in basso a destra dovranno essere aggiunti i relativi:
// titolo e
// testo. Allo stesso tempo nelle miniature l'immagine attiva dovrà apparire in evidenza rispetto alle altre.
// BONUS: Aggiungere il ciclo infinito del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso l'alto, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso il basso.