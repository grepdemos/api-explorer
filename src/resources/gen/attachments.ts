/// <reference path="../interfaces.ts" />

/**
 * This file is auto-generated by the `asana-api-meta` NodeJS package.
 * We try to keep the generated code pretty clean but there will be lint
 * errors that are just not worth fixing.
 */
/* tslint:disable:max-line-length */
var resource = <Resource>{
  "name": "attachment",
  "comment": "An _attachment_ object represents any file attached to a task in Asana,\nwhether it's an uploaded file or one associated via a third-party service\nsuch as Dropbox or Google Drive.\n",
  "properties": [
    {
      "name": "created_at",
      "type": "String",
      "example_values": [
        "'2012-02-22T02:06:58.147Z'"
      ],
      "access": "Read-only",
      "comment": "The time at which this attachment was uploaded.\n"
    },
    {
      "name": "download_url",
      "type": "String",
      "example_values": [
        "'https://www.dropbox.com/s/123/Screenshot.png?dl=1'",
        "null"
      ],
      "access": "Read-only",
      "comment": "The URL containing the content of the attachment.\n",
      "notes": [
        "May be `null` if the attachment is hosted by box. If present, this URL\nmay only be valid for 1 hour from the time of retrieval. You should avoid\npersisting this URL somewhere and just refresh it on demand to ensure you\ndo not keep stale URLs.\n"
      ]
    },
    {
      "name": "host",
      "type": "String",
      "example_values": [
        "'dropbox'"
      ],
      "access": "Read-only",
      "comment": "The service hosting the attachment. Valid values are `asana`, `dropbox`,\n`gdrive` and `box`.\n"
    },
    {
      "name": "name",
      "type": "String",
      "example_values": [
        "'Screenshot.png'"
      ],
      "access": "Read-only",
      "comment": "The name of the file.\n"
    },
    {
      "name": "parent",
      "type": "Task",
      "example_values": [
        "{ id: 1234, name: 'Bug task' }"
      ],
      "access": "Read-only",
      "comment": "The task this attachment is attached to.\n"
    },
    {
      "name": "view_url",
      "type": "String",
      "example_values": [
        "'https://www.dropbox.com/s/123/Screenshot.png'",
        "null"
      ],
      "access": "Read-only",
      "comment": "The URL where the attachment can be viewed, which may be friendlier to\nusers in a browser than just directing them to a raw file.\n"
    }
  ],
  "action_classes": [
    {
      "name": "Get single attachment",
      "url": "get-single"
    },
    {
      "name": "Get all attachments",
      "url": "get-all-task"
    },
    {
      "name": "Upload an attachment",
      "url": "upload"
    }
  ],
  "actions": [
    {
      "name": "findById",
      "class": "get-single",
      "method": "GET",
      "path": "/attachments/%d",
      "params": [
        {
          "name": "attachment",
          "type": "Id",
          "example_values": [
            "12357"
          ],
          "comment": "Globally unique identifier for the attachment.\n",
          "required": true
        }
      ],
      "comment": "Returns the full record for a single attachment.\n"
    },
    {
      "name": "findByTask",
      "class": "get-all-task",
      "method": "GET",
      "path": "/tasks/%d/attachments",
      "collection": true,
      "params": [
        {
          "name": "task",
          "type": "Id",
          "example_values": [
            "124816"
          ],
          "comment": "Globally unique identifier for the task.\n",
          "required": true
        }
      ],
      "comment": "Returns the compact records for all attachments on the task.\n"
    },
    {
      "name": "createOnTask",
      "class": "upload",
      "method": "POST",
      "path": "/tasks/%d/attachments",
      "no_code": true,
      "params": [
        {
          "name": "task",
          "type": "Id",
          "example_values": [
            "124816"
          ],
          "comment": "Globally unique identifier for the task.\n",
          "required": true
        },
        {
          "name": "file",
          "type": "File",
          "example_values": [
            "file.txt"
          ],
          "required": true,
          "comment": "The file you want to upload.",
          "notes": [
            "**When using curl:**\n\nBe sure to add an '@' before the file path, and use the --form\noption instead of the -d option.\n\nWhen uploading PDFs with curl, force the content-type to be pdf by\nappending the content type to the file path: --form\n\"file=@file.pdf;type=application/pdf\".\n"
          ]
        }
      ],
      "comment": "This method uploads an attachment to a task and returns the compact\nrecords for all attachments on the task. It is not possible to attach\nfiles from third party services such as Dropbox, Box & Google Drive via\nthe API. You must download the file content first and then upload it as any\nother attachment.\n\nThe 100MB size limit on attachments in Asana is enforced on this endpoint.\n",
      "notes": [
        "This endpoint expects a multipart/form-data encoded request containing\nthe full contents of the file to be uploaded.\n\nBelow is an example of what a well formed multipart/form-data encoded\nrequest might look like.\n\n    Authorization: Basic <BASE64_ENCODED_API_KEY> \\\n    Content-Type: multipart/form-data; boundary=<UNIQUE_BOUNDARY> \\\n    User-Agent: Java/1.7.0_76 \\\n    Host: localhost \\\n    Accept: */* \\\n    Connection: keep-alive \\\n    Content-Length: 141\n\n    --<UNIQUE_BOUNDARY> \\\n    Content-Disposition: form-data; name=\"file\"; filename=\"example.txt\" \\\n    Content-Type: text/plain\n\n    <RAW_FILE_DATA>\n\n    --<UNIQUE_BOUNDARY>--\n\nRequests made should follow the HTTP/1.1 specification that line terminators are of the form `CRLF` or `\\r\\n`\noutlined [here](http://www.w3.org/Protocols/HTTP/1.1/draft-ietf-http-v11-spec-01#Basic-Rules) in order for the server\nto reliably and properly handle the request.\n"
      ]
    }
  ]
};
export = resource;
