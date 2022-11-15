let btnsDelete = document.getElementsByClassName('bi bi-trash-fill');

for (let i=0; i < btnsDelete.length; i++) {
    btnsDelete[i].addEventListener('click',()=>{
        let padreDelRowAEliminar = btnsDelete[i].parentElement.parentElement.parentElement.parentElement
        let rowAEliminar = btnsDelete[i].parentElement.parentElement.parentElement
        padreDelRowAEliminar.removeChild(rowAEliminar)
        alert('Usuario eliminado con èxito!')
    })
}