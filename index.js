(function() {
    const controlAreas = document.querySelectorAll('.control-area span')
    const cube = document.querySelector('.cube')
    
    const CUBE_TO_TOP = 'cubeToTop'
    const CUBE_TO_RIGHT = 'cubeToRight'
    const CUBE_TO_BOTTOM = 'cubeToBottom'
    const CUBE_TO_LEFT = 'cubeToLeft'

    const moveClasses = [CUBE_TO_TOP, CUBE_TO_RIGHT, CUBE_TO_BOTTOM, CUBE_TO_LEFT]

    for (controlArea of controlAreas) {
        controlArea.addEventListener('mouseover', e => {
            if (e.target.className == 'a-top') cube.classList.add('cubeToTop')
        })
    }
})();