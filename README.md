# DropOwl website

Static GitHub Pages site for **DropOwl**. The existing Pages repository is `armaurya1/armaurya1.github.io` and already has a `CNAME` file for `dropowl.me`.

## Pages

- `index.html` — app description and Google Play coming-soon button.
- `privacy.html` — privacy policy draft naming Supabase as the authentication and backend provider.
- `terms.html` — app and website terms.
- `delete-account.html` — email-based account deletion request flow to `info@dropowl.me`.
- `styles.css` — responsive styling.

## Google Pages setup

The account site is `https://armaurya1.github.io/`; the intended custom domain is `https://dropowl.me/`. In the repository, open **Settings → Pages** and select the `main` branch and root folder if Pages is not already publishing from them. Keep the existing `CNAME` file.

## Namecheap DNS for `dropowl.me`

In **Namecheap → Domain List → Manage → Advanced DNS → Host Records**, use:

| Type | Host | Value |
| --- | --- | --- |
| A Record | `@` | `185.199.108.153` |
| A Record | `@` | `185.199.109.153` |
| A Record | `@` | `185.199.110.153` |
| A Record | `@` | `185.199.111.153` |
| CNAME Record | `www` | `armaurya1.github.io` |

Remove conflicting `A`, `CNAME`, or URL Redirect records for `@` and `www`. Keep mail-related MX/TXT records if the domain uses email. After DNS resolves, turn on **Enforce HTTPS** under GitHub **Settings → Pages**. DNS changes can take time to propagate.

## Launch checklist

- Confirm that `info@dropowl.me` is monitored and the account deletion procedure is followed after a request arrives.
- Review the privacy policy and terms against the production app, actual data flows, and launch countries. Add any analytics, advertising, push messaging, affiliate tracking, gift-card payment, retention, or legal-entity details that apply.
- When the app is published, replace the coming-soon Google Play badge with the exact listing URL.

