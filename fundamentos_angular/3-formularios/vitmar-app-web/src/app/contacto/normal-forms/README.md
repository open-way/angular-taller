## Variables Locales
*Caracteristicas*
- Son variables que se pueden utilizar dentro del template o la plantilla.
- Pueden hacer referencia a cualquier objeto de un formulario en el template.
- Solo están disponibles en el template. No se pueden utilizar en la clase del componente
- Para asignar una variable, se debe colocar el símbolo de # y el nombre de la variable.

## Un objeto
Creamos la varible local `#codigo` e interpolamos `{{ cadigo.value }}`.
Debemos convertir la variable en un objeto, utilizamos la directiva de Angular `ngModel`, OJO: La directiva ngModel trabaja
con la propiedad `name`. Ahora si la etiketa codigo es un objeto de angular.

```html
<div class="form-group">
    <label for="codigo" class="col-form-label col-form-label-sm">Codigo:</label>
    <input type="text" id="codigo" class="form-control form-control-sm" name="codigo" #codigo ngModel>
</div>
<code class="row"><strong>Codigo: {{ codigo.value | json }}</strong></code>
```

## Grupo de objetos.
Aqui debemos utilizar la directiva `ngModelGroup`, en este caso lo llamaremos `contacto`.
Para visualizarlo como una varibles local, el procesdimiento es similar a los anterios. 
Utilizamos el `#` lo llamamos `#attrContacto`  y le adignamos la directiva `ngModelGroup`.


```html
<div ngModelGroup="contacto" #attrContacto="ngModelGroup">
    <div class="form-group">
        <label for="telefono">Telefono:</label>
        <input type="text" id="telefono" class="form-control form-control-sm" name="telefono" #telefono
            ngModel>
    </div>
    <div class="form-group">
        <label for="email">Email:</label>
        <input type="text" id="email" class="form-control form-control-sm" name="email" #attrEmail
            ngModel>
    </div>
</div>
<code class="row"><strong>Contacto: {{ attrContacto.value | json }}</strong></code>

```
**TIP** Utilizamos el pipe `json` del módulo common de Angular.

## Todo el formulario
Modificamos la etiqueta form. Utilizaremos la directiva `ngForm` y le asignaremos a la varieble `form`
```html
<form #form="ngForm">

</form>
<code class="row"><strong>Formulario: {{ form.value | json }}</strong></code>
```
#NEXT

# Estado de los objetos
Seguiremos utlizando el formulario anterior.
