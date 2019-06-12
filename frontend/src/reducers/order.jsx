const order = (order = {}, action) => {
    switch (action.type) {
        case 'ADD_ORDER':
            console.info(action.orderObject)
            fetch('/public/api/customer/order/add', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: action.orderObject.NameInput,
                    mail: action.orderObject.EmailInput,
                    phone: action.orderObject.PhoneNumberInput,
                    message: action.orderObject.MessageInput
                })
            }).then(function (data) {
                console.info(data);
                action.orderObject.showAlert();
            });
            return action.orderObject;
        default:
            return order
    }
}

export default order