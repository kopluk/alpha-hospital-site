const advantageBody = document.querySelector('.advantages__body');
const hoveredIMG = document.querySelector('.item-advantage_recomendation')

const delHoveredLogo = () => {
    advantageBody.addEventListener('mouseenter', (event) => {
        hoveredIMG.closest('.item-advantage').classList.remove('hover-logo')
    })
    advantageBody.addEventListener('mouseleave', (event) => {
        hoveredIMG.closest('.item-advantage').classList.add('hover-logo')
    })
}

export { delHoveredLogo };