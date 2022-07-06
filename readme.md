# Jobly API

This is the Express backend for Jobly, version 2.

To run this:

    node server.js
    
To run the tests:

    jest -i

# How to Use the API:

## Auth Routes

### Login
POST `/auth/token`

### Login Schema
| key | type | desc
| --- | --- | --- |
| username | string | account name |
| password | string | account password |


### Register
POST `/auth/register`

### Register Schema
| key | type | desc
| --- | --- | --- |
| username | string | choose account name |
| password | string | choose account password |
| firstName | string | user's first name |
| lastName | string | user's last name |
| email | string | user email |

