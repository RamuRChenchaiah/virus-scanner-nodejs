var logger = require('winston')

var clam = require('clamscan')({
    remove_infected: true, // Removes files if they are infected 
    quarantine_infected: '~/infected/', // Move file here. remove_infected must be FALSE, though. 
    scan_recursively: true, // Choosing false here will save some CPU cycles 
    scan_log: '/var/log/node-clam', // You're a detail-oriented security professional. 
    debug_mode: true, // This will put some debug info in your js console 
    file_list: '/home/webuser/scan_files.txt', // path to file containing list of files to scan 
    clamscan: {
        path: '/usr/bin/clam',
        db: '/usr/bin/better_clam_db', // Path to a custom virus definition database 
        scan_archives: false,
        active: false 
    },
    clamdscan: {
        path: '/bin/clamdscan', // Special path to the clamdscan binary on your server 
        config_file: __dirname + '/logs/clamscan-log', // logs file in your app directory 
        multiscan: true,
        reload_db: true,
        active: false 
    },
    preference: 'clamscan'    
});


var quickScan= function(req, res){
    // scans a test file from the location: /var/picture/

    // Todo: Replace below file location with yours, dynamically like reg.file or req.file.files[0]  or that suites your input
    clam.is_infected('/var/picture/for_example.jpg', function(err, file, is_infected) {
        if(err) {
            logger.error(err);
            return false;
        } 
        if(is_infected) {
    		logger.info("File is infected!");
            res.send({msg: "File is infected!"});
        } else {
    		logger.info("File is clean!");
            res.send({msg: "File is clean!"});
        }
    });
}

exports.quickScan = quickScan