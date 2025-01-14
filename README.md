# Podczas pisania użyty został formatter kodu prietier

# Instrukcja uruchomienia aplikacji

## Wymagania wstępne

Aby uruchomić aplikację, musisz mieć zainstalowane:

- [Node.js](https://nodejs.org/) (wraz z npm)
- [MySQL](https://www.mysql.com/)

## Krok 1: Uruchomienie backendu

1. Sklonuj repozytorium lub pobierz pliki projektu na swój komputer.
2. Przejdź do folderu, w którym znajduje się backend (plik `server.js`).
3. Zainstaluj zależności, uruchamiając polecenie:

   ``npm install express cors bcrypt mysql2 react-router-dom @tsparticles/all @tsparticles/react react-icons``

   >>
      * express – framework do tworzenia aplikacji webowych
      * mysql2 – biblioteka do połączenia z bazą danych MySQL
      * bcrypt – do haszowania haseł
      * jsonwebtoken – do obsługi tokenów JWT token jest zapisywany (np. w localStorage) i używany do uwierzytelniania przy każdym kolejnym żądaniu, np. podczas pobierania produktów.
      * cors – do obsługi polityki CORS
      * react-router do przekierowywania
      * tsparticles do partikli na tło
      * ract-icons biblioteka z ikonami 

# Dokumentacja pliku ProductList.js 

# Dokumentacja komponentu `ProductList`

Komponent `ProductList` odpowiada za wyświetlanie listy produktów, dodawanie/usuwać ich z koszyka oraz realizację zamówienia. Dodatkowo, pozwala na sortowanie produktów według różnych kryteriów oraz przechowuje historię zakupów.

## Opis funkcji

### Zmienna stanu:
- `products`: lista produktów pobrana z backendu.
- `sortCriteria`: kryterium sortowania (po nazwie, cenie lub typie jedzenia).
- `cart`: produkty dodane do koszyka.
- `cartHistory`: historia wykonanych zakupów.

### Funkcje:
- `fetchProducts()`: pobiera dane produktów z backendu i aktualizuje stan `products`.
- `sortProducts()`: sortuje produkty według wybranego kryterium.
- `getTotalPrice()`: oblicza łączną cenę produktów w koszyku.
- `handleCheckout()`: realizuje zamówienie, zapisuje historię koszyka i opróżnia koszyk.
- `addToCart()`: dodaje produkt do koszyka.
- `removeFromCart()`: usuwa produkt z koszyka.

## Funkcjonalności

### 1. Wyświetlanie produktów
Produkty są pobierane z backendu i wyświetlane w formie kart. Każdy produkt zawiera:
- nazwę,
- cenę,
- typ jedzenia,
- opis,
- przycisk do dodania do koszyka.

### 2. Sortowanie produktów
Produkty można sortować po:
- **Nazwie** (alfabetycznie),
- **Cenie** (rosnąco),
- **Typie jedzenia** (alfabetycznie).

### 3. Koszyk
Koszyk wyświetla produkty dodane przez użytkownika. Użytkownik może:
- Dodać produkty do koszyka,
- Usunąć produkty z koszyka,
- Sprawdzić łączną cenę w koszyku,
- Dokonać zakupu.

### 4. Zamówienie i historia
Po kliknięciu przycisku "Zamów":
- Jeśli koszyk jest pusty, wyświetlane jest powiadomienie,
- Jeśli koszyk zawiera produkty, jest zapisany w historii zakupów, a koszyk zostaje opróżniony.

