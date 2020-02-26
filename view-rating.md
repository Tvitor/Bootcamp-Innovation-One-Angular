---
description: Criando view de rating exibido por estrelas
---

# View Rating

## biblioteca font-awesome

```
$ npm install font-awesome
```

![](.gitbook/assets/result.png)

{% code title="star.component.ts" %}
```bash
import { Component, OnChanges, Input } from '@angular/core';

@Component({
    selector:'app-star',
    templateUrl: 'star.component.html',
    styleUrls: ['star.component.css']
})

export class StarComponent implements OnChanges{

    @Input()
    rating: number = 0;
    starWidth: number;

    ngOnChanges():void{

        this.starWidth = this.rating * 74 / 5
    }
    
} 
```
{% endcode %}

{% code title="star.component.html" %}
```bash

<div class="crop" [style.width.px]="starWidth" [title]="rating">
    <div style="width: 100px">
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
    </div>
</div>
```
{% endcode %}

{% code title="star.component.css" %}
```bash
.crop{
    overflow: hidden;
}
```
{% endcode %}

{% code title="coursemock.ts" %}
```bash
export const CourseMock = [
    
        {
            id: 1,
            imageUrl: '../../assets/images/forms.png',
            name: 'Angular: Forms',
            price: 99.99,
            cod: 'XPS-8796',
            duration: 120,
            rating: 4.5,
            releaseDate: 'December, 2, 2019'
        },
        {
            id: 2,
            imageUrl: '../../assets/images/http.png',
            name: 'Angular: HTTP',
            price: 5.99,
            cod: 'LKL-8796',
            duration: 50,
            rating: 3.0,
            releaseDate: 'December, 2, 2019'
        }

]
```
{% endcode %}



