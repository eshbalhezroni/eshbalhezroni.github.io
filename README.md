# Eshbal Hezroni Website

This is a static website made from HTML, CSS, JavaScript, and image assets. It does not require installing dependencies or running a build step.

## View Locally

The quickest way to view the site is to open `index.html` in a browser.

1. Open this folder on your computer:

   ```sh
   /Users/eshbalhezroni/Desktop/eshbal_new_website
   ```

2. Double-click `index.html`.

The homepage should open in your default browser. From there, you can use the site navigation to visit the other pages.

## Run Locally With a Server

For a more website-like local setup, serve the folder with a small local server.

1. Open a terminal.

2. Go to the website folder:

   ```sh
   cd /Users/eshbalhezroni/Desktop/eshbal_new_website
   ```

3. Start a local server:

   ```sh
   python3 -m http.server 8000
   ```

4. Open this address in your browser:

   ```text
   http://localhost:8000
   ```

To stop the local server, return to the terminal and press `Control + C`.

## Publish With GitHub Pages

This website is already set up as a static site, so GitHub Pages can publish it directly from the repository. No build step is required.

1. Decide what kind of GitHub Pages site you want:

   ```text
   Personal portfolio site:
   Repository name: YOUR-USERNAME.github.io
   Website URL:     https://YOUR-USERNAME.github.io/

   Project site:
   Repository name: any repository name, for example eshbal_new_website
   Website URL:     https://YOUR-USERNAME.github.io/REPOSITORY-NAME/
   ```

   For a personal portfolio, use the special repository name `YOUR-USERNAME.github.io`. Replace `YOUR-USERNAME` with your exact GitHub username, using lowercase letters. For example, if your GitHub username is `eshbalhezroni`, name the repository:

   ```text
   eshbalhezroni.github.io
   ```

   Use a normal repository name only if you are okay with the site living under a path like `/eshbal_new_website/`.

2. Create the repository on GitHub:

   - Go to GitHub.
   - Click **+** in the top-right corner.
   - Click **New repository**.
   - Choose your GitHub account as the **Owner**.
   - Enter the repository name you chose in step 1.
   - If you are using GitHub Free, choose **Public**.
   - Do not add a README, `.gitignore`, or license on GitHub if those files already exist locally.
   - Click **Create repository**.

3. Make sure the website files are in the root of the repository. The root should include:

   ```text
   index.html
   styles.css
   case-pages.js
   assets/
   ```

4. Connect the local folder to the new GitHub repository. Replace `YOUR-USERNAME` and `REPOSITORY-NAME` with the real values:

   ```sh
   git remote add origin https://github.com/YOUR-USERNAME/REPOSITORY-NAME.git
   git add .
   git commit -m "Add website files"
   git branch -M main
   git push -u origin main
   ```

   If `origin` already exists, update it instead:

   ```sh
   git remote set-url origin https://github.com/YOUR-USERNAME/REPOSITORY-NAME.git
   git push -u origin main
   ```

5. On GitHub, open the repository page.

6. Go to **Settings**.

7. In the left sidebar, click **Pages**.

8. Under **Build and deployment**, set **Source** to **Deploy from a branch**.

9. Under **Branch**, choose:

   ```text
   main
   / (root)
   ```

10. Click **Save**.

11. Wait for GitHub Pages to deploy the site. This can take a few minutes.

12. When deployment is complete, GitHub will show the public website URL in the **Pages** settings. The URL depends on the repository name:

   ```text
   Personal portfolio site: https://YOUR-USERNAME.github.io/
   Project site:            https://YOUR-USERNAME.github.io/REPOSITORY-NAME/
   ```

13. To update the live website later, make changes locally, commit them, and push to `main` again:

   ```sh
   git add .
   git commit -m "Update website"
   git push
   ```

GitHub Pages republishes the site automatically after each push to the selected branch.

## Main Files

- `index.html` is the homepage.
- `styles.css` contains the site styling.
- `case-pages.js` contains JavaScript used by the case study pages.
- `assets/` contains images and other visual assets.
