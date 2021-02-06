# References

docker-compose up
docker-compose up -p


### Create register
curl -X POST \
  http://172.21.0.3:3000/ \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/x-www-form-urlencoded' \
  -H 'postman-token: 949dbd92-c24b-25af-dbc2-ba59785fbbdc' \
  -d 'name=david&email=david%40gmail.com&phone=111111&place=here%20or%20there'


### Endpoints

POST /adress/{id} => get one row
GET /adress => list all rows
PUT /adress => insert one row
DELETE /adress/{id} => remove an item



### Useful commands

  ```
  docker ps
  docker network ls
  ```
