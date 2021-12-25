type Options = {
    item?: string
    save?: boolean
    key?: string
}

/**
 * Toggle visible and hidden an element.
 * 
 * The element to toggle should be exactly after the one that uses the action.
 *
 * @param element The element that uses the action, should not be passed.
 * @param item The item that will be toggled.
 * If not passed, the item will be the one immediately after the `element`.
 * 
 * @param save Specify if the element should be save to localStorage or not.
 * @param key The key to be saved to localStorage, only work if save is true.
 *
 * @returns Nothing, just remove Event Listenner.
 */

export function clickInside(element: HTMLElement, options?: Options) {
    function onClick() {
        let item: Element = null

        if ((options) && (options.item !== undefined)) {
            item = document.querySelector(options.item)
        }
        else {
            item = element.nextElementSibling
        }

        item.classList.toggle('visible')

        if ((options) && (options.save)) {
            const hasClass = item.classList.contains('visible')
            localStorage.setItem(options.key, hasClass.toString())
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
 * @param item The item that will be toggled.
 * If not passed, the item will be the one immediately after the `element`.
 * 
 * @param save Specify if the element should be save to localStorage or not.
 * @param key The key to be saved to localStorage, only work if save is true.
 * 
 * @returns Nothing, just remove Event Listenner.
 */

export function clickOutside(element: HTMLElement, options?: Options) {
    function onClick(event: any) {
        if (!element.contains(event.target)) {
            let item: Element = null

            if ((options) && (options.item !== undefined)) {
                item = document.querySelector(options.item)
            }
            else {
                item = element.nextElementSibling
            }

            item.classList.remove('visible')

            if ((options) && (options.save)) {
                const hasClass = item.classList.contains('visible')
                localStorage.setItem(options.key, hasClass.toString())
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