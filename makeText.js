const fs = require('fs');
const axios = require('axios')


// Retrieve the file path argument from the command line
const filePath = process.argv[2];


// Read the file

function cat(filePath){

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(`Error reading file: ${err}`);
      process.exit(1);
    }
  
    console.log(data);
  });

}


async function webSite(url){
  try {
    res = await axios.get(url)
    console.log(res.data);
  } catch (err) {
    console.error(`Error fetching ${url}: ${err}`);
    process.exit(1)
  }
}

if (filePath.slice(0, 4) === 'http') {
  webSite(filePath);
} else {
  cat(filePath);
}