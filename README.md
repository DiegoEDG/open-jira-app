# Config

## Docker

**The project use Mongo 5.0.0 docker image**

Do the next command to run the container

```
docker-compose up -d
```
**-d is for detached containers**

## Declare the connection string on **.env** file

In order to connect to the DB that is running on Docker, you need to declare the connection string on the environment variables (.env file)

The name for the variable should be **MONGO_CONNECTION**



## To populate the database use the following endpoint:

```
http://localhost:3000/api/seed
```