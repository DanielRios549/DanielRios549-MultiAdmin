import { browser } from '$app/env'

function listInfo(list: HTMLElement) {
    const left = browser && parseInt(list.style.left)
	const width = browser && list.scrollWidth

    return {left, width}
}

/**
 * Scroll an element to right
 * 
 * @param element The element that uses the action, should not be passed.
 * @param itemToScroll The element that needs to be scrolled, pass a CSS Selector.
 * @returns Nothing, just remove Event Listenner
 */

export function clickNext(element: HTMLElement, itemToScroll: string) {
    const list = browser && document.querySelector<HTMLElement>(itemToScroll)

    function onClick() {
        const {left, width} = listInfo(list)

		if (Math.abs(left) <= width - 900) {
			list.style.left = `${left - 300}px`
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
 * Scroll an element to left
 * 
 * @param element The element that uses the action, should not be passed.
 * @param itemToScroll The element that needs to be scrolled, pass a CSS Selector.
 * @returns Nothing, just remove Event Listenner
 */

export function clickPrev(element: HTMLElement, itemToScroll: string) {
    const list = browser && document.querySelector<HTMLElement>(itemToScroll)

    function onClick() {
        const {left} = listInfo(list)
    
        if (left < 0) {
			list.style.left = `${left + 300}px`
		}
    }

    element.addEventListener('click', onClick)

    return {
        destroy() {
            element.removeEventListener('click', onClick)
        }
    }
}