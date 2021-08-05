import { concatAll, groupBy, map, mergeMap, of, Subject, takeUntil, toArray, zip } from "rxjs";
import { html, render } from "lit";
import { toDos$ } from './to-do.service';
import "./app.component.scss";

class AppComponent extends HTMLElement {
    private readonly _destroyed$: Subject<void> = new Subject();

    connectedCallback() {    
        toDos$
        .pipe(
            takeUntil(this._destroyed$),
            concatAll(),
            groupBy(task => task.type, task => task),
            mergeMap(group => zip(of(group.key), group.pipe(toArray()))),
            toArray(),
            map(tuples => {
                render(html`
                    <h1>To Do's</h1>

                    ${tuples.map(tuple => {
                        return html`
                        <h2>${tuple[0]}</h2>
                        <ul>
                            ${tuple[1].map(toDo => html`<li>${toDo.name}</li>`)}
                        </ul>                                               `
                    })}

                    `, this)
            })
        ).subscribe();        
  
          
    }
    
    disconnectedCallback() {
        this._destroyed$.next();
        this._destroyed$.complete();
    }
}

window.customElements.define('lit-app', AppComponent);
