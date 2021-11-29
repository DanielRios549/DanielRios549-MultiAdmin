/**
 * Toggle visible and hidden an element.
 * 
 * The element to toggle should be exactly after the one that uses the action.
 *
 * @param element The element that uses the action, should not be passed.
 * @returns Nothing, just remove Event Listenner
 */

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
/**
 * Hides a visible element when click outside it.
 * 
 * Use it together clickInside.
 * 
 * @param element The element that uses the action, should not be passed.
 * @returns Nothing, just remove Event Listenner
 */

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