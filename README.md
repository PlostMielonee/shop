# Instrukcja uruchomienia aplikacji

## Wymagania wstępne

Aby uruchomić aplikację, musisz mieć zainstalowane:

- [Node.js](https://nodejs.org/) (wraz z npm)
- [MySQL](https://www.mysql.com/)

## Krok 1: Uruchomienie backendu

1. Sklonuj repozytorium lub pobierz pliki projektu na swój komputer.
2. Przejdź do folderu, w którym znajduje się backend (plik `server.js`).
3. Zainstaluj zależności, uruchamiając polecenie:

   ``npm install express cors bcrypt mysql2 express``

   >> express – framework do tworzenia aplikacji webowych
   >> mysql2 – biblioteka do połączenia z bazą danych MySQL
   bcrypt – do haszowania haseł
   jsonwebtoken – do obsługi tokenów JWT
   cors – do obsługi polityki CORS
   
