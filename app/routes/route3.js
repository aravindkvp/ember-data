import Route from '@ember/routing/route';

export default Route.extend({
    init(){
        let nodeA = this.store.createRecord('node',{
            name: 'node-A',
            id: '1',
        });
        let nodeB = this.store.createRecord('node',{
            name: 'node-B',
            id: '2',
            parent: nodeA
        });
        let nodeC = this.store.createRecord('node',{
            name: 'node-C',
            parent: nodeA
        });
        let nodeD = this.store.createRecord('node',{
            name: 'node-D',
            parent: nodeB
        });
        let nodeE = this.store.createRecord('node',{
            name: 'node-E',
            parent: nodeB
        });
        let nodeF = this.store.createRecord('node',{
            name: 'node-F',
            parent: nodeB
        });
        let nodeG = this.store.createRecord('node',{
            name: 'node-G',
            parent: nodeC
        });
        let nodeH = this.store.createRecord('node',{
            name: 'node-H',
            parent: nodeC
        });
        let nodeI = this.store.createRecord('node',{
            name: 'node-I',
            parent: nodeE
        });
        let nodeJ = this.store.createRecord('node',{
            name: 'node-J',
            parent: nodeE
        });
        let nodeK = this.store.createRecord('node',{
            name: 'node-K',
            parent: nodeG
        });  
        nodeA.save();
        nodeB.save();
        nodeC.save();
        nodeD.save();
        nodeE.save();
        nodeF.save();
        nodeG.save();
        nodeH.save();
        nodeI.save();
        nodeJ.save();
        nodeK.save();

       let user = this.store.createRecord('user',{
            id: 1,
            name: 'Rajesh'
        });
        let payment1 = this.store.createRecord('payment-method-cc',{
            id: 1,
            last4: '3425',
            type:'payment-method-cc'
        });
        let payment2 = this.store.createRecord('payment-method-paypal',{
            id: 1,
            linkedEmail: 'aravindkvp.aravind@gmail.com',
            type: 'payment-method-paypal'
        });
        let payment3 = this.store.createRecord('payment-method-cc',{
            id: 2,
            last4: '6423',
            type:'payment-method-cc'
        });

        user.get('paymentMethods').pushObject(payment1);
        user.get('paymentMethods').pushObject(payment2);
        user.get('paymentMethods').pushObject(payment3);


        this.store.push({
            data: [{
              id: 2,
              type: 'user',
              attributes: {
                name: 'Vijay'
              },
              relationships: {}
            }, {
              id: 3,
              type: 'user',
              attributes: {
                name: 'Vishnu'
              },
              relationships: {}
            }]
          });

       /*   this.store.push(
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
                                "type": "payment-method-apple-pay"
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
                    "type": "payment-method-apple-pay",
                    "attributes": {
                        "last4": "5513"
                    }
                }]
            }
          );*/
          

    },
    model(){
       // console.log(this.store.peekRecord('user',1,{include: 'paymentMethods'}));
        return this.store.peekRecord('user',1,{include: 'paymentMethods'});
    }
});
