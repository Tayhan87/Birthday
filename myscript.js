const pageTurnBtn=document.querySelectorAll('.nextprev-btn');

pageTurnBtn.forEach((el,index) => {
    el.onclick = ()=>{
        const pageTurnId =el.getAttribute('data-page');
        const pageTurn = document.getElementById(pageTurnId);

        if(pageTurn.classList.contains('turn')){
            pageTurn.classList.remove('turn');
             setTimeout(()=>{
                pageTurn.style.zIndex=20 - index;
             },500);
        }
   
    else {
        pageTurn.classList.add('turn');
         setTimeout(()=>{
             pageTurn.style.zIndex = 20 + index;
         },500);
    }
 }
});

// contact me button when clicked

const pages=document.querySelectorAll('.book-page.page-right');

let total_page=pages.length;
let page_number = 0;

function reverse_index(){
    page_number--;
    if(page_number < 0){
        page_number = total_page - 1;
    }
}

const back_profile= document.querySelector('.back-profile');

back_profile.onclick=()=>{
    pages.forEach((_,index)=>{
        setTimeout(()=>{
            reverse_index();
            pages[page_number].classList.remove('turn');
            
            setTimeout(()=>{
                reverse_index();
                pages[page_number].style.zIndex=10 + index;
            },500)
        },(index + 1) * 200 + 100)
    })
}

//opening animations

const cover_right= document.querySelector('.cover.cover-right');
const page_left= document.querySelector('.book-page.page-left');

//opening animation (cover right animation)

setTimeout(()=>{
    cover_right.classList.add('turn');
},2100);

setTimeout(()=>{
    cover_right.style.zIndex=-1;
},2800);

//opening animation (page left or profile page animation)

setTimeout(()=>{
    page_left.style.zIndex=20;
},3200);

//opening animation (all page right animation)

pages.forEach((_,index)=>{
    setTimeout(()=>{
        reverse_index();
        pages[page_number].classList.remove('turn');
        
        setTimeout(()=>{
            reverse_index();
            pages[page_number].style.zIndex=10 + index;
        },500)
    },(index + 1) * 200 + 2100)
})