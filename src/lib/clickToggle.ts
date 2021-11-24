export function clickInside(state: boolean) {
    let newState = false

    if (state === false) {
        newState = true
    }
    return newState
}

export function clickOutside(element: HTMLElement, callback: () => void) {
    function onClick(event: any) {
        if (!element.contains(event.target)) {
            callback()
        }
    }

    document.body.addEventListener('click', onClick, true)

    return {
        destroy() {
            document.body.removeEventListener('click', onClick, true)
        }
    }
}