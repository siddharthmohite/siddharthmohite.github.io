import { useEffect } from "react";
import sdk from '@stackblitz/sdk'

export default function VSCodeEditor() {
  useEffect(() => {

    // sdk.embedProject(
    //     'stackblitz-container',
    //     {
    //       title: 'Node Starter',
    //       description: 'A basic Node.js project',
    //       template: 'node',
    //       files: {
    //         'index.js': `console.log('Hello World!');`,
    //         'package.json': `{
    //         "name": "my-project",
    //         "scripts": { "hello": "node index.js", "start": "serve node_modules" },
    //         "dependencies": { "serve": "^14.0.0" },
    //         "stackblitz": { "installDependencies": true, "startCommand": "npm start" },
    //       }`,
    //       },
    //     },
    //     {
    //       clickToLoad: true,
    //       openFile: 'index.js',
    //       terminalHeight: 50,
    //     },
    //   );

    sdk.embedGithubProject('stackblitz-container', 'siddharthmohite/siddharthmohite.github.io', {
      terminalHeight: 45,
    });
  }, []);

  return (<div id="stackblitz-container"  />);
  // style={{ height: "60vh", width: "60%" }}
}
