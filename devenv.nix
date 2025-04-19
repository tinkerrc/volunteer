{
  pkgs,
  lib,
  config,
  inputs,
  ...
}:

{
  dotenv.enable = true;
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
    protoc-gen-connect-go

    nixfmt-rfc-style
  ];

  languages.go.enable = true;

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
}
