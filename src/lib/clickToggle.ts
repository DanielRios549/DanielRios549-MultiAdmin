export function clickInside(element: HTMLElement) {
    function onClick() {
        element.nextElementSibling.classList.toggle('visible')
    }
    
    element.addEventListener('click', onClick)

    return {
        destroy() {
            element.removeEventListener('click', onClick)
        }
    }
}

export function clickOutside(element: HTMLElement) {
    function onClick(event: any) {
        if (!element.contains(event.target)) {
            element.nextElementSibling.classList.remove('visible')
        }
    }

    document.body.addEventListener('click', onClick)

    return {
        destroy() {
            document.body.removeEventListener('click', onClick)
        }
    }
}