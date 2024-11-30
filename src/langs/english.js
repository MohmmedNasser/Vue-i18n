const english = {
    messages: {
        nav: {
            home: 'Home',
            about: 'About',
            service: 'Service',
        },
        greet: 'hello',
        welcom: 'welcom to vue',
        greetUser: 'hello {user}',
        name: '@:greet Nasser',
        namelower: '@.upper:greet {user}',
        nameupper: '@.lower:greet {user}',
        namecapitalize: '@.capitalize:greet {user}',
        customModifiers: '@.snakeCase:welcom {user}',

        car: 'no cars | car | cars',
        carCount: 'no cars | one car | {count} cars',
        carArguments: 'no cars | {n} car | {n} cars',

        email: "{account}{'@'}{domain}",
    },
    dateTimeFormats: {
        short: {
            year: 'numeric', month: 'short', day: 'numeric'
        },
        long: {
            year: 'numeric', month: 'short', day: 'numeric',
            weekday: 'short', hour: 'numeric', minute: 'numeric'
        }
    },

    numberFormats: {
        currency: {
            style: 'currency', currency: 'USD', notation: 'standard'
        },
        decimal: {
            style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2
        },
        percent: {
            style: 'percent', useGrouping: false
        }
    },
};

export default english