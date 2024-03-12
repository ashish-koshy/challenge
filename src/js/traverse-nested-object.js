(() => {
    const path = 'a.b.c.d.e';
    const data = {
        a: {
            b: {
                c: {
                    d: {
                        e: 'Found!',
                    }
                }
            }
        }
    };

    const map = path.split('.');

    const find = (object, mapIndex) => {
        const key = map[mapIndex];
        const value = object[key];
        if (typeof value === 'string')  {
            console.log(value);
            return;             
        }
        find(value, mapIndex + 1);
    }
    
    find(data, 0);
})();