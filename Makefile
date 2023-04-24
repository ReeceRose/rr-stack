build-lambda:
	cargo lambda build --package lambda --release --arm64

deploy-lambda:
	cargo lambda deploy \
  	--iam-role arn:aws:iam::799522438486:role/lambda --binary-name lambda rust

build-website:
	pnpm run build --filter web

deploy-website:
	aws s3 cp --recursive apps/web/dist/ s3://rr-stack