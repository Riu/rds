# container

Klasa `.container` jest uniwersalną klasę dla obsługi reposnsywności w i całości oparta jest na `mixins/breakpoint`. Użycie klasy `.container-fluid` daje zawsze _100%_ szerokości elementu. 

Element posiadający klasę `.container` jest elementem obudowującym, tworzącym centralną kolumnę.

#### Przykład użycia

```html
<main class="container">
{% include "partials/header.html" %}
{% block content %}{% endblock %}
</main>
```