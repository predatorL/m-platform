import common from './common';
import index from './index';

let store = {
    common
};

let targets = {};
Object.entries(store).map(([field, obj]) => {
    targets[`${field}Store`] = obj;
});

export default targets;
