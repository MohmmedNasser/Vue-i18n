const japanese = {
    messages: {
        nav: {
            home: "ホーム",
            about: "会社概要",
            service: "サービス",
        },
        greet: 'こんにちは',
        welcom: 'ようこそVueへ',
        greetUser: 'こんにちは {user}',
        name: '@:greet Nasser',
        namelower: '@.upper:greet {user}',
        nameupper: '@.lower:greet {user}',
        namecapitalize: '@.capitalize:greet {user}',
        customModifiers: '@.snakeCase:welcom {user}',

        car: '車はありません | 車 | 車',
        carCount: '車はありません | 車1台 | {count} 車',
        carArguments: '車はありません | {n} 台 | {n} 車',

        email: "{account}{'@'}{domain}",

    },

    dateTimeFormats: {
        short: {
            year: 'numeric', month: 'short', day: 'numeric'
        },
        long: {
            year: 'numeric', month: 'short', day: 'numeric',
            weekday: 'short', hour: 'numeric', minute: 'numeric', hour12: true
        }
    },

    numberFormats: {
        currency: {
            style: 'currency', currency: 'JPY', useGrouping: true, currencyDisplay: 'symbol'
        },
        decimal: {
            style: 'decimal', minimumSignificantDigits: 3, maximumSignificantDigits: 5
        },
        percent: {
            style: 'percent', useGrouping: false
        }
    },

};

export default japanese