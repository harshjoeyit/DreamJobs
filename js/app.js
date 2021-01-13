
/* FOR SHOWING EXTRA CATEGORIES  */

let extraShowing = false;
let cards = document.querySelectorAll('.category-card');
const extraCards = [...cards].filter(card => {
    return card.classList.contains('extra-card')
})

const toggleExtraCards = (e) => {
    if (extraShowing) {
        e.target.textContent = 'See All Categories';
        // Add class
        extraCards.forEach(card => {
            card.classList.add('extra-card');
            card.classList.remove('fade-in');
        })
    }
    else {
        e.target.textContent = 'Hide Categories';
        // Remove class
        extraCards.forEach(card => {
            card.classList.remove('extra-card');
            card.classList.add('fade-in');
        })
    }
    extraShowing = !extraShowing;
}

// EVENT LISTENER ON See All Categories BUTTON

let seeAllBtn = document.querySelector('.cat-outer-container > button');
seeAllBtn.addEventListener('click', toggleExtraCards);



/* For Testimonials */

const tstmols = [
    {
        quote: ` enim eu venenatis. Duis tincidunt laoreet ex, 
        in pretium orci vestieptos himenaeos. Duis pharetra luctus lacus ut 
        vestibulum. Maecenas ipsum lacus, lacinia quis`,
        name: 'Edwards Macio',
        prof: 'React Developer',
        bgImg: 'url("../assets/devEd.png")'
    },
    {
        quote: ` pellentesque eu, pretium quis, sem.
        Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec,
        vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venena`,
        name: 'Salman Khan',
        prof: 'Android Developer',
        bgImg: 'url("../assets/salKhan.png")'
    },
    {
        quote: ` culus mus.
        Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
        Nulla consequat massa quis enimbulum eget. Class aptent taciti sociosqu ad litora torquent`,
        name: 'Peter Theil',
        prof: 'C# Developer',
        bgImg: 'url("../assets/peter.png")'
    }
]


let quote = document.querySelector('.tstmol-entry .quote');
let devName = document.querySelector('.psnl-details .name');
let prof = document.querySelector('.psnl-details .prof');
let bgImg = document.querySelector('.tstmol-image-container');
let index = 0;

quote.textContent = tstmols[0].quote;
devName.textContent = tstmols[0].name;
prof.textContent = tstmols[0].prof;
bgImg.style.backgroundImage = tstmols[0].bgImg;


const handleChange = (clickedBtn) => {
    if (clickedBtn === 'next') {
        index = (index + 1) % 3;
    }
    else if (clickedBtn === 'prev') {
        index = (index + 2) % 3;
    }
    quote.textContent = tstmols[index].quote;
    devName.textContent = tstmols[index].name;
    prof.textContent = tstmols[index].prof;
    bgImg.style.backgroundImage = tstmols[index].bgImg;
}

const prev = document.querySelector('.switch-btns .prev');
const next = document.querySelector('.switch-btns .next');

prev.addEventListener('click', () => { handleChange('prev') })
next.addEventListener('click', () => { handleChange('next') })
