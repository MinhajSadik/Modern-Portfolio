$(document).ready(function(){

    $('#profile_ripple').ripples({
        resolution: 512,
        dropRadius:10
    });


    //progress-bar
    const bars = document.querySelectorAll('.progress_bar');
    bars.forEach((bar)=>{
        let parcentage = bar.dataset.parcent;
        let tooltip = bar.children[0];
        tooltip.innerText = parcentage + '%';
        bar.style.width = parcentage + '%';
        // console.log(parcentage);
    })



    //counter
    const counters = document.querySelectorAll('.counter');
    // console.log(counters);

    const runCounter = () => {
        counters.forEach(counter => {
            counter.innerText = 0;
            let target = +counter.dataset.count;
            let step = target/100;

            let countIt = () => {
                let displayedCount = +counter.innerText;
                if(displayedCount < target){
                    counter.innerText = Math.ceil(displayedCount + step);
                    setTimeout(countIt, 1);
                }else{
                    counter.innerText = target;
                }
            }
            countIt();
        })
    }

//     let counterSection = document.querySelectorAll('.counter_section');

//     let options = {
//         rootMargin : '0px 0px -200px 0px'
//     }

//     let done = 0;

//     const sectionObserver = new IntersectionObserver(entries =>{

//         if(entries[0].isIntersecting && done !== 1){
//             done = 1;
        runCounter();
            
//         }
//     }, options)

//     sectionObserver.observe(counterSection);
})



