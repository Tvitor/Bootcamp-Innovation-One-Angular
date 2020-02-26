---
description: Anotações feitas durante as Aulas do Bootcamp - 13 horas
---

# Angular

### Bindings

> Bindings em angular são as formas de como a View interage com Model/\(Compoment\)

### One-way / two-way databindings

### one-way databinds

> &lt;input \[ngModel\]="variable" name="nome"&gt;&lt;/input&gt;

> nome

> \[ngModel\] é um one-way databinds quando o ngmodel fica somente entre colchetes, pois assim  permite somente exibir o  elemento de forma estática

### two-way databinds

```text
app.component.html
<input [{ngModel}]="variable" name="nome"></input>
{{name}} // "nome"
```

> esse exemplo apresenta uma forma de criar um two-way databind. Assim, o input será dinâmico e todo dado digitado no formulário sera inserido no elemento e poderá ser apresentado

```text
app.component.ts
export class AppListComponent {
    title = 'course-manager';

    name: String = 'Nome';
}
```

### \[Atributos HTML entre colchetes\]

```text
<img [src]="course.imageUrl">
```

> quando é necessário obter uma  informação de um objeto ou variável e passar essa informação para um atributo HTML,  é preciso colocar esse atributo em \[colchetes\] para que o  angular entenda  que será mesclado o valor da variável com o HTML.
>
> No exemplo acima: O atributo SRC receberá um endereço de uma imagem depositada em um diretório interno. Esse endereço está inserido em uma variável \(course.imageurl\). Por isso, é necessário colocar o SRC entre colchetes para que seja mesclado HTML e variável

### Implements OnChanges/OnInit

```text
import { Component, OnChanges } from '@angular/core';

@Component({
    selector:'app-star'
})

export class StarComponent implements OnChanges{


    
} 
```

```text
import { Component, OnInit } from '@angular/core';

@Component({
    selector:'app-star'
})

export class StarComponent implements OnInit{


    
} 
```

> Inicializar um componente com OnInit é fazer uma ação na inicialização, mas, ao consumir informações HTTP, será assíncrono. não garantindo assim que a  informação que estará passando estará disponível e carregada no HTTP. Para esses casos é  recomendado inicializar com OnChanges. Na medida q o valor for alterado no HTTP passará para o component e será identificado.

### @Input\(\)

```text
@input() rating;
```

> @Input\(\) Quando é necessário criar uma variável onde estará disponível fora do componente, permitindo  receber valor fora do componente, utilizamos a notação @Input\(\) Com isso estará  elegível para receber valor externo.

### Injeção de Dependência

```text
 Injectable({providein: 'root'})
```

> Injectable\({providein: 'root'}\)
>
> Tornar a classe elegível para injeção dependência e assim fazer com  que o providein   carregue  na root da aplicação. 
>
> quando carregar o model raiz\(app-model\) sera carregado também  essa classe de serviço

```text
@Injectable({
    providedIn: 'root'
})
export class CourseService {
    retrieveAll(): Course[] {
        return COURSES;
    }
}
```

> Um método precisa ser criado dentro do serviço para retornar os dados quando solicitado

> > Fundamental para a  organização da distribuição dos componentes

```text
let COURSES: Course[] = [
        {dados}
    ]
```

> **Não colocar códigos de alterações dentro do método para classes de serviço**

```text
export class CourseListComponent implements OnInit {

    public courses:Course[] = [] ;

    constructor(private courseService: CourseService){}
    ngOnInit(): void {
        this.courses = this.courseService.retrieveAll();
        
    }
    
}
```

> Course Service é injetado via injeção de dependência dentro do componente através do construtor
>
> Após o carregamento, inserir esses dados na variável do componente pelo ngOnInit



> Variáveis com \_  a frente significa que a variável será utilizada somente dentro do componente

```text
let _variavel: String = 'hello world'
```

### Filtrar dinamicamente 

> Utilizando  two-way Databinds onde sera inserido o valor que sera lincado ao componente e também onde receberá o valor que será filtrado

```text
course-list.component.ts

import { Course } from './course';
import { CourseService } from './course.service';
filteredCourses: Course[] = [];
    _courses:Course[] = [] ;
    _filterBy: String;
    
    constructor(private courseService: CourseService){}
    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this._courses = this.courseService.retrieveAll();
        this.filteredCourses = this._courses;
    }
    set filter(value:String){
        this._filterBy = value;
        this.filteredCourses = this._courses.filter((course:Course)=>course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1)
    }

    get filter(){
        return this._filterBy;
    }
```

> Para receber o evento de input do two-way Databinds é utilizado o a sinaxe set + funcao

```text
 set filter(valor: Course){
  _this.filterby = value;
 }
```

> a sintaxe get + funcao será para atualizar o input, retornando o resultado filtrado

> Para que o get retorne o valor filtrado, é preciso utilizar o filter ainda no set filter

```text
set filter(valor:Course)
this.filteredCourses = this._courses.filter((course:Course)=>course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1)
```

```text
ngOnInit()
_filteredCourses = this._courses;
```

> para a filtrar o que foi digitado sem alterar a variável que contem a lista de cursos, é necessário criar uma outra variável recebendo a lista de cursos.

```text
get filter(){
    return _this.filterby 
}

```

```text
course-list.component.html
<div class="form-group row">
    <label class="col-sm-2 col-form-label">Filter by:</label>
    <div class="col-sm-10">
        <input [(ngModel)]="filter" class="form-control">
    </div>
</div>
```

### Criando um Pipe Personalizado

> Primeiro é necessário criar uma arquivo em App , o pipe criado no exemplo será para substituir um caracter quando o mesmo aparecer em uma determinada variável

```text
replace.pipe.ts
```

```text
import {Pipe, PipeTransform} from '@angular/core';
@Pipe({
    name: 'replace'
})
export class ReplacePipe implements PipeTransform {

    transform(value: string, char: string, valueToReplace: string) {
        return value.replace(char, valueToReplace);
    }

}
```

> Em pipe, é criado um nome que será chamado para executar esse pipe
>
> Na classe exportada, é inserido uma implementação chamada PipeTransform, onde o angular entenderá que será executado uma ação de pipe
>
> Em transform, é passado os argumentos que serão digitados no html. O primeiro será a variável tratada.  o segundo, o caracter existente na variável, e o terceiro, o novo caracter que substituirá.
>
> No final, é retornado a variável com um replace, onde substitui o caracter antigo pelo novo.

```text
app.module.ts
declarations:
ReplacePipe
```

> é Necessário importar no app.module esse novo pipe

### Protegendo Rotas com Guards

>

## Course-Manager

#### Sistema de Gerenciamento de Cursos - Criar - Editar - Consultar - Deletar

```
ng new course-manager
```

> Esse projeto tem como finalidade consultar, editar, alterar e deletar os cursos além de criar validações de formulário do curso

### SRC/APP/courses

> Diretório correspondente aos componentes inerentes aos cursos

```text
course-list.component.html
```

```text
course.ts
```

> Classe de curso



