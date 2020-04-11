[build]
command = "hugo --gc"
publish = "public/"

[context.branch-deploy]
command = "hugo -b --gc $DEPLOY_PRIME_URL"

[context.deploy-preview]
command = "hugo -b --gc $DEPLOY_PRIME_URL"