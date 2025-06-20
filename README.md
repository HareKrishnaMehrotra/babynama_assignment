
# Babynama Internship Assignment – Webinar Page

## 🔗 Live URL
[View Webinars Live](https://your-vercel-deployment-url.vercel.app/webinars)

---

## ✅ Choices Made
I created a simple card layout inside the `/webinars` page instead of a separate `WebinarCard` component to keep the feature self-contained and complete within the 2-4 hour limit.

---

## 🧠 Roadblock & Learning
I got stuck while trying to pass the webinar ID to the `onClick` function for the "View Details" button. I quickly reviewed the React docs and remembered I need to wrap it in an arrow function to prevent it from calling immediately.

Solution:
```jsx
onClick={() => handleViewDetails(webinar.id)}

