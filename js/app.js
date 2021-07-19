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
            // let step = target/100;

            let countIt = () => {
                let displayedCount = +counter.innerText;
                if(displayedCount < target){
                    counter.innerText = Math.ceil(displayedCount + 1); //replace 1 and set step it's divided by 100 this progress number
                    setTimeout(countIt, 1);
                }else{
                    counter.innerText = target;
                }
            }
            countIt();
        })

    }

        // let counterSection = document.querySelectorAll('.counter_section');
        // console.log(counterSection);

        // const options = {
        //     rootMargin: '0px 0px -200px 0px'
        // }

        // let done = 0;

        // const sectionObserver = new IntersectionObserver(function(entries){

        //     if(entries[0].isIntersecting && done !== 1){
        //         console.log('intersecting...');
        //         done = 1;
                runCounter();
        //     }

        // }, options)

        // sectionObserver.observe(counterSection);

        


        // image filter

        let $wrapper = $('.portfolio_wrapper');

        // initialize isotope
        $wrapper.isotope({
            filter:'*',
            layoutMode: 'masonry',
            animationOptions: {
                duration: 750,
                easing: 'linear'
            }
        });

        let links = document.querySelectorAll('.tabs a');

        links.forEach(link=>{

            let selector = link.dataset.filter;

            link.addEventListener('click', function(e){
                e.preventDefault();

                $wrapper.isotope({
                    filter:selector,
                    layoutMode: 'masonry',
                    animationOptions: {
                        duration: 750,
                        easing: 'linear'
                    }
                });

                links.forEach(link=>{
                    link.classList.remove('active')
                })

                e.target.classList.add('active');

            });
        })





        // Magnify  pop-up

        $('.magnify').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            },
            zoom:{
                enabled: true
            }
        })

});



