# grid

Gird jest atomem formatującym elementy DOM klasami nadającymi właściwości styli typu `grid`. RDS korzysta z podejścia `grid` zamiast `flex`.

Podstawową klasę jest `.grid`. Nadaje on właściwość `dispaly: grid;`. Następnie mogę być dodawane kolejne właściwości dla przestrzeni `gird`. Są one nadawne według zasady `grid-<skrót właściwości>-<wartość>`. W praktyce aby określić właściwość `align-items` z wartością `center` dla grida nadajmey klasę `grid-ai-center`. Zgodnie z tą reguły następujące prfixy oznaczają:

- `grid-ac-` - align-content
    - `grid-ac-center` - align-content: center;
    - `grid-ac-start` - align-content: start;
    - `grid-ac-end` - align-content: end;
    - `grid-ac-stretch` - align-content: stretch;
    - `grid-ac-space-around` - align-content: space-around;
    - `grid-ac-space-between` - align-content: space-between;
    - `grid-ac-space-evenly` - align-content: space-evenly;
- `grid-ai-` - align-items
    - `grid-ai-start` - align-items: start;
    - `grid-ai-end` - align-items: end;
    - `grid-ai-center` - align-items: center;
    - `grid-ai-stretch` - align-items: stretch;
- `grid-aj-` - justify-content
    - `grid-aj-center` - justify-content: center;
    - `grid-aj-start` - justify-content: start;
    - `grid-aj-end` - justify-content: end;
    - `grid-aj-stretch` - justify-content: stretch;
    - `grid-aj-spaje-around` - justify-content: spaje-around;
    - `grid-aj-spaje-between` - justify-content: spaje-between;
    - `grid-aj-spaje-evenly` - justify-content: spaje-evenly;
- `grid-ji-` - justify-items
    - `grid-ji-start` - justify-items: start;
    - `grid-ji-end` - justify-items: end;
    - `grid-ji-center` - justify-items: center;
    - `grid-ji-stretch` - justify-items: stretch;

Dodatkowo można zastosować dwie klasy określające czy chcemy mieć kolumny czy wiersze:

- `grid-columns` - grid-auto-flow: column;
- `grid-rows` - grid-auto-flow: row;


#### Przykład użycia

```html
<div class="grid grid-columns grid-ac-center">
    <div>pierwsza kolumna</div>
    <div>druga columna</div>
</div>
```