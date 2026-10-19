# 🚀 Brand Website

A React + Vite project with a step-by-step guide to deploying your website to GitHub Pages.

---

## 📦 Deployment Guide

### Step 1: Update `vite.config.js`

Configure Vite to use your repository's base path.

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // Or vue(), etc.

export default defineConfig({
  plugins: [react()],
  base: '/your-repository-name/',
})
```

### Step 2: Install the `gh-pages` Package

```bash
npm install gh-pages --save-dev
```

### Step 3: Add Deployment Scripts to `package.json`

**Add the homepage property** at the top level of the JSON object:

```json
"homepage": "https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPOSITORY_NAME"
```

**Configure the scripts:**

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

### Step 4: Push Your Source Code to GitHub

Push your project source code to your GitHub repository.

### Step 5: Deploy Your Website

Run the deployment command:

```bash
npm run deploy
```

---


## 🌐 Custom Domain Setup with GoDaddy

This section explains how to connect a custom domain purchased through [GoDaddy](https://yourdomain.com) to a website hosted using GitHub Pages.

In this project, the custom domain is `yourdomain.com`.

### Step 1: Add the Custom Domain on GitHub

1. Open the [your-github-repository](https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPOSITORY_NAME).
2. Navigate to **Settings**.
3. Under **Code and automation**, select **Pages**.
4. In the **Custom domain** field, enter:

   ```text
   yourdomain.com
   ```

5. Click **Save**.
6. Wait for GitHub Pages to verify the domain.

GitHub may create or update a `CNAME` file in the published website's root directory. The file should contain:

```text
yourdomain.com
```

### Step 2: Configure DNS Records in GoDaddy

1. Sign in to your [GoDaddy account](https://yourdomain.com).
2. Open **My Products** and select your domain, `yourdomain.com`.
3. Navigate to **DNS** or **Manage DNS**.
4. Add or update the following DNS records.

#### A Records — Root Domain

These records point the root domain to GitHub Pages.

| Type | Name | Value | TTL |
| --- | --- | --- | --- |
| A | `@` | `185.199.108.153` | Default |
| A | `@` | `185.199.109.153` | Default |
| A | `@` | `185.199.110.153` | Default |
| A | `@` | `185.199.111.153` | Default |

#### CNAME Record — WWW Subdomain

To point `www.yourdomain.com` to the root domain, configure:

| Type | Name | Value | TTL |
| --- | --- | --- | --- |
| CNAME | `www` | `YOUR_GITHUB_USERNAME.github.io` | Default |

> **Important:** Remove conflicting A, AAAA, or CNAME records for the same host if they interfere with these settings. Keep any unrelated DNS records that your other services need.

### Step 3: Wait for DNS Propagation

After saving your DNS changes, allow time for them to propagate.

DNS updates may take several minutes or up to 24–48 hours, depending on caching and provider settings.

You can check the DNS records using:

```bash
nslookup yourdomain.com
```

You can also use online DNS checking tools to verify that the records resolve correctly.

### Step 4: Enable HTTPS on GitHub Pages

1. Return to your repository's **Settings → Pages**.
2. Confirm that `yourdomain.com` appears under **Custom domain**.
3. Wait until GitHub finishes checking the DNS configuration and provisions a TLS certificate.
4. Enable **Enforce HTTPS** when the option becomes available.

HTTPS encrypts traffic between visitors and your website.

### Step 5: Verify the Website

Once the DNS records and GitHub Pages configuration are active, test these URLs:

- [https://yourdomain.com](https://yourdomain.com)
- [https://www.yourdomain.com](https://www.yourdomain.com)

Confirm that the website loads correctly and that HTTPS works.

### Troubleshooting

- **Domain not verified:** Check the DNS records and GitHub Pages custom-domain settings.
- **Website not loading:** Confirm the DNS records and wait for propagation.
- **HTTPS unavailable:** Wait for certificate provisioning and check that the DNS configuration is correct.
- **Vite assets not loading:** Ensure `base` in `vite.config.js` is set to `/` when deploying to the root custom domain.

### Deployment Configuration

For a root custom domain such as `yourdomain.com`, your Vite configuration should use:

```js
export default defineConfig({
  plugins: [react()],
  base: '/',
})
```

Your deployment workflow can then publish the production build using:

```bash
npm run deploy
```

---

## 🔧 Troubleshooting: CNAME File Disappears After Deployment

### 🐛 The Problem

After pushing new commits to GitHub and deploying the website, the custom domain (`yourdomain.com`) would sometimes stop working.

The issue occurred because the deployment process published the contents of the `dist/` directory. If the `CNAME` file was missing from the build output, GitHub Pages could lose its custom-domain configuration.

### ✅ The Solution

To fix this problem permanently, the `CNAME` file was added to Vite's `public/` directory so it would be included automatically in every production build.

### Step 1: Create the CNAME File

Inside the project's `public/` directory, create a file named `CNAME` without any file extension.

The project structure should look like this:

```text
brand-website/
├── public/
│   └── CNAME
├── src/
├── index.html
├── package.json
└── vite.config.js
```

### Step 2: Add the Custom Domain

Open `public/CNAME` and add your custom domain:

```text
yourdomain.com
```

Make sure the file contains only the domain name, without `https://`, a path, or extra text.

### Step 3: Verify the Vite Configuration

Ensure that your `vite.config.js` uses the root path for your custom domain:

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',
})
```

### Step 4: Build the Project

Run the production build:

```bash
npm run build
```

Vite automatically copies files from `public/` into the root of `dist/`.

After building, verify that this file exists:

```text
dist/
└── CNAME
```

The file should contain:

```text
yourdomain.com
```

### Step 5: Deploy the Website

Deploy the production build:

```bash
npm run deploy
```

Because `public/CNAME` is included in the build output, the deployment will publish the domain configuration alongside the website files.

### Step 6: Commit the Fix to GitHub

Add and commit the new file so it remains in your source repository:

```bash
git add public/CNAME
git commit -m "fix: preserve custom domain during deployment"
git push origin main
```

Then deploy using:

```bash
npm run deploy
```

### 🎉 Result

The `CNAME` file is now maintained in the source repository and copied into every production build.

This prevents the custom-domain file from disappearing during normal deployments, provided the deployment continues to publish the Vite `dist/` output.

**Key takeaway:** Keep `CNAME` in `public/CNAME`, not only in the generated `dist/` directory, because `dist/` is recreated during production builds.
One important distinction
Pushing a commit to main does not necessarily deploy your website; that depends on your GitHub Actions or other deployment configuration. With your npm run deploy workflow, the key is ensuring public/CNAME exists before every build.
You can verify the fix by checking that dist/CNAME exists after npm run build and that the deployed GitHub Pages branch contains CNAME at its root.