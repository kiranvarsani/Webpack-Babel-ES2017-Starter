import { person, sayHello, MyClass } from "./lib";
import _ from "lodash";

console.log(person.name);

console.log(sayHello(person.name));

console.log(new MyClass().sayHello(person.name));

async function getPosts() {
  const response = await fetch(
    "https://reqres.in/api/users?total_pages=1&per_page=12"
  );

  const data = await response.json();

  return data;
}

getPosts().then(posts => {
  console.log(_.flattenDeep(posts.data));
  _.forEach(posts.data, function(data) {
    $("#container").append(`<div class='col-sm-1'><img class='image-responsive' src=${data.avatar} /></div>`);
  });
});
