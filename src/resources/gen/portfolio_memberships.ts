/// <reference path="../interfaces.ts" />

/**
 * This file is auto-generated by the `asana-api-meta` NodeJS package.
 * We try to keep the generated code pretty clean but there will be lint
 * errors that are just not worth fixing.
 */
/* tslint:disable:max-line-length */
/* tslint:disable:eofline */
var resource = <Resource>{
  "name": "portfolio_membership",
  "comment": "This object determines if a user is a member of a portfolio.\n",
  "properties": [
    {
      "name": "id",
      "type": "Id",
      "example_values": [
        "1234"
      ],
      "access": "Read-only",
      "comment": "Globally unique ID of the portfolio membership.\n**Note: This field is under active migration to the [`gid` field](#field-gid)--please see our [blog post](/developers/documentation/getting-started/deprecations) for more information.**\n"
    },
    {
      "name": "gid",
      "type": "Gid",
      "example_values": [
        "\"1234\""
      ],
      "access": "Read-only",
      "comment": "Globally unique ID of the portfolio membership.\n"
    },
    {
      "name": "resource_type",
      "type": "Enum",
      "access": "Read-only",
      "comment": "The resource type of this resource. The value for this resource is always `portfolio_membership`.\n",
      "example_values": [
        "\"portfolio_membership\""
      ],
      "values": [
        {
          "name": "portfolio_membership",
          "comment": "A portfolio membership resource type."
        }
      ]
    },
    {
      "name": "user",
      "type": "User",
      "example_values": [
        "{ id: 12345, gid: \"12345\", name: \"Tim Bizarro\" }"
      ],
      "access": "Read-only",
      "comment": "The user in the membership.\n"
    },
    {
      "name": "portfolio",
      "type": "Project",
      "example_values": [
        "{ id: 1234, gid: \"1234\", name: 'Progress Tracking' }"
      ],
      "access": "Read-only",
      "comment": "[Opt In](https://asana.com/developers/documentation/getting-started/input-output-options). The portfolio the user is a member of.\n"
    }
  ],
  "action_classes": [
    {
      "name": "Query for portfolio memberships",
      "url": "query"
    },
    {
      "name": "Get all memberships for a portfolio",
      "url": "get-many"
    },
    {
      "name": "Get a portfolio membership",
      "url": "get-single"
    }
  ],
  "actions": [
    {
      "name": "findAll",
      "class": "query",
      "method": "GET",
      "path": "/portfolio_memberships",
      "params": [
        {
          "name": "portfolio",
          "type": "Gid",
          "example_values": [
            "\"36985\""
          ],
          "comment": "The portfolio for which to fetch memberships."
        },
        {
          "name": "workspace",
          "type": "Gid",
          "example_values": [
            "\"1331\""
          ],
          "comment": "The workspace for which to fetch memberships."
        },
        {
          "name": "user",
          "type": "String",
          "example_values": [
            "\"14641\"",
            "\"me\"",
            "\"sashimi@asana.com\""
          ],
          "comment": "The user to filter the memberships on."
        }
      ],
      "collection": true,
      "comment": "Returns the compact portfolio membership records for the portfolio. You must\nspecify `portfolio`, `portfolio` and `user`, or `workspace` and `user`.\n"
    },
    {
      "name": "findByPortfolio",
      "class": "get-many",
      "method": "GET",
      "path": "/portfolios/%s/portfolio_memberships",
      "params": [
        {
          "name": "portfolio",
          "type": "Gid",
          "example_values": [
            "\"36985\""
          ],
          "comment": "The portfolio for which to fetch memberships.",
          "required": true
        },
        {
          "name": "user",
          "type": "String",
          "example_values": [
            "\"14641\"",
            "\"me\"",
            "\"sashimi@asana.com\""
          ],
          "comment": "If present, the user to filter the memberships on."
        }
      ],
      "collection": true,
      "comment": "Returns the compact portfolio membership records for the portfolio.\n"
    },
    {
      "name": "findById",
      "class": "get-single",
      "method": "GET",
      "path": "/portfolio_memberships/%s",
      "params": [
        {
          "name": "portfolio_membership",
          "type": "Gid",
          "example_values": [
            "\"34729\""
          ],
          "comment": "Globally unique identifier for the portfolio membership.\n",
          "required": true
        }
      ],
      "comment": "Returns the portfolio membership record.\n"
    }
  ]
};
export = resource;