import { browser } from '$app/env'

function listInfo(list: HTMLElement) {
    const left = browser && parseInt(list.style.left)
	const width = browser && list.scrollWidth

    return {left, width}
}

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