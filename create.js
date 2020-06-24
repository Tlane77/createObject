const veryImportantInfo = Object.create(null, {
    socialSecurity: {
        value: "934-11-0201",
        writable: false
    },
    accountNumber: {
        value: "4483271255",
        writable: false
    },
    routingNumber: {
        value: "458979043",
        writable: false
    }
})

veryImportantInfo.socialSecurity = "haxx0r attack"
console.log(veryImportantInfo.socialSecurity)    // 934-11-0201  --> It didn't change!
