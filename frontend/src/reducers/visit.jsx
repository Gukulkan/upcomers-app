const visit = (visit = {}, action) => {
    switch (action.type) {
        case 'ADD_VISIT':
            fetch('/public/api/visit/add', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({})
            }).then(function (data) {
                console.info(data);
            });
            return visit;
        default:
            return visit
    }
};

export default visit