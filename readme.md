## Description

[FACEBOOK PUPPETEER TASK](https://github.com/flames-web/Tobam-Task.git) SHARE RECENT POST TO ALL GROUPS USING PUPPETEER

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start


 #BaseUrl
 baseUrl = http://localhost:3000 


```

## ENDPOINTS

<details>
<summary>POSTS</summary>

  <details>
  <summary>SHARE POST TO GROUPS</summary>

    Request
    POST {baseUrl}/facebook_post
    Request Body
    email:"facebook_email",
    pass:"facebook_pass",
    profileId:"profileId"


    Response
    {
      "message":"Posts shared sucessfully to groups"
    }



    Errors
    500 Internal Server Error - Something went wrong
    200- Posts shared sucessfully to groups

  </details>

 