export default function() {
  this.namespace = '/api';

  this.get('/superheroes/:id',function(schema,request){
    let superhero = schema.superheros.find(request.params.id);
    return superhero;
  });

  this.get('/superheroes',function(schema){
    let obj = schema.superheros.all();
    
    return obj;
  });

  this.post('/superheroes',function(schema,request){
    let attrs = JSON.parse(request.requestBody).superheros;
    return schema.superheros.create(attrs);
  });

  this.patch('/superheroes/:id', function(schema, request) {
    let id = request.params.id;
    let attrs = this.normalizedRequestAttrs();
  
    return schema.superheros.find(id).update(attrs);
  });

  this.del('/superheroes/:id', function(schema, request){
    let id = request.params.id;
  
    schema.superheros.find(id).destroy();
  });

  this.get('/comments/:id',function(schema,request){
    let comment = schema.comments.find(request.params.id);
    return comment;
  });

  this.post('/comments',function(schema,request){
    let attrs = JSON.parse(request.requestBody).comments;
    return schema.comments.create(attrs);
  });

  this.get('/colors/:id',function(schema,request){
    let colors = schema.colors.find(request.params.id);
    return colors;
  });

  this.post('/colors',function(schema,request){
    let attrs = JSON.parse(request.requestBody).colors;
    return schema.colors.create(attrs);
  });

  this.get('/nodes/:id',function(schema,request){
    let node = schema.nodes.find(request.params.id);
    return node;
  });

  this.post('/nodes',function(schema,request){
    let attrs = JSON.parse(request.requestBody).comments;
    return schema.nodes.create(attrs);
  });

  this.get('/users/:id',function(schema,request){
    return [
      {
        "data": {
            "id": "8675309",
            "type": "user",
            "attributes": {
                "name": "Anfanie Farmeo"
            },
            "relationships": {
                "payment-methods": {
                    "data": [{
                        "id": "1",
                        "type": "payment-method-paypal"
                    }, {
                        "id": "2",
                        "type": "payment-method-cc"
                    }, {
                        "id": "3",
                        "type": "payment-method-cc"
                    }]
                }
            }
        },
        "included": [{
            "id": "1",
            "type": "payment-method-paypal",
            "attributes": {
                "linked-email": "ryan@gosling.io"
            }
        }, {
            "id": "2",
            "type": "payment-method-cc",
            "attributes": {
                "last4": "1335"
            }
        }, {
            "id": "3",
            "type": "payment-method-cc",
            "attributes": {
                "last4": "5513"
            }
        }]
    }
    ]
  });

  this.get('/names',function (schema,request) { 
    if(request.queryParams.age != null){
      if(request.queryParams.singlerecord == 'true'){
        return schema.names.findBy({age: request.queryParams.age});
      }
      else{
        return schema.names.where(request.queryParams);
      }
    }
    else{
      //console.log(schema.names.all());
      return schema.names.all();
    }
   })

   this.get('/names/:id',function(schema,request){
    let name = schema.names.find(request.params.id);
    return name;
  });

  

 /* this.get('/names',function(schema,request){
    return {
      data:[
        {
          type: 'names',
          id: 1,
          attributes:{
            firstname: 'Ramesh',
            lastname: 'Kumar',
            age: 21,
            balance: 45000
          }
        },
        {
          type: 'names',
          id: 2,
          attributes:{
            firstname: 'Muthu',
            lastname: 'Pandi',
            age: 25,
            balance: 15000
          }
        },
        {
          type: 'names',
          id: 3,
          attributes:{
            firstname: 'John',
            lastname: 'Wick',
            age: 45,
            balance: 15000
          }
        },
        {
          type: 'names',
          id: 4,
          attributes:{
            firstname: 'Bruce',
            lastname: 'Wayne',
            age: 45,
            balance: 15000
          }
        }
      ]
    };
  });*/
  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    https://www.ember-cli-mirage.com/docs/route-handlers/shorthands
  */
}
