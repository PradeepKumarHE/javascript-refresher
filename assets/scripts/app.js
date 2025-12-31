/* style-1*/
import {javascriptDeveloperName} from './util.js';

/* style-2*/
import defaultExport from './util.js';

/* style-3*/
import {interestedCloudPlatform,otherHobby} from './util.js';

/* style-4*/
import * as util from './util.js';

/* style-5*/

import {otherHobby as hobby} from './util.js';

console.log(`I am a developer skilled in ${defaultExport}.`);

console.log(`Hello, ${javascriptDeveloperName}! Welcome to the JavaScript world.`);

console.log(`I am interested in cloud platform: ${interestedCloudPlatform} and my other hobby is ${otherHobby}.`);

console.log(`Accessing all exports via namespace import:
- Developer Name: ${util.javascriptDeveloperName}
- Cloud Platform: ${util.interestedCloudPlatform}
- Other Hobby: ${util.otherHobby}
- Default Export: ${util.default}`);

console.log(`My hobby is: ${hobby}.`);  
