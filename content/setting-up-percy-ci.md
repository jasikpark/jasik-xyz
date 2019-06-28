+++
Description = ""
Tags = ["tech"]
Categories = []
Type = "post"
Date = "2019-06-28T11:49:41-05:00"
Title = "Setting Up Percy CI"
+++

I finally fixed my [Percy CI](https://percy.io) configuration so that it has the pull request and branch contexts so that it can choose the correct base build to compare screenshots from.

Apparently I also needed to include a webhook to [percy](https://percy.io) on my master builds and branch preview builds so that it could be aware of those as well.

I updated each build command in `netlify.toml` with

```bash
[context.deploy-preview]
command = "export PERCY_BRANCH=\"$BRANCH\";export PERCY_PULL_REQUEST=\"$REVIEW_ID\";hugo --buildFuture -b $DEPLOY_PRIME_URL && percy snapshot public/"
```

This set the correct environmental variables for percy and sent them to the service via `percy snapshot public/`
