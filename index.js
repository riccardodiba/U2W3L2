     
  
        const localStorageKey = 'notepad-memory'
        const textName = document.getElementById('nome')
        const saveButton = document.getElementById("salva")
        const resetButton =document.getElementById("rimuovi")
           
        const save = () => {
            const content = textName.value
            localStorage.setItem(localStorageKey, content)
        }
        const reset = () => {

  if (window.confirm('ATTENZIONE! vuoi eliminare?')) {

    textName.value = ''
    localStorage.removeItem(localStorageKey) 
  }
}

saveButton.addEventListener('click', save)
resetButton.addEventListener('click', reset)



    
  

        
       const update = () => {
        
            if (sessionStorage.getItem('contatore')) {
    
                let contatore = parseInt(sessionStorage.getItem('contatore'));
                
                contatore++;
                
                sessionStorage.setItem('contatore', contatore);
        
                document.getElementById('contatore').innerText = contatore;
            } else {
                
                sessionStorage.setItem('contatore', 1);
                document.getElementById('contatore').innerText = '1';
            }
        }
        setInterval(update, 1000);
        update();
   

    