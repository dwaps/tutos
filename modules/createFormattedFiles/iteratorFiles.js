const files = {
    html: {
        path: '../../index.html',
        exists: true,
    },
    css: {
        path: '../../index.css',
        exists: true,
    },
    js: {
        path: '../../index.js',
        exists: true,
    },
}

exports.iteratorFiles = {
    *[Symbol.iterator]() {
        yield* Object.entries(files)
    }
}