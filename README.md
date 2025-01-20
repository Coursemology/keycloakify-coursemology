<p align="center">
    <i>🚀 <a href="https://keycloakify.dev">Keycloakify</a> v11 starter 🚀</i>
    <br/>
    <br/>
</p>

# Quick start

```bash
git clone https://github.com/keycloakify/keycloakify-starter
cd keycloakify-starter
yarn install # Or use an other package manager, just be sure to delete the yarn.lock if you use another package manager.
```

# Testing the theme locally

[Documentation](https://docs.keycloakify.dev/testing-your-theme)

Generally, the recommended way to test the theme is either through using `Storybook`, in which we simply run `yarn storybook`, or through using `yarn dev`. If you decided to test using the latter method, you need to un-comment the part of the code inside `main.tsx` to get the Mock Context. Specifically, include the following

```
import { getKcContextMock } from "./login/KcPageStory";

if (import.meta.env.DEV) {
  window.kcContext = getKcContextMock({
    pageId: "login.ftl", // or whatever page you want to test
    overrides: {},
  });
}
```

# How to customize the theme

[Documentation](https://docs.keycloakify.dev/customization-strategies)

# Building the theme

You need to have [Maven](https://maven.apache.org/) installed to build the theme (Maven >= 3.1.1, Java >= 7).  
The `mvn` command must be in the $PATH.

- On macOS: `brew install maven`
- On Debian/Ubuntu: `sudo apt-get install maven`
- On Windows: `choco install openjdk` and `choco install maven` (Or download from [here](https://maven.apache.org/download.cgi))

You can build the keycloak theme (to be imported over to Coursemology2 repo) by executing the following command

```bash
yarn build-keycloak-theme
```

Note that by default Keycloakify generates multiple .jar files for different versions of Keycloak.  
You can customize this behavior, see documentation [here](https://docs.keycloakify.dev/targeting-specific-keycloak-versions).

In Coursemology, at this moment, we use Keycloak v24. When those multiple .jar are created, please note that:

- For Keycloak v23 and above (which is what we're using), please use `coursemology-keycloakify-keycloak-theme-{ver_number}.jar`
- Otherwise, please use `retrocompat-coursemology-keycloakify-keycloak-theme-{ver_number}.jar`

Dated (2025/01/20), the version number is 8.0.0. For future developers, should this repo be updated, please change the `ver-number` accordingly

# GitHub Actions

The starter comes with a generic GitHub Actions workflow that builds the theme and publishes
the jars [as GitHub releases artifacts](https://github.com/keycloakify/keycloakify-starter/releases/tag/v10.0.0).  
To release a new version **just update the `package.json` version and push**.

To enable the workflow go to your fork of this repository on GitHub then navigate to:
`Settings` > `Actions` > `Workflow permissions`, select `Read and write permissions`.
