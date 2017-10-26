import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod, XHRBackend, RequestOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

export function demandBackendFactory(backend: MockBackend, options: BaseRequestOptions,
    realBackend: XHRBackend) {

    let demands: any[] = JSON.parse(localStorage.getItem('demands')) || [];
    backend.connections.subscribe((connection: MockConnection) => {

        setTimeout(() => {

            if (connection.request.url.endsWith('/api/getDemands') &&
                connection.request.method === RequestMethod.Get) {
                connection.mockRespond(new Response(new ResponseOptions({ status: 200, body: demands })));
                return;
            }


            // create Demands
            if (connection.request.url.endsWith('/api/createDemand') &&
                connection.request.method === RequestMethod.Post) {

                let newDemand = JSON.parse(connection.request.getBody());
                newDemand.demandID = Math.ceil(Math.random()*100); // Random Number              
                demands.push(newDemand);
                localStorage.setItem('demands', JSON.stringify(demands));
                connection.mockRespond(new Response(new ResponseOptions({ status: 200 })));
                return;
            }

            // get Demands by id
            if (connection.request.url.match(/\/api\/getDemandById\/\d+$/) &&
                connection.request.method === RequestMethod.Get) {

                let urlParts = connection.request.url.split('/');
                let id = parseInt(urlParts[urlParts.length - 1]);
                let matchedDemands = demands.filter(demand => { return demand.demandID === id; });
                let demand = matchedDemands.length ? matchedDemands[0] : null;
                connection.mockRespond(new Response(new ResponseOptions({ status: 200, body: demand })));

                return;
            }

            // delete Demand
            if (connection.request.url.match(/\/api\/deleteDemand\/\d+$/) &&
                connection.request.method === RequestMethod.Delete) {

                let urlParts = connection.request.url.split('/');
                let demandNo = parseInt(urlParts[urlParts.length - 1]);
                for (let i = 0; i < demands.length; i++) {
                    let demand = demands[i];
                    if (demand.demandID === demandNo) {
                        demands.splice(i, 1);
                        localStorage.setItem('demands', JSON.stringify(demands));
                        break;
                    }
                }
                connection.mockRespond(new Response(new ResponseOptions({ status: 200 })));
                return;
            }

            //update Demand
            if (connection.request.url.endsWith('/api/updateDemand') &&
                connection.request.method === RequestMethod.Put) {

                let updateDemand = JSON.parse(connection.request.getBody());
                let id = updateDemand.deamndID;
                for (let i = 0; i < demands.length; i++) {
                    let demand = demands[i];
                    if (demand.deamndID === id) {
                        demands.splice(i, 1);
                        demands.push(updateDemand);
                        localStorage.setItem('demands', JSON.stringify(demands));
                        connection.mockRespond(new Response(new ResponseOptions({ status: 200 })));
                        break;
                    }
                }

                return;
            }
        });
    });
    return new Http(backend, options);
};

export let DemandBackendProvider = {
    provide: Http,
    useFactory: demandBackendFactory,
    deps: [MockBackend, BaseRequestOptions, XHRBackend]
};