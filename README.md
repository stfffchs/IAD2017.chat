# IAD2017.Chat

## Ausfühurng
* [Node installieren](https://nodejs.org/en/download/)
* in Verzeichnis wechseln `cd ...`
* `npm install` → Installiert die benötigten Module
* `npm run start` → startet für die Entwicklung
* `npm run build` → erzeugt die endgültige Version

## Bilder für Icons
Um Icons einzufügen kann im CSS mit `background-image` gearbeitet werden.
```css
.MyClassDefinition {
  background-image: url('/assets/icon/test.svg');
}
```
Diese Dateien müssen dann im folder `public` abgelegt werden also zum Beispiel `public/assets/icon/test.svg`


## BEM-CSS
CSS-Klassen sind nach [BEM](https://cssguidelin.es/#bem-like-naming) benannt.
* Elemente sind durch zwei Unterstrichen (`__`) abgetrennt
* Modifikatoren sind durch zwei Bindestriche (`--`) abgetrennt
