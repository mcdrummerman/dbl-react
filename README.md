## AWS Setup

### Initial setup

1. Make sure you have the aws cli installed: https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html
2. Ensure that you have created an [IAM user in AWS](https://us-east-1.console.aws.amazon.com/iam/home?region=us-west-2#/users). It is best to make a different user with limited persions.
* See AWS permission example below
3. Create an access key and save the Access Key ID and Secret Acces Key somewhere safe like a password manager (not in the repository)
. Run this command to create a config and credential entry in the `~/.aws` directory

```bash
aws configure --profile dbl-code
```
4. Enter your `Access Key Id`, `Secret Access Code`, `Default region name` (us-west-2), and `Default output format` can be left to default

### IAM S3 Policy example

This will allow the running of the `yarn deploy` command and restrict it to one particular bucket -> `deverbicyclelobby.com`

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "VisualEditor0",
            "Effect": "Allow",
            "Action": [
                "s3:PutObject",
                "s3:GetObject",
                "s3:AbortMultipartUpload",
                "s3:ListBucket",
                "s3:DeleteObject",
                "s3:GetBucketLocation"
            ],
            "Resource": [
                "arn:aws:s3:::denverbicyclelobby.com",
                "arn:aws:s3:::denverbicyclelobby.com/*"
            ]
        }
    ]
}
```

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



