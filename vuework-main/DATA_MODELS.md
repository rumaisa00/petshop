# SmartPetShop Data Models

This document defines the entities, attributes, and relationships for SmartPetShop.

---

## Entities

### User
- `id`: string  
- `name`: string  
- `email`: string  
- `role`: "admin" | "employee" | "customer"  

### Pet
- `id`: string  
- `name`: string  
- `type`: string (dog, cat, etc.)  
- `age`: number  
- `price`: number  
- `status`: "available" | "sold"  
- `quantity`: number  

### Food
- `id`: string  
- `name`: string  
- `brand`: string  
- `type`: string (dog/cat)  
- `price`: number  
- `quantity`: number  

### Supplies
- `id`: string  
- `name`: string  
- `category`: string  
- `price`: number  
- `quantity`: number  

### CustomerOrder
- `id`: string  
- `customerId`: string  
- `items`: array of `{ productId, type: "pet"|"food"|"supply", quantity, price }`  
- `status`: "pending" | "completed" | "cancelled"  
- `totalPrice`: number  
- `createdAt`: string  

### ActivityLog (optional)
- `id`: string  
- `userId`: string  
- `action`: string  
- `entity`: string (`pet`, `food`, `order`, etc.)  
- `timestamp`: string  

---

## Relationships (ERD)

![SmartPetShop ERD](assets/ERD.png)

**Legend:**
- **1:N** — One-to-many  
- **N:M** — Many-to-many

**Relationships:**
- User → CustomerOrder (1:N, a customer can have many orders)  
- CustomerOrder → Pet/Food/Supplies (N:M, order items)  
- Admin → Pet/Food/Supplies (1:N, admin manages inventory)  
- Employee → Customer (1:N, employee manages customer records)
- <img width="1292" height="1001" alt="image" src="https://github.com/user-attachments/assets/2b0a0b99-ef51-4f6e-bfce-85a783946d4b" />


---

