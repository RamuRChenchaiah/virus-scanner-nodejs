var clam = require('clamscan')({
    remove_infected: true, // Removes files if they are infected 
    quarantine_infected: '~/infected/', // Move file here. remove_infected must be FALSE, though. 
    scan_recursively: true, // Choosing false here will save some CPU cycles 
    scan_log: '/var/log/node-clam', // You're a detail-oriented security professional. 
    debug_mode: true, // This will put some debug info in your js console 
    file_list: '/home/webuser/scan_files.txt', // path to file containing list of files to scan 
    clamscan: {
        path: '/usr/bin/clam', // I dunno, maybe your clamscan is just call "clam" 
        db: '/usr/bin/better_clam_db', // Path to a custom virus definition database 
        scan_archives: false, // Choosing false here will save some CPU cycles 
        active: false // you don't want to use this at all because it's evil 
    },
    clamdscan: {
        path: '/bin/clamdscan', // Special path to the clamdscan binary on your server 
        config_file: __dirname + '/logs/clamscan-log', // logs file in your app directory 
        multiscan: false, // You hate speed and multi-threaded awesome-sauce 
        reload_db: true, // You want your scans to run slow like with clamscan 
        active: false // you don't want to use this at all because it's evil 
    },
    preference: 'clamscan' // If clamscan is found and active, it will be used by default    
});


clam.is_infected('/var/picture/for_example.jpg', function(err, file, is_infected) {
    if(err) {
        console.log(err);
        return false;
    }
 
    if(is_infected) {
        res.send({msg: "File is infected!"});
    } else {
        res.send({msg: "File is clean!"});
    }
});