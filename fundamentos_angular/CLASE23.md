INSTALL BOOSTRAP


1. Crear un proyecto de 0
2. Crearemos un component hijo, donde listaremos Posts.
3. Crearemos una interface con los atributos de post.
4. Databinding pero objeto heroe en el html, (a esto agregaremos en ngModel)
5. Usaremos el pipe uppercase

6. update heroe
7. Usaremos AngularForms para hacer nuestro formularios de posts.


```html
<h2>{{hero.name | uppercase}} Details</h2>
<div><span>id: </span>{{hero.id}}</div>
<div>
  <label>name:
    <input [(ngModel)]="hero.name" placeholder="name">
  </label>
</div>
```
8. Listaremos una lista de posts. en otro archivo mock-heroes.
9. Listaremos nuestros heroes.
10. Agregaremos el evento click para que cuendo el usuario le de click ejecute un evento.
11. Cuando selecciona agrega al post a un atributo que sea selectedPost, y este será mostrado en el pequeño formuario.
12. Poner el *ngIf, en el formulario.
13. Agregaremo el atributo [class.selected] para agregar un estilo al atributo seleccioando.
```html
<li *ngFor="let hero of heroes"
  [class.selected]="hero === selectedHero"
  (click)="onSelect(hero)">
  <span class="badge">{{hero.id}}</span> {{hero.name}}
</li>
```
14. Crearmoe otro componente getalle.
15. igresamos el selector del component al principal y el insertamos el selectPost como atributo. property binding.
```html
<app-hero-detail [hero]="selectedHero"></app-hero-detail>
```
Hacemos uso del @Input()
16. Crearemos servicios un servicos postService.
17. Creamos un metodo getPosts(), y ahi le agremos la lista de posts.
18. En el componentes creamos un metodo getPosts(). y le agregamos a ngOnInit().
19. Comvertimos en una respuesta Observable.
```ts
getHeroes(): Observable<Hero[]> {
  return of(HEROES);
}
```
20. Creamos otro components mensajes como un servicio.
21. 
```ts
import { Injectable } from '@angular/core';
 
@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: string[] = [];
 
  add(message: string) {
    this.messages.push(message);
  }
 
  clear() {
    this.messages = [];
  }
}

////////////////////// SERVICIO
getHeroes(): Observable<Hero[]> {
  // TODO: send the message _after_ fetching the heroes
  this.messageService.add('HeroService: fetched heroes');
  return of(HEROES);
}


```

```html
<div *ngIf="messageService.messages.length">

  <h2>Messages</h2>
  <button class="clear"
          (click)="messageService.clear()">clear</button>
  <div *ngFor='let message of messageService.messages'> {{message}} </div>

</div>
```

22. El routing es darle click en posts listquea almodulo de posts.
23. Cuando el usuario le da click en un post. en la ruta debe agregar un parametro.
```html
<a *ngFor="let hero of heroes" class="col-1-4"
    routerLink="/detail/{{hero.id}}">
  <div class="module hero">
    <h4>{{hero.name}}</h4>
  </div>
</a>
```
24. Hacemos un metodo.

```ts
goBack(): void {
  this.location.back();
}
```

25. Ahora es http.
26. pipes, http, observables.
