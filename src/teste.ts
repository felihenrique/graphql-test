import Dataloader from 'dataloader';

async function batchFunc(data: RequestData[]) {
    console.log(data);
    
    return Promise.resolve([1, 2, null, 4]);
}

interface RequestData {
    id: string;
    projection?: { [field: string]: 1 };
}

const userLoader = new Dataloader<RequestData, number>(batchFunc);

(async () => {
    console.log(await userLoader.loadMany([{ id: "10" }]));
})();

(async () => {
    console.log(await userLoader.load({ id: "11" }));
})();

(async () => {
    console.log(await userLoader.load({ id: "12" }));
})();

(async () => {
    console.log(await userLoader.load({ id: "13" }));
})();