# Candy Motorsport Heritage Archive

Public website source, prepared from `Candy_Heritage_Website_v1.3.html` without modifying its HTML or embedded images.

## Publish using GitHub and Netlify

1. Create a new GitHub repository, e.g. `candy-motorsport-archive`, and upload `index.html`, `netlify.toml`, and this README into its root.
2. Sign in to Netlify and choose **Add new project > Import an existing project > GitHub**. Authorize access to the repository.
3. For this static HTML site, leave the build command blank; set the publish directory to `.` (repository root), if prompted.
4. Deploy. Netlify provides a `*.netlify.app` address. You can choose a custom site name in Netlify if available.
5. Future changes committed to the repository's deployment branch will automatically deploy to the same site address.

## Maintenance

- Edit `index.html` to change site content. It is a standalone file with embedded imagery.
- Keep the original images intact unless explicitly asked to change them.
- Use pull requests for review before merging to the deployment branch.
- Do not upload confidential team information to this public repository.

## Notes

This package prepares the existing site for deployment. It does not itself create a GitHub repository, Netlify account, or live URL. Publishing requires authorization in the respective services.
