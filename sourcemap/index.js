const { SourceMapConsumer } = require('source-map');
const fs = require('fs');
const path = require('path');

function getSourcemapInfo() {
  const source = path.join(__dirname,'./dist/main.jsbundle.map')
  const sourceFileString = fs.readFileSync(source, 'utf8')


  return JSON.parse(sourceFileString)
}

async function findPosition (json) {

  SourceMapConsumer.with(json, null, (consumer) => {
    // console.log(consumer.sources);

    console.log(consumer.originalPositionFor({
      line: 2,
      column: 28
    }));
  })
}


findPosition(getSourcemapInfo())