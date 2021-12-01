/**
 * Toggle visible and hidden an element.
 * 
 * The element to toggle should be exactly after the one that uses the action.
 *
 * @param element The element that uses the action, should not be passed.
 * @param itemToToggle The item that will be toggled.
 * If not passed, the item will be the one immediately after the `element`.
 *
 * @returns Nothing, just remove Event Listenner
 */

export function clickInside(element: HTMLElement, itemToToggle: string = undefined) {
    function onClick() {
        if (itemToToggle !== undefined) {
            const item = document.querySelector(itemToToggle)

            item.classList.toggle('visible')
        }
        else {
            element.nextElementSibling.classList.toggle('visible')
        }
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
 * @param itemToToggle The item that will be toggled.
 * If not passed, the item will be the one immediately after the `element`.
 * @returns Nothing, just remove Event Listenner
 */

export function clickOutside(element: HTMLElement, itemToToggle: string = undefined) {
    function onClick(event: any) {
        if (!element.contains(event.target)) {
            if (itemToToggle !== undefined) {
                const item = document.querySelector(itemToToggle)
    
                item.classList.toggle('visible')
            }
            else {
                element.nextElementSibling.classList.remove('visible')
            }
        }
    }

    document.body.addEventListener('click', onClick)

    return {
        destroy() {
            document.body.removeEventListener('click', onClick)
        }
    }
}