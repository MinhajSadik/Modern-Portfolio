$(document).ready(function(){

    $('#profile_ripple').ripples({
        resolution: 512,
        dropRadius:10
    });


    const bars = document.querySelectorAll('.progress_bar');
    bars.forEach(function(bar){
        let parcentage = bar.dataset.parcent;
        let tooltip = bar.children[0];
        tooltip.innerText = parcentage + '%';
        bar.style.width = parcentage + '%';
        // console.log(parcentage);
    })

    
})