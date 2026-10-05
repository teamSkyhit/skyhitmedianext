# How to Deploy and View the `speedv.1` Branch on Vercel

Since your project is connected to Vercel and hosted on GitHub, you do not need to do any complicated terminal commands to deploy. Vercel handles it automatically! 

Here is the step-by-step guide on how to test the `speedv.1` branch changes on your testing domain.

---

## Method 1: Use the Automatic Vercel Preview Link (Easiest)
Whenever code is pushed to a branch that has an active Pull Request, Vercel automatically creates a "Preview" version of the site for testing.

1. Go to your GitHub repository in your web browser.
2. Click on the **Pull Requests** tab.
3. Open **Pull Request #2** (which is for `speedv.1`).
4. Scroll all the way to the bottom of the conversation where the "Checks" are listed (it usually says *All checks have passed*).
5. Look for the row that says **vercel / pr** or **Vercel - Preview**.
6. Click the **"Details"** link next to it. 
7. This will instantly open the live preview of the `speedv.1` branch! You can copy this URL and paste it into WhatsApp to test the new OpenGraph images.

---

## Method 2: Access it via the Vercel Dashboard
If you want to manage the deployment directly in Vercel:

1. Log into your **Vercel Dashboard** (https://vercel.com).
2. Click on your project name (`skyhitmedianext`).
3. Click on the **Deployments** tab at the top.
4. You will see a list of all recent deployments. Look at the column named **Branch**.
5. Find the row that says `speedv.1`.
6. Click the little box icon or the URL next to it (it will look something like `skyhitmedianext-git-speedv.1-teamskyhit.vercel.app`).
7. This URL is your live testing domain for this specific branch!

---

## Method 3: Make `speedv.1` the default Testing Domain
If you want your main testing domain (e.g., `skyhitmedianext.vercel.app`) to permanently show the `speedv.1` branch instead of the `main` branch, you can change the Production branch in Vercel:

1. Go to your **Vercel Dashboard** and click your project.
2. Go to **Settings** > **Git**.
3. Scroll down to the **Production Branch** section.
4. Change the branch from `main` to `speedv.1` and click **Save**.
5. Vercel will immediately start a new build and deploy `speedv.1` directly to your main testing URL.

> **Important Note:** If you do Method 3, remember to change it back to `main` when you are finally ready to push the real website live to the public!
