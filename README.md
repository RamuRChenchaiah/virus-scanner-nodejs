# virus-scanner-nodejs
- Scan file uploads for virus
- Currently assumes a static location. Use request.file or request.file.files to scan multiple files, but you need to handle end logic to send the file/files to the scanner

## Pre-requisites:
- node js
- npm
- Install clamAV server in your machine 
	- More details at: 
		- [clamAV website](http://www.clamav.net/downloads) 
	- Scan file/files for virus by using clamAV 


## Installation/Usage
- Install the pre-requisites as above
- Make sure the clamAV is set in your computer, where you want to run the application-
- Update the util/scan.js with appropriate settings for clamAV
- npm install
- node bin/virus-scanner  or npm start
- Scanning multiple files:   http://localhost:3000/scan/files
- Quick scan:   http://localhost:3000/scan/file
 
---

## Troubleshooting tip:
- if you receive below error, make sure that the clamAV path is set correctly
```
            throw new Error("No valid & active virus scanning binaries are act
                  ^
Error: No valid & active virus scanning binaries are active and available!
```

## Todo:
- Externalize the clamAV settings from utils folder
- Tests


## License
	MIT
