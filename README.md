# Lum&Sens Site

This repository contains the source code for the **Lum&Sens** photography studio website. The project is a static site built with HTML, CSS and JavaScript.

## Purpose

The goal of this project is to provide an attractive showcase for the Lum&Sens studio, presenting services, portfolio and contact information. The site also embeds a Google Maps iframe so visitors can easily locate the studio and includes a contact form which relies on the [Formspree](https://formspree.io/) service to handle submissions.

## Opening the Site Locally

Because the pages use JavaScript `fetch` to load the navigation and footer, opening `index.html` directly from the file system may not display all content correctly in some browsers. The recommended method is to serve the directory with a small static server:

```bash
# from the repository root
python3 -m http.server 8000
```

Then open `http://localhost:8000/index.html` in your browser.

Alternatively, if your browser allows local file requests, you can simply double‑click `index.html`, but some features might not load.

## Contributing

Contributions are welcome! To propose changes:

1. Fork the repository and create a new branch for your work.
2. Make your changes and commit them with clear messages.
3. Open a pull request describing the improvements or fixes.

Please keep the site lightweight and easy to run. If you add new features, ensure they work without a complex build step and that any external services used are documented.

## External Dependencies

- **Formspree** – processes form submissions from `contact.html`.
- **Google Maps** – embedded iframe to show the studio location.

Feel free to open issues if you find bugs or have suggestions.

