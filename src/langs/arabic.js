const arabic = {
    messages: {
        nav: {
            home: 'الرئيسية',
            about: 'من نحن',
            service: 'خدماتنا',
        },
        greet: 'مرحبا',
        welcom: 'اهلا بك في فيو',
        greetUser: 'مرحبا {user}',
        name: '@:greet Nasser',
        namelower: '@.upper:greet {user}',
        nameupper: '@.lower:greet {user}',
        namecapitalize: '@.capitalize:greet {user}',
        customModifiers: '@.snakeCase:welcom {user}',

        car: 'لا يوجد سيارات | سيارة | سيارات',
        carCount: 'لا يوجد سيارات | سيارة واحدة | {count} سيارات',
        carArguments: 'لا يوجد سيارات | {n} سيارة | {n} سيارات',

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
            style: 'currency', currency: 'SAR', notation: 'standard'
        },
        decimal: {
            style: 'decimal', minimumFractionDigits: 1, maximumFractionDigits: 1
        },
        percent: {
            style: 'percent', useGrouping: false
        }
    },
};

export default arabic