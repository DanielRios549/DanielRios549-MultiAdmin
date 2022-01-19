type Options = {
    scroll: number
    class: string
    item: string
}

/**
 * Add a scroll event when the item scrolled is not the body but one of its children
 *
 * @param element The element that will be scrolled. It should use the action
 * @param options `Options` to scroll works
 * @returns Nothing, just remove Event Listenner
 */

export function toggleClass(element: HTMLElement, options: Options) {
    const itemToToggle = document.querySelector(options.item)

    function onScroll() {
        const scrollTop = element.scrollTop

        if (scrollTop >= options.scroll) {
            itemToToggle.classList.add(options.class)
        }
        else {
            itemToToggle.classList.remove(options.class)
        }
    }

    element.addEventListener('scroll', onScroll)

    return {
        destroy() {
            element.removeEventListener('scroll', onScroll)
        }
    }
}
