# Mahathi & Rahul Wedding Website 💒

A beautiful, modern wedding website for celebrating the union of Mahathi and Rahul.

## 📁 Project Structure

```
wedding/
├── index.html          # Main HTML file with website structure
├── styles.css          # CSS styling with Indian wedding theme
├── script.js           # JavaScript for interactive features
├── wedding-data.json   # Central data file with all wedding details
└── README.md          # This file
```

## 🎯 Key Features

- **Responsive Design**: Works beautifully on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, elegant design with Indian wedding theme (gold, red, and cream colors)
- **Smooth Animations**: Fade-in effects, smooth scrolling, and interactive elements
- **Information Sections**:
  - Hero section with couple names and main details
  - Wedding schedule with timeline
  - Venue and accommodation information
  - Travel information for guests
  - WhatsApp group integration for guest coordination

## 🚀 How to Use

### Viewing the Website

1. Simply open `index.html` in any modern web browser
2. Or use a local server for best results:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Then open http://localhost:8000 in your browser
   ```

### Updating Wedding Information

All wedding details are centralized in `wedding-data.json`. To update information:

1. Open `wedding-data.json`
2. Modify the relevant fields:
   - Couple names
   - Dates and times
   - Venue details
   - Schedule/events
   - Travel information
   - WhatsApp group link

**Example: Adding WhatsApp Group Link**

Replace the `"TO_BE_ADDED"` value in `wedding-data.json`:

```json
"contact": {
  "whatsappGroup": {
    "description": "Join our WhatsApp group...",
    "link": "https://chat.whatsapp.com/YOUR_GROUP_LINK"
  }
}
```

### Customization

**Colors**: Edit CSS variables in `styles.css`:
```css
:root {
    --primary-color: #D4AF37;     /* Gold */
    --secondary-color: #8B0000;   /* Dark Red */
    --accent-color: #FF6B6B;      /* Coral */
}
```

**Content**: Edit HTML directly in `index.html` for structural changes.

**Add Photos**: You can add image sections by inserting image tags in `index.html`.

## 📋 Wedding Details Summary

- **Couple**: Mahathi & Rahul
- **Dates**: 20-22nd February 2026
- **Venue**: Jenvi Conventions, Hyderabad
- **Events**:
  - 20th Feb: Mehendi & Sangeet
  - 21st Feb: Haldi (Morning) & Wedding (Evening)
  - 22nd Feb: Reception

## 🔄 Next Steps / Future Enhancements

- [ ] Add actual WhatsApp group link
- [ ] Add photos of the couple
- [ ] Integrate Google Maps for venue location
- [ ] Add RSVP form
- [ ] Add photo gallery
- [ ] Add dress code information
- [ ] Add gift registry (optional)
- [ ] Add hotel recommendations with links
- [ ] Add local attractions/things to do in Hyderabad

## 🎨 Design Features

- **Font Families**: 
  - Playfair Display (headings)
  - Poppins (body text)
- **Color Scheme**: Traditional Indian wedding colors with modern touch
- **Animations**: Smooth scrolling, fade-ins, hover effects
- **Icons**: Unicode emojis for quick, lightweight icons

## 📱 Browser Compatibility

Works on all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 💡 Tips

1. **Testing**: Always test on multiple devices and screen sizes
2. **Updates**: Keep the `wedding-data.json` file as your single source of truth
3. **Sharing**: You can host this on GitHub Pages, Netlify, or Vercel for free
4. **Backup**: Keep backups of your customizations

## 🌐 Deployment Options

### GitHub Pages (Free)
1. Create a GitHub repository
2. Push your code
3. Enable GitHub Pages in repository settings

### Netlify (Free)
1. Sign up at netlify.com
2. Drag and drop the wedding folder
3. Get instant URL

### Vercel (Free)
1. Sign up at vercel.com
2. Connect your GitHub repository
3. Deploy with one click

---

**Made with ❤️ for Mahathi & Rahul's Special Day**

