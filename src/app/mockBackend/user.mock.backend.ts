import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod, XHRBackend, RequestOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

export function userBackendFactory(backend: MockBackend, options: BaseRequestOptions,
    realBackend: XHRBackend) {

    let users: any[] = JSON.parse(localStorage.getItem('users')) || [];
    let activeUsers:any[] = JSON.parse(localStorage.getItem('activeUsers')) || [];
    let inactiveUsers:any[] = JSON.parse(localStorage.getItem('inactiveUsers')) || [];
    backend.connections.subscribe((connection: MockConnection) => {

        setTimeout(() => {

            if (connection.request.url.endsWith('/api/getUsers') &&
                connection.request.method === RequestMethod.Get) {
                connection.mockRespond(new Response(new ResponseOptions({ status: 200, body: users })));
                return;
            }


            // create users
            if (connection.request.url.endsWith('/api/createUser') &&
                connection.request.method === RequestMethod.Post) {

                let newuser = JSON.parse(connection.request.getBody());
                newuser.userID = Math.ceil(Math.random()*100); // Random Number              
                users.push(newuser);
                localStorage.setItem('users', JSON.stringify(users));
                connection.mockRespond(new Response(new ResponseOptions({ status: 200 })));
                return;
            }

            // get users by id
            if (connection.request.url.match(/\/api\/getUserById\/\d+$/) &&
                connection.request.method === RequestMethod.Get) {

                let urlParts = connection.request.url.split('/');
                let id = parseInt(urlParts[urlParts.length - 1]);
                let matchedUsers = users.filter(user => { return user.userID === id; });
                let user = matchedUsers.length ? matchedUsers[0] : null;
                connection.mockRespond(new Response(new ResponseOptions({ status: 200, body: user })));

                return;
            }

            // delete user
            if (connection.request.url.match(/\/api\/deleteUser\/\d+$/) &&
                connection.request.method === RequestMethod.Delete) {
                let urlParts = connection.request.url.split('/');
                
                let userNo = parseInt(urlParts[urlParts.length - 1]);
                for (let i = 0; i < users.length; i++) {
                    let user = users[i];
                    if (user.userID === userNo) {
                        users.splice(i, 1);
                        localStorage.setItem('users', JSON.stringify(users));
                        break;
                    }
                }
                connection.mockRespond(new Response(new ResponseOptions({ status: 200 })));
                return;
            }

            //update user
            if (connection.request.url.endsWith('/api/updateUser') &&
                connection.request.method === RequestMethod.Put) {

                let updateuser = JSON.parse(connection.request.getBody());
                let id = updateuser.userID;
                for (let i = 0; i < users.length; i++) {
                    let user = users[i];
                    if (user.userID === id) {
                        // users.splice(i, 1);
                        //users.push(updateuser);
                        localStorage.setItem('users', JSON.stringify(users));
                        connection.mockRespond(new Response(new ResponseOptions({ status: 200 })));
                        break;
                    }
                }

                return;
            }
            // activeUsers 
            //  passing to Active tab
            if (connection.request.url.endsWith('/api/postactiveUser') &&
                connection.request.method === RequestMethod.Post) {

                let newuser = JSON.parse(connection.request.getBody());
                // newuser.userID = Math.ceil(Math.random()*100); // Random Number              
                activeUsers.push(newuser);
                localStorage.setItem('activeUsers', JSON.stringify(activeUsers));
                connection.mockRespond(new Response(new ResponseOptions({ status: 200 })));
                return;
            }
            // getActive Users
             if (connection.request.url.endsWith('/api/getActiveUsers') &&
                connection.request.method === RequestMethod.Get) {
                
                connection.mockRespond(new Response(new ResponseOptions({ status: 200, body: activeUsers })));
                return;
            }
              
              //delete a active user
               
                if (connection.request.url.match(/\/api\/deleteActiveUser\/\d+$/) &&
                connection.request.method === RequestMethod.Delete) {
                
                let urlParts = connection.request.url.split('/');
                
                let userNo = parseInt(urlParts[urlParts.length - 1]);
                for (let i = 0; i < activeUsers.length; i++) {
                    let user = activeUsers[i];
                    if (user.userID === userNo) {
                        activeUsers.splice(i, 1);
                        localStorage.setItem('activeUsers', JSON.stringify(activeUsers));
                        break;
                    }
                }
                connection.mockRespond(new Response(new ResponseOptions({ status: 200 })));
                return;
            }
             // InactiveUsers 
            //  passing to InActive tab
            if (connection.request.url.endsWith('/api/postinactiveUser') &&
                connection.request.method === RequestMethod.Post) {

                let newuser = JSON.parse(connection.request.getBody());
                // newuser.userID = Math.ceil(Math.random()*100); // Random Number              
                inactiveUsers.push(newuser);
                localStorage.setItem('inactiveUsers', JSON.stringify(inactiveUsers));
                connection.mockRespond(new Response(new ResponseOptions({ status: 200 })));
                return;
            }
            // getInActive Users
             if (connection.request.url.endsWith('/api/getInactiveUsers') &&
                connection.request.method === RequestMethod.Get) {
                
                connection.mockRespond(new Response(new ResponseOptions({ status: 200, body: inactiveUsers })));
                return;
            }
            // ReactiveUsers
            // passing again to Active tab
           if(connection.request.url.endsWith('/api/postReactiveUsers') &&
           connection.request.method === RequestMethod.Post){
               let newUser = JSON.parse(connection.request.getBody());
               activeUsers.push( newUser);
               localStorage.setItem('activeUsers', JSON.stringify(activeUsers));
               connection.mockRespond(new Response(new ResponseOptions({ status: 200 })));
               return;
           }
           // Delete inacitve user
           if (connection.request.url.match(/\/api\/deleteInactiveUser\/\d+$/) &&
           connection.request.method === RequestMethod.Delete) {
           
           let urlParts = connection.request.url.split('/');
           
           let userNo = parseInt(urlParts[urlParts.length - 1]);
           for (let i = 0; i < inactiveUsers.length; i++) {
               let user = inactiveUsers[i];
               if (user.userID === userNo) {
                   inactiveUsers.splice(i, 1);
                   localStorage.setItem('activeUsers', JSON.stringify(inactiveUsers));
                   break;
               }
           }
           connection.mockRespond(new Response(new ResponseOptions({ status: 200 })));
           return;
       }
        });
    });
    return new Http(backend, options);
};

export let UserBackendProvider = {
    provide: Http,
    useFactory: userBackendFactory,
    deps: [MockBackend, BaseRequestOptions, XHRBackend]
};