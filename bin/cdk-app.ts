import * as cdk from 'aws-cdk-lib';
import appStack from '../lib/cdk-app-stack';

const app = new cdk.App();

new appStack(app, 'AppStacks', {
  
});