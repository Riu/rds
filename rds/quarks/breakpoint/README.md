# breakpoint

Mixin `breakpoint` jest najważniejszą miksturą. Służy ona do definiowania dla jakiej rozdzielczości kod zostanie wykonany. 

``` scss
// Przykładowe wskazanie przestrzenii nazw mikstury

@use '~rds/quarks/breakpoint/index';

@include breakpoint.breakpoint(breakpointname) {
    /* Styles */
}
```

Wyróżniamy następujące breakpointy:

- `xs` - dla mobilnego ekranu (domyślny);
- `sm` - małe urządzenia (położenie landscape urządzenia mobilnego, **576px** i więcej);
- `md` - średnie urządzanie (tablety, **768px** i więcej);
- `lg` - duże ekrany (laptopy, **992px** i więcej);
- `xl` - bardzo duże ekrany (**1200px** i więcej);
- `xxl` - największe ekrany (**1400px** i więcej);

Istotna w zastosowaniu jest zasada `mobile first` - wszystko co piszemy bez _wkładania_ w `media query` jest widoczne dla najmniejszej możliwej rozdzielczości i następnie jest ewentulanie nadpisywane. Ważna jest kolejność wkonywania mikstury dla kolejnych `breakpointów`. Przykład:

``` scss
// Wskazanie przestrzenii nazw mikstury

@use '../../quarks/breakpoint/index';

/* Tutaj jest jest jakiś kod dla mobile */

@include breakpoint(sm) {
    /* Kod dla tabletów wertykalnie */
}
@include breakpoint(md) {
    /* Kod dla tabletów */
}
@include breakpoint(lg) {
    /* Kod dla laptopów */
}
```