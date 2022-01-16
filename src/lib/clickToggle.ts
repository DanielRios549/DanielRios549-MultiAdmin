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
 * Use `next` to use the one immediately after the `element`.
 *
 * @param save Specify if the element should be save to localStorage or not.
 * @param key The key to be saved to localStorage, only work if save is true.
 *
 * @returns Nothing, just remove Event Listenner.
 */

export function clickInside(element: HTMLElement, options?: Options) {
    // TODO: Fix Add class againg when close already contains.
    // This occurs when clickOutside is used in an element other than clickInside.

    function onClick() {
        let item: Element = element

        if (options.item) {
            if (options.item !== 'next') {
                item = document.querySelector(options.item)
            }
            else {
                item = element.nextElementSibling
            }
        }

        item.classList.add('visible')

        if ((options) && (options.save)) {
            const hasClass = item.classList.contains('visible')
            localStorage.setItem(options.key, hasClass.toString())
        }
    }

    element.addEventListener('click', onClick, true)

    return {
        destroy() {
            element.removeEventListener('click', onClick, true)
        }
    }
}
/**
 * Hides a visible element when click outside it.
 *
 * Use it together clickInside.
 *
 * @param element The element that uses the action, should not be passed.
 *
 * @returns Nothing, just remove Event Listenner.
 */

export function clickOutside(element: HTMLElement) {
    function onClick(event: any) {
        if ((!element.contains(event.target)) || (element.classList.contains('opened'))) {
            const item: Element = element

            item.classList.remove('visible')
        }
    }

    document.body.addEventListener('click', onClick, true)

    return {
        destroy() {
            document.body.removeEventListener('click', onClick, true)
        }
    }
}
