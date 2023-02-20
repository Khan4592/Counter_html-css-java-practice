let count = 0;
let btn = document.querySelector('.btn') 
let clicks = document.querySelector('.clicks')
let rst = document.querySelector('.rst');
btn.addEventListener ('click', function(e)
{
    e.preventDefault;
    count++;
    console.log('clivk');
    clicks.innerHTML=' '+ count;
} ) ;

rst.addEventListener('click',function(f)
{
    count=0;
    clicks.innerHTML= ' ' + count;
})

