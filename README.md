# Project planner API

```
Endpoints
```

> Create - [POST]
http://localhost:3000/projects


```javascript
{
  "title": "title",
  "details": "details"
}
```
---
> Read - [GET]
Get all - http://localhost:3000/projects

> Get one - http://localhost:3000/projects/id
---

> Update - [PATCH]
http://localhost:3000/projects/id


```javascript
{
  "title": "new title"
}
```
---
> Delete - [DELETE]
http://localhost:3000/projects/id