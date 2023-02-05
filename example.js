const blocks=document.querySelectorAll('.block')

for (const block of blocks) {
    block.addEventListener('click', ()=> {
        clearall()
        block.classList.add('active')
    })
}

function clearall() {
    blocks.forEach((block)=>{
        block.classList.remove('active')
    })
}