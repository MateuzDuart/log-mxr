const body = document.querySelector('body')

fetch('./log.json').then(response => response.json())
.then(data => {

    Object.entries(data).map((dado) => {
        console.log(dado)
        const div = document.createElement('div') 
        const h2 = document.createElement('h2')
        h2.innerHTML = `${dado[0]}`
        div.appendChild(h2)
        
        Object.entries(dado[1]).map(([chave, valor]) => {
            const p = document.createElement('p')
            p.innerHTML = `${chave}: ${valor}`
            div.appendChild(p)
        })

        body.appendChild(div)
        
    })
    
})
.catch(error => {
  console.error('Erro:', error);
});