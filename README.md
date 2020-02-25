---
description: Anotações feitas durante as Aulas do Bootcamp - 13 horas
---

# Angular

### Bindings

{% hint style="info" %}
Os bindings em angular são as formas de como a **View** interage com **Model/\(Compoment\)**.
{% endhint %}



### One-way / two-way databindings

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

```text
hello.html

<input [{ngModel}]="variable" name="nome"></input>
{{name}} // "nome"
```

{% hint style="info" %}
esse exemplo apresenta uma forma de criar um two-way databind. Assim, o input será dinâmico e todo dado digitado no formulário sera inserido no elemento e poderá ser apresentado
{% endhint %}

## Course-Manager

Sistema de Gerenciamento de Cursos - CRUD

```
ng new course-manager
```

{% hint style="info" %}
Esse projeto tem como finalidade consultar, editar, alterar e deletar os cursos além de criar validações de formulário do curso
{% endhint %}

#### SRC/APP/courses

```text
course-list.component.ts

```

{% hint style="info" %}
Diretório correspondente aos componentes inerentes aos cursos
{% endhint %}



