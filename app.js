// traendo a los elementos html que voy a manipular en mi js 
const input = document.querySelector('input')
const buton= document.querySelector('.buton')
const lista = document.querySelector('#listTask')
const empty = document.querySelector('.vacio')

//funcionalidad del boton principal 
buton.addEventListener('click', e => {
      e.preventDefault()
      const text =input.value 

      if ( text !== " ") {
            const li = document.createElement('li')
            const p = document.createElement('p')
            p.className = "p-task"
            p.textContent = text 

            li.appendChild(p)  // el parrafo agrego al "li" 
            li.appendChild(deleteButon()) // agregar la funcionalidad al boton secundario 
            lista.appendChild(li) 

            input.value =" "
            empty.style.display ="none"
      }
})

//funcionalidad del boton borrar que va con cada tarea 
function deleteButon() {
      //creacion del boton que ira a lado de p
      const botondelet = document.createElement('button')
      botondelet.textContent = "X"
      botondelet.className = "btn-delete"
      //creacion de la funcionalidad al boton 
      botondelet.addEventListener('click', e => {
            const item = e.target.parentElement 
            lista.removeChild(item)

            //revisar si no hay elementos para que vuelva a aparecer el mensaje final 
            const items = document.querySelectorAll('li')
            if (items.length === 0) { 
                  empty.style.display = "block"
            }
      })
      return botondelet
}

