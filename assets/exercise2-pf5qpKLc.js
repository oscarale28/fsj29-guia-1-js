function p(){const e=document.createElement("form");e.id="exercise-2-form",e.innerHTML=`
    <div class="input-group">
        <label for="name">Nombre</label>
        <input type="text" id="name" name="name" placeholder="Nombre del estudiante" required>
      </div>
     <div class="input-group">
      <label for="carnet">Carnet</label>
      <input type="text" id="carnet" name="carnet" placeholder="Carnet del estudiante" required>
    </div>
    <hr/>
    <div class="input-group">
      <label for="test">Examen (20%)</label>
      <input type="number" id="test" name="test" placeholder="Nota de examen" min="0" max="10" step="0.01" required>
    </div>
    <div class="input-group">
      <label for="homeworks">Tareas (40%)</label>
      <input type="number" id="homeworks" name="homeworks" placeholder="Nota promedio de tareas" min="0" max="10" step="0.01" required>
    </div>
    <div class="input-group">
      <label for="attendance">Asistencia (10%)</label>
      <input type="number" id="attendance" name="attendance" placeholder="Nota de asistencia" min="0" max="10" step="0.01" required>
    </div>
    <div class="input-group">
      <label for="research">Investigación (30%)</label>
      <input type="number" id="research" name="research" placeholder="Nota de investigación" min="0" max="10" step="0.01" required>
    </div>
    <button type="submit">Calcular nota final</button>
    <div id="results"></div>
  `;const r=e.querySelectorAll("input"),a=e.querySelector("#results");return a.style.textAlign="left",r.forEach(n=>{n.addEventListener("input",()=>{a.innerHTML=""})}),e.addEventListener("submit",n=>{n.preventDefault();const t=new FormData(e),i=t.get("name"),s=t.get("carnet"),o=parseFloat(t.get("test")),l=parseFloat(t.get("homeworks")),d=parseFloat(t.get("attendance")),c=parseFloat(t.get("research")),u=o*.2+l*.4+d*.1+c*.3;a.innerHTML=`
      <h4>Estudiante: ${i} (carnet ${s})</h4>
      <p>Nota final: ${u.toFixed(2)}</p>
    `}),e}export{p as default};
