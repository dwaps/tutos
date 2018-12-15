#!/usr/bin/env node

const fs = require('fs')

// Custom modules
const iteratorFiles = require('./iteratorFiles.js').iteratorFiles;

// Declarations
const separatorContentFile = '------'

String.prototype.format = function() {
    var formatted = this
    for( var arg in arguments ) {
        formatted = formatted.replace("{" + arg + "}", arguments[arg])
    }
    return formatted
}

prepareFiles()

// Functions
function prepareFiles() {
    let filesToRead = []
    let extFilesToRead = []

    for (let [fileType, file] of iteratorFiles) {
        if (file.exists) {
            filesToRead.push(file.path)
            extFilesToRead.push(fileType)
        }
    }
    
    buildFiles(filesToRead, extFilesToRead)
}

function buildFiles(filesToRead, extFilesToRead, content, cpt) {
    let error = 'Aucun fichier à lire...'
    content = content || ""
    cpt = cpt || 0

    if (filesToRead.length > cpt) {
        fs.readFile(filesToRead[cpt], 'utf-8', (err, data) => {
            if (!err) content += `${data}${separatorContentFile}`
            else console.log(err)

            buildFiles(filesToRead, extFilesToRead, content, ++cpt)
        })
    }
    else {
        if (cpt == 0) {
            console.log(error)
        }
        else {
            console.log(content)
            content = content.split(separatorContentFile)
            content.pop()
            for (let i = 0; i < content.length; i++) {
                const filename = `${extFilesToRead[i]}Code.dwaps`

                fs.writeFile(`../../${filename}`, content[i], 'utf-8', err => {
                    if (err) console.log(`Le fichier ${filename} n'a pas pu être créé !`)
                    else console.log(`Création de ${filename}...`)
                })
            }
        }
    }
}