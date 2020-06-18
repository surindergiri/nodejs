const sanitizer = require('sanitizer');

module.exports = {
    xssMiddleware: (req, res, next) => {
        console.log('\n middlewareBody initially: ', req.body);
        const reqBodyObj = {}
        if (!isEmpty(req.body)) {
            const bodyObj = req.body;
            // var userName = sanitizer.escape(req.body.name);
            for (const prop in bodyObj) {
                // console.log('\n prop: ', prop);
                // const reqInput = `.${prop}`;
                console.log('\n req.body bodyObj[prop]: ', bodyObj[prop]);
                const sanitizedElement = sanitizer.escape(bodyObj[prop]);
                console.log('\n sanitizedElement: ', sanitizedElement);

                // reqBodyObj + `${reqInput}` = sanitizedElement;
                bodyObj[prop] = sanitizedElement;
            }
            // req.body = reqBodyObj;
            // console.log('Object missing');
        }

        function isEmpty(obj) {
            for (var prop in obj) {
                if (obj.hasOwnProperty(prop))
                    return false;
            }
            return JSON.stringify(obj) === JSON.stringify({});
        }
        next()
    }
}