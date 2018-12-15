const fs = require('fs')
const bodyParser = require('body-parser')
const express = require('express')
const app = express()

// Custom modules
const iteratorFiles = require('./iteratorFiles.js').iteratorFiles;

const separatorContentFile = '------'

app.use(bodyParser.urlencoded({extended: false}))

String.prototype.format = function() {
    var formatted = this;
    for( var arg in arguments ) {
        formatted = formatted.replace("{" + arg + "}", arguments[arg]);
    }
    return formatted;
};

app.get('/', (req, res) => {
    let filesToRead = []
    let extFilesToRead = []

    for (let [fileType, file] of iteratorFiles) {
        if (file.exists) {
            filesToRead.push(file.path)
            extFilesToRead.push(fileType)
        }
    }
    
    res.set({'Content-Type': 'text/plain'})
    buildFiles(filesToRead, extFilesToRead, res)
})

app.get('/form-to-json', (req, res) => {
    res.send(`
        <form action="/to-json" method="POST">
            <select name="codetype">
                <option value="html">HTML</option>
                <option value="css">CSS</option>
                <option value="js">JS</option>
            </select>
            <textarea cols="90" rows="30" name="code"></textarea><br>
            <input type="submit" value="convert" />
        </form>
    `)
})

app.post('/to-json', (req, res) => {
    const fileName = `${req.body.codetype}Code.dwaps`
    let lineNumber = '<small style="display:inline-block;width:20px">{0}</small><span style="background:#aaa">&nbsp;&nbsp;&nbsp;</span>&nbsp;&nbsp;', cpt = 0

    let content = lineNumber.format(++cpt) + req.body.code.replace(/#/g, e => {
        return '<br>' + lineNumber.format(++cpt)
    })
    content = content.replace(/@/g, '&nbsp;&nbsp;&nbsp;')

    fs.writeFile(fileName, content, 'utf-8', err => {
        if (err) {
            console.log(`Le fichier ${fileName} n'a pas pu être créé :\nErreur : ${err}`)
        }
    })
        
    res.redirect(`/viewer/${fileName}`)
})

app.get('/viewer/:fileName', (req, res) => {
    fs.readFile(`${req.params.fileName}`, 'utf-8', (err, data) => {
        if (!err) {
            res.send(data)
        }
        else {
            console.log(`Erreur de lecture du fichier ${fileName}`)
        }
    })
})

app.listen('3333', () => console.log("Listening on http://localhost:3333"))


// Functions
function buildFiles(filesToRead, extFilesToRead, res, content, cpt) {
    let error = 'Aucun fichier à lire...'
    content = content || ""
    cpt = cpt || 0

    if (filesToRead.length > cpt) {
        fs.readFile(filesToRead[cpt], 'utf-8', (err, data) => {
            if (!err) {
                content += `${data}${separatorContentFile}`
                buildFiles(filesToRead, extFilesToRead, res, content, ++cpt)
            }
            else {
                res.send(err)
            }
        })
    }
    else {
        if (cpt == 0) {
            res.send(error)
        }
        else {
            res.send(content)
            content = content.split(separatorContentFile)
            content.pop()
            for (let i = 0; i < content.length; i++) {
                const filename = `${extFilesToRead[i]}Code.dwaps`

                fs.writeFile(`../../${filename}`, content[i], 'utf-8',
                    err => console.log(`Le fichier ${filename} n'a pas pu être créé !`))
            }
            console.log(`${content.length} fichier(s) ont été créé !`)
        }
    }
}