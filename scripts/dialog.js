const initializeDetailButtonEvents = () => {
    // CAN'T TOUCH THIS - START
    const allCloseButtons = document.querySelectorAll(".button--close")

    for (const btn of allCloseButtons) {
        btn.addEventListener("click", theEvent => {
                const dialogElement = theEvent.target.parentNode
                dialogElement.close()
            }
        )
    }
    // CAN'T TOUCH THIS - END


    // You will be writing code below this line

    document.querySelector("#button--angela").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--angela")
            theDialog.showModal()
        }
    )

    document.querySelector("#button--earl").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--earl")
            theDialog.showModal()
        }
    )

    document.querySelector("#button--spike").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--spike")
            theDialog.showModal()
        }
    )

    document.querySelector("#button--phineas").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--phineas")
            theDialog.showModal()
        }
    )

    document.querySelector("#button--seabiscuit").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--seabiscuit")
            theDialog.showModal()
        }
    )

}

export default initializeDetailButtonEvents