# QuickNotify

QuickNotify es una aplicación **fullstack demo** para simular el envío de notificaciones por:

- Email
- SMS
- WhatsApp

> No integra APIs reales. Todo el comportamiento externo se simula con `setTimeout`, `console.log` y respuestas controladas.

## Stack

- **Backend:** NestJS (TypeScript)
- **Frontend:** Vite + JavaScript Vanilla

## Objetivo del proyecto

Demostrar el uso práctico de patrones de diseño en NestJS:

- **Strategy** para encapsular cada canal de notificación.
- **Factory** para resolver la estrategia según el tipo (`email`, `sms`, `whatsapp`).
- **Singleton** para configuración global (`ConfigService`).

---

## Estructura principal

```text
src/
  notification/
    config/
      config.module.ts
      config.service.ts
    dto/
      send-notification.dto.ts
    factory/
      notification.factory.ts
    strategies/
      notification.strategy.ts
      email.strategy.ts
      sms.strategy.ts
      whatsapp.strategy.ts
    notification.controller.ts
    notification.module.ts
    notification.service.ts
frontend/
  index.html
  src/
    main.js
    style.css
```

---

## API

### Enviar notificación

`POST /notifications/send`

#### Body

```json
{
  "type": "email",
  "message": "Hola desde QuickNotify"
}
```

#### Tipos soportados

- `email`
- `sms`
- `whatsapp`

#### Respuesta exitosa (ejemplo)

```json
{
  "result": "Email sent successfully: Hola desde QuickNotify"
}
```

---

## Ejecución local

### 1) Backend (NestJS)

Desde la raíz del proyecto:

```bash
npm install
npm run start:dev
```

Servidor backend:

- `http://localhost:3000`

### 2) Frontend (Vite)

En otra terminal:

```bash
cd frontend
npm install
npm run dev
```

Servidor frontend (normalmente):

- `http://localhost:5173`

El frontend consume automáticamente:

- `http://localhost:3000/notifications/send`

---

## Prueba rápida con curl

```bash
curl -X POST http://localhost:3000/notifications/send \
  -H "Content-Type: application/json" \
  -d "{\"type\":\"sms\",\"message\":\"Mensaje de prueba\"}"
```

---

## Validaciones y comportamiento

- CORS habilitado en backend.
- DTO con `class-validator`.
- `ValidationPipe` global con `whitelist`, `forbidNonWhitelisted` y `transform`.
- Si el `type` no existe, el backend responde error `400`.

---

## Dónde están los patrones

### Strategy

- `NotificationStrategy` define el contrato `send(message: string): Promise<string>`.
- Implementaciones:
  - `EmailStrategy`
  - `SmsStrategy`
  - `WhatsappStrategy`

### Factory

- `NotificationFactory.getStrategy(type)` selecciona la estrategia correcta según el tipo recibido.

### Singleton

- `ConfigService` expone `appName = 'QuickNotify'`.
- En NestJS, los services son singleton por defecto (una sola instancia compartida).

---

## Scripts útiles

### Backend

```bash
npm run start:dev
npm run build
npm run test
npm run test:e2e
npm run format
```

### Frontend

```bash
cd frontend
npm run dev
npm run build
npm run preview
```

---

## Troubleshooting

- **El frontend no conecta con el backend**
  - Verifica que el backend esté corriendo en `http://localhost:3000`.
- **Error por tipo inválido**
  - Usa solo `email`, `sms` o `whatsapp`.
- **Puerto ocupado**
  - Libera el puerto o cambia configuración de arranque.

---

## Estado

Proyecto listo para ejecutar en entorno local como demo de arquitectura y patrones de diseño.
