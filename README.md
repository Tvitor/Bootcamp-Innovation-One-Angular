---
description: Anotações feitas durante as Aulas do Bootcamp - 13 horas
---

# Angular

### Bindings

{% hint style="info" %}
Bindings em angular são as formas de como a **View** interage com **Model/\(Compoment\)**.
{% endhint %}



#### One-way / two-way databindings

> #### one-way databinds

{% code title="hello.html" %}
```http
<input [ngModel]="variable" name="nome"></input>
{{name}} // "nome"

```
{% endcode %}

{% hint style="info" %}
\[ngModel\] é um one-way databinds quando o ngmodel fica somente entre colchetes, pois assim  permite somente exibir o  elemento de forma estática
{% endhint %}

> #### two-way databinds

{% code title="app.component.html" %}
```text
<input [{ngModel}]="variable" name="nome"></input>
{{name}} // "nome"
```
{% endcode %}

{% hint style="info" %}
esse exemplo apresenta uma forma de criar um two-way databind. Assim, o input será dinâmico e todo dado digitado no formulário sera inserido no elemento e poderá ser apresentado
{% endhint %}

{% code title="app.component.ts" %}
```text
export class AppListComponent {
    title = 'course-manager';

    name: String = 'Nome';
}
```
{% endcode %}

#### \[Atributos HTML entre colchetes\]

```text
<img [src]="course.imageUrl">
```

{% hint style="info" %}
quando é necessário obter uma  informação de um objeto ou variável e passar essa informação para um atributo HTML,  é preciso colocar esse atributo em \[colchetes\] para que o  angular entenda  que será mesclado o valor da variável com o HTML.

No exemplo acima: O atributo SRC receberá um endereço de uma imagem depositada em um diretório interno. Esse endereço está inserido em uma variável \(course.imageurl\). Por isso, é necessário colocar o SRC entre colchetes para que seja mesclado HTML e variável
{% endhint %}

#### Implements OnChanges/OnInit

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

{% hint style="info" %}
Inicializar um componente com OnInit é fazer uma ação na inicialização, mas, ao consumir informações HTTP, será assíncrono. não garantindo assim que a  informação que estará passando estará disponível e carregada no HTTP. Para esses casos é  recomendado inicializar com OnChanges. Na medida q o valor for alterado no HTTP passará para o component e será identificado.
{% endhint %}

#### @Input\(\)

```text
@input() rating;
```

{% hint style="info" %}
@Input\(\) Quando é necessário criar uma variável onde estará disponível fora do componente, permitindo  receber valor fora do componente, utilizamos a notação @Input\(\) Com isso estará  elegível para receber valor externo.
{% endhint %}

## Course-Manager

Sistema de Gerenciamento de Cursos - Criar - Editar - Consultar - Deletar

{% code title="Terminal" %}
=======
Esse projeto tem como finalidade consultar, editar, alterar e deletar os cursos além de criar validações de formulário do curso
~~~
teste codigo
~~~
>>>>>>> 48d4137087a5fc1baf2de1dd155439cda1f3b65c
```
ng new course-manager
```
{% endcode %}

{% hint style="info" %}
Esse projeto tem como finalidade consultar, editar, alterar e deletar os cursos além de criar validações de formulário do curso
{% endhint %}

#### SRC/APP/courses

{% hint style="info" %}
Diretório correspondente aos componentes inerentes aos cursos
{% endhint %}

{% code title="course-list.component.ts" %}
```text

```
{% endcode %}

```text
course-list.component.html

```

{% code title="course.ts" %}
```text

```
{% endcode %}

{% hint style="info" %}
Classe de curso
{% endhint %}



