### Wstęp

Riupress Design System to framework html/css napisany w konwencji Atomic Design i wykorzystujacy w nowoczesny sposób preprocesor Sass. Składa się on z następujcych elementów:

- quarks - variables, mixins, utils - pliki resetujące/podstawowe
- atoms - pojedyncze elementy UI;
- molecules - komponenty UI wykorzystujace elementy;
- organisms - zestawy komponentów;
- templates - prototypy szablonów strony;
- pages - widok strony z danymi zamockowanymi lub ustawionymi statycznie;

#### [Quarks](/docs/quarks)

Kwarki to elementy resetujace lub mające wpływ na wartości właściwości w klasach atomów. Do kwarków będzie należeć np paleta kolorów, czy paleta zmiennych dla typografii, odległości, formatowania tekstu, etc. Kwarki od pozostałych elemntów odróżnia przede wszystkim fakt, iż nie posiadają one swojej reprezentacji w postaci przestrzeni nazw. Innymi słowy nie bedzie elementu `colors` a wiec np komponenetu typu `<colors />`.

#### [Atoms](/docs/atoms)

To pojedyncze niezależne komponenety z których budowane są molekuły. Atomy posiadają swoją przestrzeń nazw. Każdy atom jest w aplikacji (niezależnie od frameworka) zaprojektowany jako folder zawierający informacje o atomie. Np atom `button` będzie w aplikacji Angular w folderze `app/atoms/button/`, a w kodzie `<atom-button />`. 

_Słowo atom można zastąpić prefiksem np `<rds-button />`, ale należy pamiętać, że oprócz atomów są jeszcze molekuły i nazewnictwo musi być uniklane_.

#### [Molecules](/docs/molecules)

To komponenety zależne lub wykorzystujace atomy. Z molekuł składa się organizmy. Molekuły tak jak atomy posiadają przestrzeń nazw. 

#### [Organisms](/docs/organisms)

To zestawy molekuł i atomów - oczywiście również posiadające swoją przestrzeń nazw.

#### [Templates](/docs/templates)

Szablony są prezentacją - makietą składającą się z organizmów i molekuł, w której nie ma prawdziwych danych, a tzw. zaślepki - placeholdery, które wcześniej zostały umieszczone w składowych molekuł czy organizmów. Są one jednak szablonami pokazującymi jak ma wyglądać wybrana strona. Szablony mogą do siebie linkować przez co imitują przepływy działań użytkownika z plikacji. Szablony posiadają swoj routing.

#### [Pages](/docs/pages)

Są implementacją szablonów ze zmockowaną treścią, a więc wyglądają tak jak ma potencjalnie wyglądać efekt końcowy. 