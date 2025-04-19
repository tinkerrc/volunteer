{
  pkgs,
  lib,
  config,
  inputs,
  ...
}:

{
  env = {
    PG_HOST = "127.0.0.1";
    PG_PORT = "5432";
    PG_USER = "csc";
    PG_PASS = "&t!S6Hc&T5kg3dBZPG";
    PG_DBNAME = "cybersecclub";
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
        name = "cybersecclub";
        user = "csc";
        pass = "&t!S6Hc&T5kg3dBZPG";
      }
    ];
  };
}
