const data = {
  "blocks": [
    {
      "type": "header",
      "data": {
        "text": "Editor.js",
        "level": 2
      }
    },
    {
      "type" : "paragraph",
      "data" : {
        "text" : "Hey. Meet the new Editor. On this page you can see it in action — try to edit this text. Source code of the page contains the example of connection and configuration."
      }
    },
    {
      "type": "header",
      "data": {
        "text": "Key features",
        "level": 3
      }
    },
    {
      "type" : "list",
      "data" : {
        "style" : "unordered",
        "items" : [
          {
            "content": "Apples",
            "items": [
              {
                "content": "Red",
                "items": []
              },
              {
                "content": "Green",
                "items": []
              },
            ]
          },
          {
            "content": "Bananas",
            "items": [
              {
                "content": "Yellow",
                "items": []
              },
            ]
          }
        ]
      }
    },
    {
      "type" : "checklist",
      "data" : {
        "items" : [
          {
            "text" : "This is a block-styled editor",
            "checked" : true
          },
          {
            "text" : "Clean output data",
            "checked" : false
          },
          {
            "text" : "Simple and powerful API",
            "checked" : true
          }
        ]
      }
    },
    {
      "type": "header",
      "data": {
        "text": "What does it mean «block-styled editor»",
        "level": 3
      }
    },
    {
      "type" : "paragraph",
      "data" : {
        "text" : "There are dozens of &#x3C;a href=&#x22;https://github.com/editor-js&#x22;&#x3E;ready-to-use Blocks&#x3C;/a&#x3E; and the &#x3C;a href=&#x22;https://editorjs.io/creating-a-block-tool&#x22;&#x3E;simple API&#x3C;/a&#x3E; for creation any Block you need. For example, you can implement Blocks for Tweets, Instagram posts, surveys and polls, CTA-buttons and even games."
      }
    },
    {
      "type": "header",
      "data": {
        "text": "What does it mean clean data output",
        "level": 3
      }
    },
    {
      "type" : "paragraph",
      "data" : {
        "text" : "Classic WYSIWYG-editors produce raw HTML-markup with both content data and content appearance. On the contrary, Editor.js outputs JSON object with data of each Block. You can see an example below"
      }
    },
    {
      "type" : "paragraph",
      "data" : {
        "text" : "Given data can be used as you want: render with HTML for &#x3C;code class=&#x22;inline-code&#x22;&#x3E;Web clients&#x3C;/code&#x3E;, render natively for &#x3C;code class=&#x22;inline-code&#x22;&#x3E;mobile apps&#x3C;/code&#x3E;, create markup for &#x3C;code class=&#x22;inline-code&#x22;&#x3E;Facebook Instant Articles&#x3C;/code&#x3E; or &#x3C;code class=&#x22;inline-code&#x22;&#x3E;Google AMP&#x3C;/code&#x3E;, generate an &#x3C;code class=&#x22;inline-code&#x22;&#x3E;audio version&#x3C;/code&#x3E; and so on."
      }
    },
    {
      "type" : "paragraph",
      "data" : {
        "text" : "Clean data is useful to sanitize, validate and process on the backend."
      }
    },
    {
      "type" : "delimiter",
      "data" : {}
    },
    {
      "type" : "paragraph",
      "data" : {
        "text" : 'Create a directory for your module, enter it and run <code class="inline-code">npm init</code> command.'
      }
    },
    {
      "type" : "quote",
      "data" : {
        "text" : "The unexamined life is not worth living.",
        "caption" : "Socrates",
        "alignment" : "left"
      }
    },
    {
      "type" : "paragraph",
      "data" : {
        "text" : "We have been working on this project more than three years. Several large media projects help us to test and debug the Editor, to make its core more stable. At the same time we significantly improved the API. Now, it can be used to create any plugin for any task. Hope you enjoy. 😏"
      }
    },
    {
      "type" : "table",
      "data" : {
        "withHeadings": true,
        "content" : [ [ "Kine", "Pigs", "Chicken" ], [ "1 pcs", "3 pcs", "12 pcs" ], [ "100$", "200$", "150$" ] ]
      }
    },
    {
      "type": "image",
      "data": {
        "file": {
          "url" : "logo.png",
          "size": 91,
          "name": "logo.png",
          "extension": "png"
        },
        "caption": "로그 이미지 입니다.",
        "stretched": false,
        "withBorder": false,
        "withBackground": true
      }
    },
    {
      "type" : "attaches",
      "data" : {
        "file": {
          "url" : "logo.png",
          "size": 91,
          "name": "logo.png",
          "extension": "png"
        },
        "title": "Logo"
      }
    },
    {
      "type" : "code",
      "data" : {
        "code": "body {\n font-size: 14px;\n line-height: 16px;\n}"
      }
    }
  ]
}

export default data
