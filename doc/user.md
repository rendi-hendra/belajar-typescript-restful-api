# User API Spec

## Register User

Endpoint : POST /api/users

Request Body :

```json
{
  "username": "rendi",
  "password": "rahasia",
  "name": "Rendi Hendra"
}
```

Response Body (Success) :

```json
{
  "data": {
    "username": "rendi",
    "name": "Rendi Hendra"
  }
}
```

Response Body (Failed) :

```json
{
  "errors": "Username must not blank, ..."
}
```

## Login User

Endpoint : POST /api/users/login

Request Body :

```json
{
  "username": "rendi",
  "password": "rahasia"
}
```

Response Body (Success) :

```json
{
  "data": {
    "username": "rendi",
    "name": "Rendi Hendra",
    "token": "uuid"
  }
}
```

Response Body (Failed) :

```json
{
  "errors": "Username or password wrong, ..."
}
```

## Get User

Endpoint : GET /api/users/current

Request Header :

- X-API-TOKEN : token

Response Body (Success) :

```json
{
  "data": {
    "username": "rendi",
    "name": "Rendi Hendra"
  }
}
```

Response Body (Failed) :

```json
{
  "errors": "Unauthorized, ..."
}
```

## Update User

Endpoint : PATCH /api/users/current

Request Header :

- X-API-TOKEN : token

Request Body :

```json
{
  "password": "rahasia", // Tidak wajib
  "name": "Rendi Hendra" // Tidak wajib
}
```

Response Body (Success) :

```json
{
  "data": {
    "username": "rendi",
    "name": "Rendi Hendra"
  }
}
```

Response Body (Failed) :

```json
{
  "errors": "Unauthorized, ..."
}
```

## Logout User

Endpoint : DELETE /api/users/current

Request Header :

- X-API-TOKEN : token

Response Body (Success) :

```json
{
  "data": "OK"
}
```

Response Body (Failed) :

```json
{
  "errors": "Unauthorized, ..."
}
```
