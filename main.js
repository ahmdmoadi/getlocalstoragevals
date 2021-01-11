for(i=0;i<((Object.getOwnPropertyNames(localStorage)).length);i++) {
    cont.innerHTML += (`<span id="lsitem">${localStorage.getItem((Object.getOwnPropertyNames(localStorage)[i]))}</span><br><br>`)
  }