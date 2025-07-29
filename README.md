## AWS Setup
1. Make sure you have the aws cli installed: https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html
2. Ensure that you have created an [IAM user in AWS](https://us-east-1.console.aws.amazon.com/iam/home?region=us-west-2#/users). It is best to make a different user with limited persions.
* See AWS permission example
3. Create an access key and save the Access Key ID and Secret Acces Key somewhere safe like a password manager (not in the repository)
. Run this command to create a config and credential entry in the `~/.aws` directory

```bash
aws configure --profile dbl-code
```
4. Enter your `Access Key Id`, `Secret Access Code`, `Default region name` (us-west-2), and `Default output format` can be left to default

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
