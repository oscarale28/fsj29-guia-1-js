function o(){const e=document.createElement("form");e.id="exercise-1-form",e.innerHTML=`
      <div class="input-group">
        <label for="name">Ingresa tu edad</label>
        <input type="number" id="name" name="name" placeholder="Edad" required>
      </div>
      <button type="submit">Evaluar</button>
      <p id="result-text"></p>
    `;const a=e.querySelector("#name"),r=e.querySelector("#result-text");return a.addEventListener("input",()=>{r.textContent=""}),e.addEventListener("submit",n=>{n.preventDefault();const d=n.target,t=parseInt(d.elements.name.value,10);if(isNaN(t)||t<0){alert("Por favor, ingresa una edad válida.");return}const u=t<18?"Eres menor de edad.":"Eres mayor de edad.";r.textContent=u}),e}export{o as default};
