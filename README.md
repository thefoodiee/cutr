# skibi.di - URL Shortener
Try it out! - [cutrrr.vercel.app](https://cutrrr.vercel.app)

A minimal URL shortener built with **Next.js** and **MongoDB**, powering **cutrrr**.

---

##  Features

- Custom short URLs  
- Collision handling (`shorturl already taken`)  
- MongoDB-backed storage  
- Fast redirects  
- Pixelated UI 
- Vercel-ready  

---

## Tech Stack

- Next.js (App Router)
- React
- MongoDB
- Tailwind CSS

---

## 📁 Project Structure
```
src/
├─ app/ # Pages & routes
├─ api/generate/ # Short URL API
├─ lib/mongodb.js # MongoDB connection
└─ components/ # UI components
```


---

##  Run Locally

```bash
git clone https://github.com/thefoodiee/cutr
cd cutr
npm install
npm run dev
```

Create .env.local:
```
MONGODB_URI=your_mongodb_uri
NEXT_PUBLIC_HOST=http://localhost:3000
```

---
## API
POST `/api/generate`
```
{
  "url": "https://example.com",
  "shorturl": "cute"
}
```

- Returns error if shorturl already exists
- Redirects handled via /:shorturl
