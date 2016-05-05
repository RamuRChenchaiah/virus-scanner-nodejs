const logger = require('winston')

let scanFiles = (req, res) => {
    let scan_status = {
        good: 0,
        bad: 0
    };
    let files = req.files;
    if(files.length >= 1){
        clam.scan_files(files, (err, good_files, bad_files) => {
            if(!err) {
                if(bad_files.length > 0) {
                    res.send({
                        msg: good_files.length + ' files were OK. And' + bad_files.length + ' were infected!',
                        bad: bad_files,
                        good: good_files
                    });
                } else {
                    res.send({msg: "No infections found!."});
                }
            } else {
                // Do some error handling 
            }
        }, (err, file, is_infected) => {
            if(is_infected) {
                scan_status.bad++;
            } else {
                scan_status.good++;
            }
            console.log("Scan Status: " + (scan_status.bad + scan_status.good) + "/" + files.length);
        });    
    }else{
        res.json({"message":"No files were supplied for scanning"});
    }

}

exports.scanFiles = scanFiles;