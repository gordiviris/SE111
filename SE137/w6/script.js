var tray = document.querySelector(`#tray`);

tray.addEventListener(`click`, openClose)

function openClose(e)
{
    var nav = document.querySelector(`nav`);
    nav.classList.toggle(`hidden`);
}

var tabs = document.querySelectorAll(`#tabs a`);
console.log(tabs);

for(let i=0; i<tabs.length; i++)
{
    tabs[i].addEventListener(`click`, function(e){
        for(let i=0; i<tabs.length; i++)
        {
            tabs[i].style.backgroundColor=`rgb(59, 59, 59)`;
        }
        e.target.style.backgroundColor=`rgb(45, 45, 45)`;
        document.querySelectorAll(`#breadcrumbs a`)[3].innerHTML = `Tabs ${i+1}`
    });
}


