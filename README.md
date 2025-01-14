# Podczas pisania użyty został formatter kodu prietier

# Instrukcja uruchomienia aplikacji

## Wymagania wstępne

Aby uruchomić aplikację, musisz mieć zainstalowane:

- [Node.js](https://nodejs.org/) (wraz z npm)
- [MySQL](https://www.mysql.com/)
- [XAMPP](https://www.apachefriends.org/pl/index.htm)

## Krok 1: Uruchomienie serwera
1.Odpal xampp i uruchom MySQL
2.Stwórz baze danych i zaimportój plik szkolny_sklepik.sql

## Krok 2: Uruchomienie plików w folderze 


1. Przejdź do folderu, w którym znajduje się backend (plik `server.js`).
2. Zainstaluj zależności, uruchamiając polecenie:

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

3. przejdz w konsoli do folderu src i uruchom plik server.js za pomocą ``node server.js``
4. uruchom react za pomocą npm start (strona powinna odpalić się na http://localhost:3000/ i zrobić automatyczne przekierowanie na http://localhost:3000/login (wystarczy dać mu chwilke by zaczaił )



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
Produkty są pobierane  i wyświetlane w formie kart. Każdy produkt zawiera:
- nazwę,
- cenę,
- typ jedzenia,
- opis,
- przycisk do dodania do koszyka.

### 2. Sortowanie produktów
Produkty można sortować a następnie wyświetlić po:
- **Nazwie** (alfabetycznie),
- **Cenie** (rosnąco),
- **Typie jedzenia** (alfabetycznie).

### 3. Koszyk
Koszyk wyświetla produkty dodane przez użytkownika. Użytkownik może:
- Dodać produkty do koszyka,
- Usunąć produkty z koszyka,
- Sprawdzić łączną cenę w koszyku,
- 'Dokonać zakupu'.

### 4. Zamówienie i historia
Po kliknięciu przycisku "Zamów":
- Jeśli koszyk jest pusty, wyświetlane jest powiadomienie że koszyk jest pusty,
- Jeśli koszyk zawiera produktya zostanie coś kupione to zostaje  to zapisane  w historii zakupów, a koszyk zostaje opróżniony.

# plik LoginForm.js

## Cel
Formularz logowania umożliwia użytkownikowi zalogowanie się do aplikacji. Po pomyślnym zalogowaniu użytkownik zostaje przekierowany do strony głównej aplikacji.

## Składniki komponentu
- **Stan (State)**:
  - `username`: Przechowuje nazwę użytkownika wprowadzoną przez użytkownika.
  - `password`: Przechowuje hasło wprowadzone przez użytkownika.

- **Hooki**:
  - `useState`: Służy do zarządzania stanem w aplikacji.
  - `useNavigate`: Pozwala na programowe przekierowanie użytkownika do innej strony po zalogowaniu.

## Logika
1. **Obsługa formularza**:
   - Formularz zawiera dwa pola wejściowe: jedno dla nazwy użytkownika i drugie dla hasła.
   - Po naciśnięciu przycisku "Loguj" formularz jest wysyłany do backendu.
   - Na serwerze sprawdzane są dane logowania. Jeśli są poprawne, użytkownik jest zalogowany, a aplikacja przekierowuje go na stronę główną (`/main`).
   - Jeśli dane są błędne, użytkownik otrzymuje komunikat o niepoprawnych danych logowania.

2. **Rejestracja**:
   - Jeśli użytkownik nie ma jeszcze konta, może kliknąć przycisk „Zarejestruj się”, który przekierowuje go do formularza rejestracji.

## Interfejs użytkownika
- **Pola wejściowe**:
  - Nazwa użytkownika (typ tekstowy)
  - Hasło (typ hasło)
- **Przyciski**:
  - "Loguj" - Przesyła dane logowania.
  - "Zarejestruj się" - Przekierowuje na stronę rejestracji.

## Proces logowania
1. Użytkownik wprowadza nazwę użytkownika i hasło.
2. Klikając "Loguj", dane są wysyłane do backendu.
3. Jeśli dane są poprawne, użytkownik jest przekierowywany na stronę główną aplikacji (`/main`).
4. W przypadku błędnych danych, wyświetlany jest komunikat o błędzie.
   
# plik RegisterForm.js

## Cel
Formularz rejestracji pozwala nowym użytkownikom zarejestrować się w aplikacji, tworząc konto z nazwą użytkownika i hasłem. Po pomyślnym zarejestrowaniu użytkownik otrzymuje komunikat o sukcesie.

## Składniki komponentu
- **Stan (State)**:
  - `username`: Przechowuje nazwę użytkownika wprowadzaną przez użytkownika.
  - `password`: Przechowuje hasło wprowadzone przez użytkownika.

- **Hooki**:
  - `useState`: Używane do zarządzania stanem dla nazwy użytkownika i hasła.

## Logika
1. **Obsługa formularza**:
   - Formularz zawiera dwa pola wejściowe: jedno dla nazwy użytkownika i drugie dla hasła.
   - Po naciśnięciu przycisku "Rejestruj" dane są wysyłane na backend, aby zarejestrować nowego użytkownika.
   - Jeśli dane logowania są poprawne, użytkownik zostaje zarejestrowany i wyświetlany jest komunikat o pomyślnym zakończeniu rejestracji.
   - Jeśli wystąpią błędy przy rejestracji, użytkownik otrzymuje komunikat o błędzie.

2. **Przekierowanie do logowania**:
   - Jeśli użytkownik już ma konto, może kliknąć przycisk „Zaloguj się do portalu”, który przekierowuje go na stronę logowania.

## Interfejs użytkownika
- **Pola wejściowe**:
  - Nazwa użytkownika (typ tekstowy)
  - Hasło (typ hasło)
- **Przyciski**:
  - "Rejestruj" - Przesyła dane rejestracyjne do backendu.
  - "Zaloguj się do portalu" - Przekierowuje na stronę logowania.

## Proces rejestracji
1. Użytkownik wprowadza nazwę użytkownika i hasło.
2. Klikając "Rejestruj", dane są wysyłane do backendu w celu rejestracji nowego użytkownika.
3. Jeśli dane są poprawne, użytkownik otrzymuje komunikat o pomyślnym zarejestrowaniu konta.
4. W przypadku błędów, użytkownik otrzymuje komunikat o nieudanej rejestracji.

