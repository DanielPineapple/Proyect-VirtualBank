const home = document.getElementById("homeid");
var hero = document.getElementById("heropub");
const loguIn = document.getElementById("loguin");

loguIn.innerHTML+= `  <div class="loguin__cont">
                    <h1 class="loguin__text">Regístrate</h1>
                    <input type="text" name="usuario" value="" placeholder="Usuario" class="intro__usu"></input>
                    <input type="password" name="contraseña" value="" placeholder="Contraseña" class="intro__pass"></input>
                    <input type="submit" name="" value="Ingresar" class="button__text"></input>
                    </div>`