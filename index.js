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

            for (let moveClass of moveClasses) {
                cube.classList.remove(moveClass);
            }

            switch (e.target.className) {
                case 'a-top':
                    cube.classList.add('cubeToTop');
                    break
                case 'a-right':
                    cube.classList.add('cubeToRight');
                    break
                case 'a-bottom':
                    cube.classList.add('cubeToBottom');
                    break
                case 'a-left':
                    cube.classList.add('cubeToLeft');
                    break
            }
        })
    }
})();