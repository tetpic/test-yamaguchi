
function moveTable() {
    let upperTablePart = document.querySelector('[data-moving-part]')
    let upButton = document.querySelector('.table__button_up')
    let downButton = document.querySelector('.table__button_down')
    if (upperTablePart) {
        upButton.addEventListener('click', () => {
            upperTablePart.classList.add('table_active')
        })
        downButton.addEventListener('click', () => {
            upperTablePart.classList.remove('table_active')
        })
    }
}
moveTable()


function girlAppearance() {
    let levitateSection = document.querySelector('.control__levitate')
    let blackHole = levitateSection.querySelector('.black-hole')
    let effectShadow = levitateSection.querySelector('.effect__shadow')
    let flyingGirl = levitateSection.querySelector('img')
    if (levitateSection) {
        setTimeout(()=> {
            blackHole.style.width = "270px";
            blackHole.style.height = "193px";
            blackHole.style.marginBottom = "-27px";
        }, 1000)
        setTimeout(()=> {
            effectShadow.style.opacity = "1"; 
            flyingGirl.style.bottom = '30px';
        },1400)
        setTimeout(() => {
            flyingGirl.style.transform = "translateY(-30px)"
            effectShadow.style.opacity = '0';
            blackHole.style.width = "193px";
            blackHole.style.height = '186px';
        }, 3000)
        setInterval(()=> {
            flyingGirl.style.transform = "translateY(0px)"
            setTimeout(()=> {
                flyingGirl.style.transform = "translateY(-30px)"
            }, 2000)
        }, 4000)
    }
}

girlAppearance()