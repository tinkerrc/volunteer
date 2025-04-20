{
  pkgs,
  lib,
  config,
  inputs,
  ...
}:

{
  enterShell = ''
    [ ! -f .env ] || export $(grep -v '^#' .env | xargs)
  '';
  env = {
    PG_HOST = "127.0.0.1";
    PG_PORT = "5432";
    PG_USER = "admin";
    PG_PASS = "&t!S6Hc&T5kg3dBZPG";
    PG_DBNAME = "vms";
    ADMIN = "hello@zhenkai.dev";
  };
  packages = with pkgs; [
    just

    buf
    grpcurl
    protoc-gen-go
    protoc-gen-es
    protoc-gen-connect-go

    nixfmt-rfc-style
  ];

  languages.go.enable = true;
  languages.javascript = {
    enable = true;
    npm.enable = true;
  };

  git-hooks.hooks.gofmt.enable = true;

  services.postgres = {
    enable = true;
    listen_addresses = "127.0.0.1";
    initialDatabases = [
      {
        name = "vms";
        user = "admin";
        pass = "&t!S6Hc&T5kg3dBZPG";
      }
    ];
  };

  scripts.reset-db.exec = ''
    psql -U $USER postgres -c "DROP DATABASE IF EXISTS vms;"
    psql -U $USER postgres -c "CREATE DATABASE vms;"
    psql -U $USER vms -c "GRANT ALL ON DATABASE vms TO admin;"
    psql -U $USER vms -c "GRANT ALL ON SCHEMA public TO admin;"
  '';
}
