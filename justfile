serve:
    devenv up -d
    reset-db
    go run ./server/main.go