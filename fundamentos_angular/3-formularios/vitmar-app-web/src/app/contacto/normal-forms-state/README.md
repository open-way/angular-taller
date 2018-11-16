# Estado de los objetos
Seguiremos utlizando el formulario anterior.

Vamos a utilizar una de las variables locales que hemos declarado *Nombre*.
En vez de mostrar value, vamos a mostrar `className`.
- Esta propiedad nos nuestra las clases asignadas a ese objeto

Clases que asigna
- ng-untouched: No ha sido visitado o tocado el objeto.
- ng-touched: Ha sido visitado o tocado el objeto(Funciona cuando salgas del objeto)
- ng-pristine: El objeto no a sido modificado.
- ng-dirty: El objeto ha sido modificado.
- ng-valid: El objeto es valido

Queremos utilizar las propiedades `valid` e `invalid` en la platilla html.
Modificaremos nuestra valiable local 
```html
<input #nombre="ngModel" />
```
Esto permitira que podamos acceder a la propiedades que antes se habian agregado como clases.
Colocaremos una validación. `required` para ver valid e invalid.
```html
 <div *ngIf="!name.valid" class="alert alert-danger" role="alert">
                        * required
                    </div>
```
Ahora si podemos utilizar las propiedades, pero quitaremos _ng-_

Agregaremos una validación
`nombre` Le decimos que este campo sea requerido.
