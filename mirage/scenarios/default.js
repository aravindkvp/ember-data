export default function( server ) {

  server.db.loadData({
    superheros:[
      {
        type:'superhero',
        id: 1,
          first_name: 'Bruce',
          last_name: 'Wayne',
          nickname: 'BatMan'

      },
      {
        type:'superhero',
        id: 2,
          first_name: 'Clark',
          last_name: 'Kent',
          nickname: 'SuperMan' 
      },
      {
        type:'superhero',
        id: 3,
          first_name: 'Barry',
          last_name: 'Allen',
          nickname: 'Flash'
      },
      {
        type:'superhero',
        id: 4,
          first_name: 'Arthur',
          last_name: 'Curry',
          nickname: 'Aquaman'
      }
    ],
    names: [
      {
        type: 'names',
        id: 1,
      
          firstname: 'Ramesh',
          lastname: 'Kumar',
          age: 21,
          balance: 45000
        
      },
      {
        type: 'names',
        id: 2,
       
          firstname: 'Muthu',
          lastname: 'Pandi',
          age: 25,
          balance: 15000
        
      },
      {
        type: 'names',
        id: 3,
          firstname: 'John',
          lastname: 'Wick',
          age: 45,
          balance: 15000
        
      },
      {
        type: 'names',
        id: 4,
          firstname: 'Bruce',
          lastname: 'Wayne',
          age: 45,
          balance: 15000
        
      }
    ]
  });

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */

  // server.createList('post', 10);
}
