

let first_async_error = () => {
        return new Promise((resolve, reject) => {
            reject("Something went wrong....!!");
        });
    };

    let second_async_error = () => {
        return new Promise((resolve, reject) => {
            reject("Error 404....!!");
        });
    };

    let catchAllErrors = async () => {
        try {
            await first_async_error();
        } catch (error) {
            console.log("First Error: " + error);
        }

        try {
            await second_async_error();
        } catch (error) {
            console.log("Second Error: " + error);
        }
    };

    catchAllErrors(1);


