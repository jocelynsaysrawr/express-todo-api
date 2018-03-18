# Buzz Word Bingo

**A Buzz Word Tracker**

You're being asked to write a buzzword tracker that can keep track of buzzwords, the amount of points for a buzzword being spoken aloud, and the total amount of points overall. This system should keep track of **at most 5 buzzwords**. The intention is to load the system with at most 5 buzzwords and if any of those 5 buzzwords are spoken during a conversation, the matching amount of points is added to a "total point count" managed by the system.

# Welcome to Team Buzz™

Our system has been getting a lot of traction and we need to rebuild the API server with NodeJS
to handle all the connections, we need you to create the server using **ExpressJS**. Our CTO will provide you with the specs below.

**At this time:**

* you will not build the front-end.
* you will not implement a database.

## The Specs

We like RESTful architecture. We like CRUD. As always, data will be sent to the server as `x-www-form-urlencoded`.

### Creating Buzzwords

This is how your buzzword objects should look like after receiving a `POST` to the URI `/buzzword`

```javascript
{
  buzzWord: String,
  points: Number
}
```

You will store these objects in memory for the time being. Meaning that if the **server** crashes and after restarting and listening again, your app will have no buzzword objects, no collection containing buzzword objects, no scores, nada.

**Routes overview table:**

| **METHOD** **ROUTE (URI)** | **BODY**                                   | **RESPONSE**                                                                       | **Action**                                                                                                                                       |
| -------------------------- | ------------------------------------------ | ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `GET /`                    | empty                                      | render HTML `index.html`                                                           | serves the `index.html`                                                                                                                          |
| `GET /buzzwords`           | empty                                      | `{ "buzzWords": [...] }` A JSON response containing an array of current buzz words | Retrieves all buzzwords                                                                                                                          |
| `POST /buzzwords`          | `{ "buzzWord": String, "points": Number }` | `{ "success": true }`                                                              | Creates a new buzzword object. Returns `true` if successful else `false`                                                                         |
| `PUT /buzzwords`           | `{ "buzzWord": String, "points": Number }` | `{ "success": true }`                                                              | Updates a buzzword's point value. Returns `true` if successful else `false`                                                                      |
| `DELETE /buzzwords`        | `{ "buzzWord": String }`                   | `{ "success": true }`                                                              | Delete a buzzword. Returns `true` if successful else `false`                                                                                     |
| `POST /reset`              | `{ "reset": true }`                        | `{ "success": true }`                                                              | Resets the server. All buzzwords are removed and total scores reset to `0`                                                                       |
| `POST /heard`              | `{ "buzzword": String }`                   | `{ "totalScore": Number }`                                                         | Marks that a buzzword has been heard and should update the total score. Returns the new total score if successful otherwise returns just `false` |

## Routes detailed

`GET /`: Serves the static file `index.html` which should be located in your `public/` directory. For now just have a stub HTML file.

`GET /buzzwords`: Returns a JSON response containing single key, `buzzWords` which will be an array containing objects (see [Buzz Word Object Section](https://gist.github.com/sgnl/378bd9b54c566f0f22ef#buzz-word-object) for details)

`POST /buzzwords`: Creates a new buzz word object. The body **should** have these keys:

* `buzzWord` which contains the buzz word as a `String` and
* `points` property is how many points that word is worth when scored, this value is of data-type `Number`.
  Example:
  if `{ "buzzword": "Agile is amazing", "score": 1000 }` is sent to this route then the server will create a new [buzz word object](https://github.com/expressjs/body-parser#bodyparserurlencodedoptions) and add it to a collection.

`PUT /buzzwords`: Updates a buzz word's `points` value. The body **should** contain these keys:

* `buzzWord` which is the buzz word to modify as a `String`.
* `points` Changes the value of the buzz word's points property, this should be of datatype `Number`.  
  Example:  
  if `{ "buzzWord": "Social-Mobile", "points": 100 }` is sent to this route then the server will find the buzz word "Social-Mobile" and change it's `points` property to `100`. It should then return `true`. If the buzzword is not found, `false` should be returned.

`DELETE /buzzwords`: Deletes a buzz word from the collection.

`POST /reset`: Reset the total score to 0 and remove all buzzwords from the server.

`POST /heard`: Increments the total score by the point value assigned to the buzzword given.

## Score?

For now, it's up to you on how you keep track of the user's score.

## Middleware to use

[Body-Parser](https://github.com/expressjs/body-parser) - Use this module to help parse the `data` coming from a request. Focus on the **[urlencodedoptions](https://github.com/expressjs/body-parser#bodyparserurlencodedoptions)** section of the README, use the `extended: true` option. Take some time to scan through the documentation. What is `body-parser` module doing for us? Is this module doing something we previously had to do manually?

## Getting Started

1.  Fork and clone this repo.
1.  You'll be using `git` and `npm` so be sure to **initialize** those tools before you use them.
1.  Install the packages you need
1.  Use **Postman** to test your routes.
1.  Remember to commit often!
